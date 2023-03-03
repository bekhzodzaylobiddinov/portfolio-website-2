const closeBtn = document.getElementById("btn-close");
const barsBtn = document.getElementById("btn-bars");
const navbarEl = document.getElementById("nav-menu")

function openFunc() {
    closeBtn.style.setProperty('display', 'block');
    barsBtn.style.setProperty('display', 'none');
    navbarEl.style.setProperty('display', 'flex');
}
function closeFunc() {
    closeBtn.style.setProperty('display', 'none');
    barsBtn.style.setProperty('display', 'block');
    navbarEl.style.setProperty('display', 'none');
}

barsBtn.addEventListener('click', () => {
    openFunc();
})

closeBtn.addEventListener('click', () => {
    closeFunc();
})