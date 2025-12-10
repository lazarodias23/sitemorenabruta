document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.querySelector('header');

    // Toggle Menu
    menuBtn.addEventListener('click', () => {
        const isClosed = mobileMenu.classList.contains('opacity-0');
        
        if (isClosed) {
            mobileMenu.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
            mobileMenu.classList.add('opacity-100', 'visible');
            menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>';
        } else {
            mobileMenu.classList.add('opacity-0', 'invisible', 'pointer-events-none');
            mobileMenu.classList.remove('opacity-100', 'visible');
            menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
        }
    });

    // Close menu when clicking links
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('opacity-0', 'invisible', 'pointer-events-none');
            mobileMenu.classList.remove('opacity-100', 'visible');
            menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
        });
    });

    // Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-black/95', 'backdrop-blur-md', 'border-zinc-800', 'py-4');
            header.classList.remove('bg-transparent', 'border-transparent', 'py-6');
        } else {
            header.classList.remove('bg-black/95', 'backdrop-blur-md', 'border-zinc-800', 'py-4');
            header.classList.add('bg-transparent', 'border-transparent', 'py-6');
        }
    });
});
