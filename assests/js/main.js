const hamburgerBtn = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleBtn() {
    navList.classList.toggle('show');
}

hamburgerBtn.addEventListener('click', toggleBtn);