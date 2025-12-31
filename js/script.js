// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar sidbar untuk menghilangkan nav
const hamburger = Document.querySelector('#humburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target)&& !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});