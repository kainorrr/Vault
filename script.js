document.addEventListener('DOMContentLoaded', function () {
    const mainPage = document.getElementById('mainPage');
    const vaultPage = document.getElementById('vaultPage');
    const vaultBtn = document.getElementById('vaultBtn');
    const mainBtn = document.getElementById('mainBtn');
    const clickSound = document.getElementById('clickSound');

    vaultBtn.addEventListener('click', function () {
        mainPage.classList.add('hidden');
        vaultPage.classList.remove('hidden');
        playClickSound();
    });

    mainBtn.addEventListener('click', function () {
        mainPage.classList.remove('hidden');
        vaultPage.classList.add('hidden');
        playClickSound();
    });

    function playClickSound() {
        clickSound.currentTime = 0; // Rewind to the beginning
        clickSound.play();
    }
});
