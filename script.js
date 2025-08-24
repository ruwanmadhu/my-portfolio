document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');

    if (!menuBtn || !menu) return;

    menuBtn.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu after tapping a link (nice on mobile)
    menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            menu.classList.remove('open');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    });
});
