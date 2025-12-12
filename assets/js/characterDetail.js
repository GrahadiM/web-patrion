// =======================================================
// CONFIG
// =======================================================
const API_BASE = "https://cms.patrion.id/api/v1/public";
const IMG_BASE = "https://cms.patrion.id/storage";

// =======================================================
// UTILITIES
// =======================================================
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const result = regex.exec(location.search);
    return result === null ? '' : decodeURIComponent(result[1].replace(/\+/g, ' '));
}

function extractItem(response) {
    if (response.data) return response.data;
    if (response.character) return response.character;
    return response;
}

function extractList(response) {
    if (response.data && Array.isArray(response.data)) return response.data;
    if (response.characters && Array.isArray(response.characters)) return response.characters;
    if (Array.isArray(response)) return response;
    return [];
}

function renderInfo(label, value) {
    return `
        <div>
            <p class="text-gray-400 text-sm">${label}</p>
            <p class="text-white font-semibold">${value ?? '-'}</p>
        </div>
    `;
}

// =======================================================
// RENDER DETAIL KARAKTER
// =======================================================
function renderCharacterDetail(c) {
    const el = document.getElementById("character-content");

    if (!el) return;

    if (!c) {
        el.innerHTML = `
            <div class="text-center py-16">
                <h2 class="fantasy-font text-3xl text-white mb-4">Karakter Tidak Ditemukan</h2>
                <p class="text-gray-300 mb-8">Data karakter mungkin belum tersedia.</p>
                <a href="characters.html" class="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold py-3 px-8 rounded-full shadow-lg">
                    Kembali
                </a>
            </div>
        `;
        return;
    }

    // SEO
    document.title = `${c.name} - Detail Karakter PATRION`;
    document.querySelector("meta[name='description']")?.setAttribute("content", `${c.name} - ${c.region ?? 'Nusantara'} | Detail karakter PATRION.`);
    document.querySelector("meta[property='og:title']")?.setAttribute("content", `Detail ${c.name} - Karakter PATRION`);

    const img = c.image ? `${IMG_BASE}/${c.image}` : "assets/images/default-character.png";
    const video = c.video ? `${IMG_BASE}/${c.video}` : "";

    el.innerHTML = `
        <div class="max-w-9/10 mx-auto">
            <!-- Header -->
            <div class="text-center mb-12">
                <h1 class="fantasy-font text-4xl md:text-5xl font-bold text-white mb-2">
                    <span class="gold-text">${c.name}</span>
                </h1>
                <p class="text-2xl text-gray-300">${c.region ?? 'Nusantara'}</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Media -->
                <div class="flex flex-col items-center">
                    <div class="w-full max-w-md space-y-12">
                        ${video ? `
                            <div class="video-container rounded-lg overflow-hidden shadow-lg">
                                <video width="100%" controls poster="${img}" preload="metadata">
                                    <source src="${video}" type="video/mp4">
                                </video>
                            </div>
                        ` : ""}
                        <div class="character-image-container">
                            <img src="${img}" alt="${c.name}" class="character-image">
                        </div>
                    </div>
                </div>

                <!-- Info -->
                <div class="space-y-8">
                    <div class="info-card">
                        <h3 class="section-title fantasy-font text-3xl text-center text-white">Deskripsi</h3>
                        <p class="text-gray-300">${c.description ?? 'Belum ada deskripsi.'}</p>
                    </div>

                    <div class="info-card">
                        <h3 class="section-title fantasy-font text-3xl text-center text-white">Informasi Dasar</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${renderInfo("Nama Lengkap", c.full_name)}
                            ${renderInfo("Filosofi", c.philosophy)}
                            ${renderInfo("Tinggi", c.height)}
                            ${renderInfo("Berat", c.weight)}
                            ${renderInfo("Artefak", c.artifact)}
                            ${renderInfo("Power", c.power)}
                        </div>
                    </div>

                    <div class="info-card">
                        <h3 class="section-title fantasy-font text-3xl text-center text-white">Asal & DNA</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${renderInfo("Pulau", c.island)}
                            ${renderInfo("Asal", c.origin)}
                            ${renderInfo("DNA", c.dna)}
                            ${renderInfo("Attitude", c.attitude)}
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="info-card">
                            <h3 class="section-title fantasy-font text-3xl text-center text-white">Karakter</h3>
                            <p class="text-gray-300">${c.character ?? '-'}</p>
                        </div>
                        <div class="info-card">
                            <h3 class="section-title fantasy-font text-3xl text-center text-white">Warna Identitas</h3>
                            <div class="flex flex-wrap gap-3">
                                ${(c.colors ?? []).map((col, i) => `
                                    <div class="text-center">
                                        <div class="color-swatch mb-1" style="background-color:${col}"></div>
                                        <p class="text-xs text-gray-300">${(c.color_names ?? [])[i] ?? ''}</p>
                                    </div>
                                `).join("")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Navigasi Karakter Lain -->
            <div id="other-characters" class="mt-16"></div>
        </div>
    `;
}

// =======================================================
// LOAD OTHER CHARACTERS
// =======================================================
function loadOtherCharacters(activeSlug) {
    const container = document.getElementById("other-characters");
    if (!container) return;

    $.ajax({
        url: `${API_BASE}/characters`,
        method: "GET",
        success: function (response) {
            const list = extractList(response);

            if (!list.length) {
                container.innerHTML = `<p class="text-center text-gray-300">Tidak ada karakter lain.</p>`;
                return;
            }

            container.innerHTML = `
                <h3 class="fantasy-font text-3xl text-center text-white mb-6">Karakter Lainnya</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    ${list
                        .filter(c => c.slug !== activeSlug)
                        .map(c => `
                            <a href="character-detail.html?character=${c.slug}" 
                               class="glass-effect hover:bg-fantasy-purple/90 p-4 rounded-lg text-center transition-all">
                                <div class="w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden">
                                    <img src="${c.image ? IMG_BASE+'/'+c.image : 'assets/images/default-character.png'}" 
                                         class="w-full h-full object-cover">
                                </div>
                                <p class="text-white font-semibold">${c.name}</p>
                                <p class="text-gray-400 text-sm">${c.region ?? 'Nusantara'}</p>
                            </a>
                        `).join("")}
                </div>
            `;
        },
        error: function () {
            container.innerHTML = `<p class="text-center text-gray-300">Gagal memuat karakter lain.</p>`;
        }
    });
}

// =======================================================
// LOAD DETAIL KARAKTER DARI API
// =======================================================
function loadCharacterDetail(slug) {
    $.ajax({
        url: `${API_BASE}/characters/${slug}`,
        method: "GET",
        success: function (response) {
            const character = extractItem(response);
            renderCharacterDetail(character);

            // Panggil loadOtherCharacters setelah render selesai
            loadOtherCharacters(slug);
        },
        error: function () {
            renderCharacterDetail(null);
        }
    });
}

// =======================================================
// INIT
// =======================================================
$(document).ready(function() {
    const slug = getUrlParameter("character") || "kunna";
    loadCharacterDetail(slug);
});
