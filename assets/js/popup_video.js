// Popup video
const openBtn = document.getElementById('openVideo');
const modal = document.getElementById('videoModal');
const closeBtn = document.getElementById('closeVideo');
const video = document.getElementById('patrionVideo');

openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    video.currentTime = 0;
    video.play();
});

closeBtn.addEventListener('click', () => {
    video.pause();
    modal.classList.add('hidden');
});

// Tutup popup jika klik area luar video
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        video.pause();
        modal.classList.add('hidden');
    }
});