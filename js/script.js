function toggleOverlay() {
    const overlay = document.getElementById('overlay');
    const floatingButton = document.getElementById('floatingButton');

    if (overlay.style.display === 'flex') {
        overlay.style.display = 'none';
        floatingButton.innerHTML = '<i class="bi bi-plus-lg"></i>';
    } else {
        overlay.style.display = 'flex';
        floatingButton.innerHTML = '<i class="bi bi-x-lg"></i>';
    }
}
