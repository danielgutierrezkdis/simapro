document.addEventListener("DOMContentLoaded", () => {
    const introductionSection = document.querySelector(".carousel-images");
    const slides = document.querySelectorAll(".carousel-slide");

    const images = [
        "/Imagenes/Index/Carrusel/equipo-simapro.jpeg",
        "/Imagenes/Index/Carrusel/Fondo.jpg",
        "/Imagenes/Index/Carrusel/Fondo2.jpeg",
    ]; // Rutas de las imágenes de fondo

    const content = [
        {
            title: "Encuentra tu plan SimaPro",
            description: "Este breve cuestionario te guiará hacia el producto adecuado para ti.",
            buttonText: "Iniciar cuestionario",
            buttonLink: "/simapro.html"
        },
        {
            title: "Optimiza tu análisis de ciclo de vida",
            description: "Con SimaPro, obtendrás resultados precisos y rápidos para tomar decisiones más informadas.",
            buttonText: "Más información",
            buttonLink: "#contacto"
        },
        {
            title: "Mide, Comprende y Transforma tu Impacto Ambiental",
            description: "Descubre el poder de SimaPro, la herramienta líder en Análisis de Ciclo de Vida, de la mano de CADIS, Global Partner Autorizado.",
            buttonText: "Solicita una demo",
            buttonLink: "#demo"
        },
    ];

    let currentIndex = 0;

    // Función para precargar imágenes
    const preloadImages = () => {
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    };

    // Generar contenido dinámico
    slides.forEach((slide, index) => {
        slide.style.backgroundImage = `url('${images[index]}')`;

        const textContainer = document.createElement("div");
        textContainer.classList.add("carousel-text");

        const title = document.createElement("h2");
        title.textContent = content[index].title;

        const description = document.createElement("p");
        description.textContent = content[index].description;

        const button = document.createElement("a");
        button.textContent = content[index].buttonText;
        button.href = content[index].buttonLink;
        button.classList.add("cta");

        textContainer.appendChild(title);
        textContainer.appendChild(description);
        textContainer.appendChild(button);

        slide.appendChild(textContainer);
    });

    const changeBackground = () => {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slides[currentIndex].classList.add("active");
        currentIndex = (currentIndex + 1) % slides.length;
    };

    // Precargar imágenes para evitar parpadeos
    preloadImages();

    // Inicializa con la primera imagen
    changeBackground();

    // Configurar el intervalo para cambiar las diapositivas
    setInterval(changeBackground, 6000);
});
