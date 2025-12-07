// Data karakter berdasarkan informasi yang diberikan
const characters = {
    kunna: {
        name: "KUNNA",
        region: "Jawa Tengah",
        fullName: "Kunna",
        philosophy: "Kunanti yang di Tata",
        height: "178 cm",
        weight: "77 kg",
        artifact: "Topeng",
        power: "Cahaya",
        island: "Jawa",
        origin: "Bantul",
        dna: "Raja Jawa",
        attitude: "Mewakili karakter Jawa",
        character: "Ramah, Santun, Sabar, Ulet, Pintar, Mengutamakan Persatuan dan Adab",
        colors: ["#FF6B35", "#8B4513", "#FFD700"],
        colorNames: ["Jingga", "Coklat Tua", "Kuning"],
        image: "assets/images/characters/chara-01.png",
        video: "assets/video/character/patrion kuna.mp4",
        description: "KUNNA adalah karakter yang mewakili Jawa Tengah dengan filosofi 'Kunanti yang di Tata'. Dengan tinggi 178 cm dan berat 77 kg, KUNNA membawa artefak Topeng dan menguasai kekuatan Cahaya. Berasal dari Bantul, Jawa, KUNNA memiliki DNA Raja Jawa dan mewakili karakter Jawa yang ramah, santun, sabar, ulet, pintar, serta mengutamakan persatuan dan adab."
    },
    wabu: {
        name: "WABU",
        region: "Jakarta",
        fullName: "Wabu",
        philosophy: "Warisan Budaya",
        height: "177 cm",
        weight: "78 kg",
        artifact: "Kode Biner",
        power: "Digital",
        island: "Jawa",
        origin: "Jakarta",
        dna: "Multi Culture (China)",
        attitude: "Mewakili Karakter Betawi",
        character: "Ramah, Santun, Sabar, Ulet, Pintar, Mengutamakan Persatuan dan Adab",
        colors: ["#FFFFFF", "#000000", "#FF0000"],
        colorNames: ["Putih", "Hitam", "Merah"],
        image: "assets/images/characters/chara-02.png",
        video: "assets/video/character/patrion wabu.mp4",
        description: "WABU adalah karakter yang mewakili Jakarta dengan filosofi 'Warisan Budaya'. Dengan tinggi 177 cm dan berat 78 kg, WABU membawa artefak Kode Biner dan menguasai kekuatan Digital. Berasal dari Jakarta, Jawa, WABU memiliki DNA Multi Culture (China) dan mewakili karakter Betawi yang ramah, santun, sabar, ulet, pintar, serta mengutamakan persatuan dan adab."
    },
    asta: {
        name: "ASTA",
        region: "Bali",
        fullName: "Asta",
        philosophy: "Anak Semesta",
        height: "175 cm",
        weight: "80 kg",
        artifact: "Ikat kepala",
        power: "Magnet",
        island: "Bali",
        origin: "Bali",
        dna: "Raja Bali",
        attitude: "Mewakili karakter Bali",
        character: "Ramah, Santun, Sabar, Ulet, Pintar, Mengutamakan Persatuan dan Adab",
        colors: ["#FF6B35", "#8B4513", "#FFD700"],
        colorNames: ["Jingga", "Coklat Tua", "Kuning"],
        image: "assets/images/characters/chara-03.png",
        video: "assets/video/character/patrion asta.mp4",
        description: "ASTA adalah karakter yang mewakili Bali dengan filosofi 'Anak Semesta'. Dengan tinggi 175 cm dan berat 80 kg, ASTA membawa artefak Ikat kepala dan menguasai kekuatan Magnet. Berasal dari Bali, ASTA memiliki DNA Raja Bali dan mewakili karakter Bali yang ramah, santun, sabar, ulet, pintar, serta mengutamakan persatuan dan adab."
    },
    taran: {
        name: "TARAN",
        region: "Sumatera",
        fullName: "Taran",
        philosophy: "Warisan Budaya",
        height: "177 cm",
        weight: "78 kg",
        artifact: "Kode Biner",
        power: "Digital",
        island: "Sumatera",
        origin: "Bukit Tinggi",
        dna: "Multi Culture (China)",
        attitude: "Mewakili karakter Sumatera",
        character: "Ramah, Santun, Sabar, Ulet, Pintar, Mengutamakan Persatuan dan Adab",
        colors: ["#FFFFFF", "#000000", "#FF0000"],
        colorNames: ["Putih", "Hitam", "Merah"],
        image: "assets/images/characters/chara-04.png",
        video: "assets/video/character/patrion taran.mp4",
        description: "TARAN adalah karakter yang mewakili Sumatera dengan filosofi 'Warisan Budaya'. Dengan tinggi 177 cm dan berat 78 kg, TARAN membawa artefak Kode Biner dan menguasai kekuatan Digital. Berasal dari Bukit Tinggi, Sumatera, TARAN memiliki DNA Multi Culture (China) dan mewakili karakter Sumatera yang ramah, santun, sabar, ulet, pintar, serta mengutamakan persatuan dan adab."
    },
    sanu: {
        name: "SANU",
        region: "Sulawesi",
        fullName: "Sanu",
        philosophy: "Warisan Budaya",
        height: "177 cm",
        weight: "78 kg",
        artifact: "Kode Biner",
        power: "Digital",
        island: "Sulawesi",
        origin: "Sulawesi",
        dna: "Multi Culture (China)",
        attitude: "Mewakili karakter Sulawesi",
        character: "Ramah, Santun, Sabar, Ulet, Pintar, Mengutamakan Persatuan dan Adab",
        colors: ["#FFFFFF", "#000000", "#FF0000"],
        colorNames: ["Putih", "Hitam", "Merah"],
        image: "assets/images/characters/chara-05.png",
        video: "assets/video/character/patrion sanu.mp4",
        description: "SANU adalah karakter yang mewakili Sulawesi dengan filosofi 'Warisan Budaya'. Dengan tinggi 177 cm dan berat 78 kg, SANU membawa artefak Kode Biner dan menguasai kekuatan Digital. Berasal dari Sulawesi, SANU memiliki DNA Multi Culture (China) dan mewakili karakter Sulawesi yang ramah, santun, sabar, ulet, pintar, serta mengutamakan persatuan dan adab."
    },
    kabi: {
        name: "KABI",
        region: "Papua",
        fullName: "Kabi",
        philosophy: "Warisan Budaya",
        height: "177 cm",
        weight: "78 kg",
        artifact: "Kode Biner",
        power: "Digital",
        island: "Papua",
        origin: "Jayapura",
        dna: "Astronesia",
        attitude: "Mewakili karakter Papua",
        character: "Ramah, Santun, Sabar, Ulet, Pintar, Mengutamakan Persatuan dan Adab",
        colors: ["#FFFFFF", "#000000", "#FF0000"],
        colorNames: ["Putih", "Hitam", "Merah"],
        image: "assets/images/characters/chara-06.png",
        video: "assets/video/character/patrion kabi.mp4",
        description: "KABI adalah karakter yang mewakili Papua dengan filosofi 'Warisan Budaya'. Dengan tinggi 177 cm dan berat 78 kg, KABI membawa artefak Kode Biner dan menguasai kekuatan Digital. Berasal dari Jayapura, Papua, KABI memiliki DNA Astronesia dan mewakili karakter Papua yang ramah, santun, sabar, ulet, pintar, serta mengutamakan persatuan dan adab."
    },
    arun: {
        name: "ARUN",
        region: "Kalimantan",
        fullName: "Arun",
        philosophy: "Warisan Budaya",
        height: "177 cm",
        weight: "78 kg",
        artifact: "Kode Biner",
        power: "Digital",
        island: "Kalimantan",
        origin: "Kalimantan",
        dna: "Multi Culture (China)",
        attitude: "Mewakili Karakter Betawi",
        character: "Ramah, Santun, Sabar, Ulet, Pintar, Mengutamakan Persatuan dan Adab",
        colors: ["#FFFFFF", "#000000", "#FF0000"],
        colorNames: ["Putih", "Hitam", "Merah"],
        image: "assets/images/characters/chara-07.png",
        video: "assets/video/character/patrion arun.mp4",
        description: "ARUN adalah karakter yang mewakili Kalimantan dengan filosofi 'Warisan Budaya'. Dengan tinggi 177 cm dan berat 78 kg, ARUN membawa artefak Kode Biner dan menguasai kekuatan Digital. Berasal dari Kalimantan, ARUN memiliki DNA Multi Culture (China) dan mewakili karakter Betawi yang ramah, santun, sabar, ulet, pintar, serta mengutamakan persatuan dan adab."
    },
    antis: {
        name: "ANTIS",
        region: "Atlantis",
        fullName: "Antis",
        philosophy: "Warisan Budaya",
        height: "177 cm",
        weight: "78 kg",
        artifact: "Kode Biner",
        power: "Digital",
        island: "Atlantis",
        origin: "Atlantis",
        dna: "Multi Culture (China)",
        attitude: "Mewakili karakter Sumatera",
        character: "Ramah, Santun, Sabar, Ulet, Pintar, Mengutamakan Persatuan dan Adab",
        colors: ["#FFFFFF", "#000000", "#FF0000"],
        colorNames: ["Putih", "Hitam", "Merah"],
        image: "assets/images/characters/chara-08.png",
        video: "assets/video/character/patrion antis.mp4",
        description: "ANTIS adalah karakter yang mewakili Atlantis dengan filosofi 'Warisan Budaya'. Dengan tinggi 177 cm dan berat 78 kg, ANTIS membawa artefak Kode Biner dan menguasai kekuatan Digital. Berasal dari Atlantis, ANTIS memiliki DNA Multi Culture (China) dan mewakili karakter Sumatera yang ramah, santun, sabar, ulet, pintar, serta mengutamakan persatuan dan adab."
    }
};

// Fungsi untuk mendapatkan parameter URL
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Fungsi untuk merender detail karakter
function renderCharacterDetail(characterId) {
    const character = characters[characterId];
    const contentElement = document.getElementById('character-content');

    if (!character) {
        contentElement.innerHTML = `
            <div class="text-center py-16">
                <h2 class="fantasy-font text-3xl text-white mb-4">Karakter Tidak Ditemukan</h2>
                <p class="text-gray-300 mb-8">Karakter yang Anda cari tidak ditemukan.</p>
                <a href="characters.html" class="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                    Kembali ke Daftar Karakter
                </a>
            </div>
        `;
        return;
    }

    // Update title
    document.title = `${character.name} - Detail Karakter PATRION`;

    // Render konten karakter
    contentElement.innerHTML = `
        <div class="max-w-9/10 mx-auto">
            <!-- Header -->
            <div class="text-center mb-12">
                <h1 class="fantasy-font text-4xl md:text-5xl font-bold text-white mb-2">
                    <span class="gold-text">${character.name}</span>
                </h1>
                <p class="text-2xl text-gray-300">${character.region}</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Media Karakter -->
                <div class="flex flex-col items-center">
                    <div class="w-full max-w-md space-y-12">
                        <!-- Video Karakter -->
                        <div class="video-container rounded-lg overflow-hidden shadow-lg">
                            <video width="100%" height="auto" controls class="w-full" preload="metadata" poster="${character.image}" autoplay loop>
                                <source src="${character.video}" type="video/mp4">
                                Browser Anda tidak mendukung video HTML5.
                            </video>
                        </div>

                        <!-- Gambar Karakter -->
                        <div class="character-image-container">
                            <img src="${character.image}" alt="${character.name}" class="character-image">
                        </div>
                    </div>
                </div>

                <!-- Informasi Karakter -->
                <div class="space-y-8">
                    <!-- Deskripsi -->
                    <div class="info-card">
                        <h3 class="section-title fantasy-font text-3xl font-bold text-center text-white">Deskripsi</h3>
                        <p class="text-gray-300">${character.description}</p>
                    </div>

                    <!-- Informasi Dasar -->
                    <div class="info-card">
                        <h3 class="section-title fantasy-font text-3xl font-bold text-center text-white">Informasi Dasar</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p class="text-gray-400 text-sm">Nama Lengkap</p>
                                <p class="text-white font-semibold">${character.fullName}</p>
                            </div>
                            <div>
                                <p class="text-gray-400 text-sm">Filosofi</p>
                                <p class="text-white font-semibold">${character.philosophy}</p>
                            </div>
                            <div>
                                <p class="text-gray-400 text-sm">Tinggi</p>
                                <p class="text-white font-semibold">${character.height}</p>
                            </div>
                            <div>
                                <p class="text-gray-400 text-sm">Berat</p>
                                <p class="text-white font-semibold">${character.weight}</p>
                            </div>
                            <div>
                                <p class="text-gray-400 text-sm">Artefak</p>
                                <p class="text-white font-semibold">${character.artifact}</p>
                            </div>
                            <div>
                                <p class="text-gray-400 text-sm">Power</p>
                                <p class="text-white font-semibold">${character.power}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Asal dan DNA -->
                    <div class="info-card">
                        <h3 class="section-title fantasy-font text-3xl font-bold text-center text-white">Asal dan DNA</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p class="text-gray-400 text-sm">Pulau</p>
                                <p class="text-white font-semibold">${character.island}</p>
                            </div>
                            <div>
                                <p class="text-gray-400 text-sm">Asal</p>
                                <p class="text-white font-semibold">${character.origin}</p>
                            </div>
                            <div>
                                <p class="text-gray-400 text-sm">DNA</p>
                                <p class="text-white font-semibold">${character.dna}</p>
                            </div>
                            <div>
                                <p class="text-gray-400 text-sm">Attitude</p>
                                <p class="text-white font-semibold">${character.attitude}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Karakter dan Warna -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <!-- Karakter -->
                        <div class="info-card">
                            <h3 class="section-title fantasy-font text-3xl font-bold text-center text-white">Karakter</h3>
                            <p class="text-gray-300">${character.character}</p>
                        </div>

                        <!-- Warna Identitas -->
                        <div class="info-card">
                            <h3 class="section-title fantasy-font text-3xl font-bold text-center text-white">Warna Identitas</h3>
                            <div class="flex flex-wrap gap-3">
                                ${character.colors.map((color, index) => `
                                    <div class="text-center">
                                        <div class="color-swatch mb-1" style="background-color: ${color};"></div>
                                        <p class="text-xs text-gray-300">${character.colorNames[index]}</p>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="mt-3">
                                <p class="text-sm text-gray-400">${character.colorNames.join(', ')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Navigasi Karakter Lain -->
            <div class="mt-16">
                <h3 class="section-title fantasy-font text-3xl font-bold text-center text-white">Karakter Lainnya</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    ${Object.entries(characters)
                        .filter(([id]) => id !== characterId)
                        .map(([id, char]) => `
                            <a href="character-detail.html?character=${id}" class="glass-effect hover:bg-fantasy-purple/90 p-4 rounded-lg transition-all text-center">
                                <div class="w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden">
                                    <img src="${char.image}" alt="${char.name}" class="w-full h-full object-cover">
                                </div>
                                <p class="text-white font-semibold">${char.name}</p>
                                <p class="text-gray-400 text-sm">${char.region}</p>
                            </a>
                        `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Ambil parameter karakter dari URL
const characterId = getUrlParameter('character') || 'kunna';

// Render karakter berdasarkan parameter
renderCharacterDetail(characterId);

// Highlight navigasi karakter yang aktif
const navLinks = document.querySelectorAll('.character-nav a');
navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href.includes(characterId)) {
        link.classList.add('bg-gradient-to-r', 'from-yellow-400', 'to-yellow-500', 'text-black');
        link.classList.remove('glass-effect');
    }
});