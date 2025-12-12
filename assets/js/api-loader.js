/******************************************************
 * CONFIG
 *****************************************************/
const API_BASE = "https://cms.patrion.id/api/v1/public";
const IMG_BASE = "https://cms.patrion.id/storage";

/******************************************************
 * HELPERS
 *****************************************************/

// Standarisasi seluruh jenis response API
function extractList(response) {
    if (Array.isArray(response)) return response;
    if (response.data && Array.isArray(response.data)) return response.data;
    if (response.characters && Array.isArray(response.characters)) return response.characters;
    if (response.programs && Array.isArray(response.programs)) return response.programs;

    console.warn("Unknown response format:", response);
    return [];
}

// Render HTML ke container
function renderSlides(containerSelector, html) {
    document.querySelector(containerSelector).innerHTML = html;
}

// Init Swiper dinamis dengan hover pause + loop guard
function initDynamicSwiper(selector, slidesPerViewMobile = 1, slidesPerViewMd = 2, slidesPerViewLg = 3, space = 20) {
    const totalSlides = document.querySelectorAll(`${selector} .swiper-slide`).length;

    if (totalSlides < 1) {
        console.warn(`Swiper skipped: ${selector} has no slides.`);
        return null;
    }

    const swiper = new Swiper(selector, {
        slidesPerView: slidesPerViewMobile,
        spaceBetween: space,
        loop: totalSlides > slidesPerViewMobile,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false
        },
        breakpoints: {
            640: { slidesPerView: slidesPerViewMd },
            1024: { slidesPerView: slidesPerViewLg }
        },
        navigation: {
            nextEl: `${selector} .swiper-button-next`,
            prevEl: `${selector} .swiper-button-prev`,
        },
        pagination: {
            el: `${selector} .swiper-pagination`,
            clickable: true
        }
    });

    // Pause on hover
    const swiperEl = document.querySelector(selector);
    swiperEl.addEventListener("mouseenter", () => swiper.autoplay.stop());
    swiperEl.addEventListener("mouseleave", () => swiper.autoplay.start());

    return swiper;
}

/******************************************************
 * LOAD CHARACTERS
 *****************************************************/
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
                                 loading="lazy"
                                 alt="${character.name}"
                                 class="w-full h-full object-cover hover:scale-110 transition-transform duration-700">
                        </div>

                        <div class="p-4 bg-black/50 backdrop-blur-sm flex justify-center items-center h-1/5">
                            <h3 class="text-lg font-bold text-white fantasy-font">PATRION ${character.name}</h3>
                        </div>

                    </div>
                </div>
            `;
            });

            renderSlides("#characters-swiper", html);

            setTimeout(() => {
                initDynamicSwiper(".characters-swiper", 1, 2, 3, 15);
            }, 150);
        }
    });
}

/******************************************************
 * LOAD PROGRAMS
 *****************************************************/
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
                            <img src="${img}" loading="lazy" alt="${program.title}" class="w-full h-full object-cover">

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

            renderSlides("#program-swiper", html);

            setTimeout(() => {
                initDynamicSwiper(".program-swiper", 1, 2, 3, 20);
            }, 150);
        }
    });
}

/******************************************************
 * INIT
 *****************************************************/
$(document).ready(function () {
    loadCharacters();
    loadPrograms();
});
