/**
 * Script para controlar el menú hamburguesa en dispositivos móviles
 * Con soporte para accesibilidad y navegación por teclado
 */
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const overlay = document.querySelector('.menu-overlay');
    const menuLinks = mainNav.querySelectorAll('a');
    let isAnimating = false;

    if (!menuToggle || !mainNav || !overlay) return;

    // Función para abrir/cerrar el menú con animación suave
    function toggleMenu() {
        if (isAnimating) return;
        isAnimating = true;

        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        
        // Añadir clase para la animación
        mainNav.classList.add('animating');
        mainNav.classList.toggle('active');
        overlay.classList.toggle('active');

        // Si el menú se abre, enfoca el primer elemento del menú
        if (!isExpanded) {
            setTimeout(() => {
                menuLinks[0].focus();
            }, 300);
        }

        // Remover clase de animación después de la transición
        setTimeout(() => {
            mainNav.classList.remove('animating');
            isAnimating = false;
        }, 400);
    }

    // Manejador de eventos para el botón hamburguesa
    menuToggle.addEventListener('click', toggleMenu);

    // Cerrar menú cuando se hace clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });

        // Añadir efecto hover táctil
        link.addEventListener('touchstart', function() {
            this.classList.add('touch-hover');
        });

        link.addEventListener('touchend', function() {
            this.classList.remove('touch-hover');
        });
    });

    // Cerrar menú al presionar la tecla Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
            toggleMenu();
        }
    });

    // Manejar eventos de redimensionamiento
    let resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768 && menuToggle.getAttribute('aria-expanded') === 'true') {
                menuToggle.setAttribute('aria-expanded', 'false');
                mainNav.classList.remove('active');
                overlay.classList.remove('active');
            }
        }, 250);
    });

    // Manejar navegación por teclado dentro del menú
    const lastLink = menuLinks[menuLinks.length - 1];
    lastLink.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' && !e.shiftKey) {
            e.preventDefault();
            menuToggle.focus();
        }
    });

    menuLinks[0].addEventListener('keydown', function (e) {
        if (e.key === 'Tab' && e.shiftKey) {
            e.preventDefault();
            menuToggle.focus();
        }
    });

    // Cerrar menú al hacer clic en el overlay
    overlay.addEventListener('click', function () {
        if (menuToggle.getAttribute('aria-expanded') === 'true') {
            toggleMenu();
        }
    });

    // Prevenir scroll del body cuando el menú está abierto
    function toggleBodyScroll(disable) {
        document.body.style.overflow = disable ? 'hidden' : '';
    }

    // Observar cambios en el estado del menú
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'aria-expanded') {
                const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
                toggleBodyScroll(isExpanded);
            }
        });
    });

    observer.observe(menuToggle, { attributes: true });
});
