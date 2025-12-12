const API_BASE = "https://cms.patrion.id/api/v1/public";
const IMG_BASE = "https://cms.patrion.id/storage";
const TRAILER_BASE = "https://cms.patrion.id/storage";

// Standardize API response extraction
function extractList(response) {
    if (Array.isArray(response)) return response;
    if (response.data && Array.isArray(response.data)) return response.data;
    if (response.programs && Array.isArray(response.programs)) return response.programs;
    if (response.characters && Array.isArray(response.characters)) return response.characters;
    
    console.warn("Unknown API response format:", response);
    return [];
}

function extractItem(response) {
    if (response.data) return response.data;
    if (response.program) return response.program;
    if (response.character) return response.character;
    return response;
}

// API Service Functions
const PatrionAPI = {
    async getPrograms() {
        try {
            const response = await fetch(`${API_BASE}/programs`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            return extractList(data);
        } catch (error) {
            console.error('Failed to fetch programs:', error);
            return [];
        }
    },

    async getProgramBySlug(slug) {
        try {
            // Pertama coba ambil semua program
            const allPrograms = await this.getPrograms();
            
            // Cari program dengan slug yang sesuai
            const program = allPrograms.find(p => 
                p.slug === slug || 
                p.id == slug || 
                this.normalizeSlug(p.slug) === this.normalizeSlug(slug)
            );
            
            return program || null;
        } catch (error) {
            console.error(`Failed to fetch program ${slug}:`, error);
            return null;
        }
    },

    async getProgramById(id) {
        try {
            const allPrograms = await this.getPrograms();
            const program = allPrograms.find(p => p.id == id);
            return program || null;
        } catch (error) {
            console.error(`Failed to fetch program ID ${id}:`, error);
            return null;
        }
    },

    async getCharacters() {
        try {
            const response = await fetch(`${API_BASE}/characters`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            return extractList(data);
        } catch (error) {
            console.error('Failed to fetch characters:', error);
            return [];
        }
    },

    getImageUrl(imagePath) {
        if (!imagePath) return 'assets/images/default-program.png';
        if (imagePath.startsWith('http')) return imagePath;
        return `${IMG_BASE}/${imagePath}`;
    },

    getTrailerUrl(trailerPath) {
        if (!trailerPath) return null;
        if (trailerPath.startsWith('http')) return trailerPath;
        return `${TRAILER_BASE}/${trailerPath}`;
    },

    // Helper untuk normalize slug (untuk case-insensitive matching)
    normalizeSlug(slug) {
        if (!slug) return '';
        return slug.toString().toLowerCase().replace(/\s+/g, '-');
    },

    // Cari program berdasarkan title (fallback)
    async searchProgramByTitle(title) {
        try {
            const allPrograms = await this.getPrograms();
            const normalizedTitle = title.toLowerCase().trim();
            
            return allPrograms.find(p => 
                p.title.toLowerCase().includes(normalizedTitle) ||
                normalizedTitle.includes(p.title.toLowerCase())
            ) || null;
        } catch (error) {
            console.error('Failed to search program:', error);
            return null;
        }
    },

    // Generate slug dari title (untuk fallback)
    generateSlugFromTitle(title) {
        return title
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // Hapus special characters
            .replace(/\s+/g, '-')     // Ganti spasi dengan dash
            .replace(/-+/g, '-');     // Hapus multiple dashes
    }
};

// Make available globally
window.PatrionAPI = PatrionAPI;
window.extractList = extractList;
window.extractItem = extractItem;