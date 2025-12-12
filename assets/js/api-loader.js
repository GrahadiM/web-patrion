// =============================
// GLOBAL API BASE
// =============================
const API_BASE = "https://cms.patrion.id/api/v1/public";
const IMG_BASE = "https://cms.patrion.id/storage";

// Helper mengambil list dari berbagai struktur response
function extractList(response) {
    if (Array.isArray(response)) return response;
    if (response.data && Array.isArray(response.data)) return response.data;
    if (response.characters && Array.isArray(response.characters)) return response.characters;
    if (response.programs && Array.isArray(response.programs)) return response.programs;
    
    console.warn("Unknown response format:", response);
    return [];
}

// Dynamic loop helper
function getLoopMode(total, perView) {
    return total > perView;
}

// =============================
// LOAD CHARACTERS
// =============================
function loadCharacters() {

    $.ajax({
        url: `${API_BASE}/characters`,
        method: "GET",
        success: function (response) {

            const data = extractList(response);

            let html = "";

            data.forEach(character => {

                const img = character.image
                    ? `${IMG_BASE}/${character.image}`
                    : "assets/images/default-character.png";

                html += `
                    <div class="swiper-slide cursor-pointer character-slide">
                        <div class="character-card rounded-xl overflow-hidden shadow-lg w-full mx-auto h-full"
                             onclick="window.location.href='character-detail.html?character=${character.slug}'">

                            <div class="relative w-full h-4/5 overflow-hidden">
                                <img src="${img}"
                                     alt="${character.name}"
                                     loading="lazy"
                                     class="w-full h-full object-cover character-image hover:scale-110 transition-transform duration-700">
                            </div>

                            <div class="p-4 bg-black/50 backdrop-blur-sm flex justify-center items-center h-1/5">
                                <h3 class="text-lg font-bold text-white fantasy-font">PATRION ${character.name}</h3>
                            </div>

                        </div>
                    </div>
                `;
            });

            $("#characters-swiper").html(html);

            // Init Swiper setelah data masuk
            setTimeout(() => {
                const totalSlides = document.querySelectorAll("#characters-swiper .swiper-slide").length;

                if (totalSlides < 2) {
                    console.warn("Swiper disabled because slides < 2");
                    return;
                }

                const charactersSwiper = new Swiper('.characters-swiper', {
                    slidesPerView: 1,
                    spaceBetween: 15,
                    loop: totalSlides > 1,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false
                    },
                    breakpoints: {
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    },
                    navigation: {
                        nextEl: '.characters-swiper .swiper-button-next',
                        prevEl: '.characters-swiper .swiper-button-prev',
                    },
                    pagination: { el: '.characters-swiper .swiper-pagination', clickable: true }
                });

                // === PAUSE AUTOPLAY ON HOVER ===
                const swiperEl = document.querySelector('.characters-swiper');
                swiperEl.addEventListener('mouseenter', () => charactersSwiper.autoplay.stop());
                swiperEl.addEventListener('mouseleave', () => charactersSwiper.autoplay.start());

            }, 300);

        }
    });
}


// =============================
// LOAD PROGRAMS
// =============================
function loadPrograms() {

    $.ajax({
        url: `${API_BASE}/programs`,
        method: "GET",
        success: function (response) {

            const data = extractList(response);
            let html = "";

            data.forEach(program => {
                const img = program.thumbnail
                    ? `${IMG_BASE}/${program.thumbnail}`
                    : "assets/images/default-program.png";

                html += `
                    <div class="swiper-slide cursor-pointer">
                        <div class="glass-effect rounded-xl overflow-hidden w-full border border-fantasy-gold/20 hover:border-fantasy-gold/50 transition-all duration-300"
                             onclick="window.location.href='program-detail.html?program=${program.slug}'">

                            <div class="relative h-4/5 overflow-hidden">
                                <img src="${img}" alt="${program.title}" loading="lazy" class="w-full h-full object-cover">

                                <div class="absolute top-4 left-4">
                                    <span class="element-badge bg-yellow-600/80 border-fantasy-gold/50">
                                        ${program.platform.toUpperCase()}
                                    </span>
                                </div>
                            </div>

                            <div class="p-4 flex justify-center items-center h-1/5">
                                <h3 class="fantasy-font text-lg text-white">${program.title}</h3>
                            </div>

                        </div>
                    </div>
                `;
            });

            $("#program-swiper").html(html);

            // Init Swiper setelah render
            setTimeout(() => {
                const totalSlides = document.querySelectorAll("#program-swiper .swiper-slide").length;

                if (totalSlides < 2) {
                    console.warn("Swiper disabled because slides < 2");
                    return;
                }

                const programSwiper = new Swiper('.program-swiper', {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    loop: totalSlides > 1,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false
                    },
                    breakpoints: {
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    },
                    navigation: {
                        nextEl: '.program-swiper .swiper-button-next',
                        prevEl: '.program-swiper .swiper-button-prev',
                    },
                    pagination: { el: '.program-swiper .swiper-pagination', clickable: true }
                });

                // === PAUSE AUTOPLAY ON HOVER ===
                const swiperEl = document.querySelector('.program-swiper');
                swiperEl.addEventListener('mouseenter', () => programSwiper.autoplay.stop());
                swiperEl.addEventListener('mouseleave', () => programSwiper.autoplay.start());

            }, 300);

        }
    });
}


// =============================
// INIT
// =============================
$(document).ready(function () {
    loadCharacters();
    loadPrograms();
});
