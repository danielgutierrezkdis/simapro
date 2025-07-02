// Función para iniciar el cuestionario
function comenzar() {
    // Ocultamos la sección introductoria y mostramos la primera pregunta
    document.querySelector('.main-title').style.display = 'none'; // Oculta el título principal
    document.querySelector('.intro-section').style.display = 'none'; // Oculta la sección introductoria

    // Mostramos la primera pregunta
    document.getElementById('pregunta-1').style.display = 'block'; // Muestra la primera pregunta
}

// Función para mostrar la siguiente pregunta
function siguientePregunta(siguiente) {
    // Ocultamos todas las preguntas
    document.querySelectorAll('.preguntas').forEach(el => {
        el.style.display = 'none'; // Oculta todas las preguntas
    });
    // Mostramos la siguiente pregunta según el ID
    document.getElementById(siguiente).style.display = 'block'; // Muestra la pregunta siguiente
}

// Función para mostrar la pregunta anterior
function preguntaAnterior(anterior) {
    // Ocultamos todas las preguntas
    document.querySelectorAll('.preguntas').forEach(el => {
        el.style.display = 'none'; // Oculta todas las preguntas
    });
    // Mostramos la pregunta anterior según el ID
    document.getElementById(anterior).style.display = 'block'; // Muestra la pregunta anterior
}

// Función para mostrar los resultados finales basados en la selección del plan
function mostrarResultados(plan) {
    // Ocultamos todas las preguntas
    document.querySelectorAll('.preguntas').forEach(el => el.style.display = 'none'); // Oculta todas las preguntas

    // Variables para almacenar el título, descripción y el ID del producto que se mostrará
    let titulo = "";
    let descripcion = "";
    let mostrarProductoId = "";

    // Dependiendo del valor de 'plan', se define el título, la descripción y qué producto mostrar
    if (plan === 'expert') {
        titulo = "Recomendamos SimaPro Craft (plan Expert)";
        descripcion = "El plan Expert está diseñado para el experto en ACV que necesita potentes funciones de modelado y evaluación. Esta versión le permite modelar estudios de ACV detallados, con funciones analíticas avanzadas como parámetros de proceso y proyecto y análisis Monte Carlo.";
        mostrarProductoId = 'mostrar-producto-negocios'; // Producto para negocios
        document.getElementById('resultado-1').style.display = 'block'; // Muestra el resultado correspondiente
    } else if (plan === 'power') {
        titulo = "Recomendamos SimaPro Craft (plan Power)";
        descripcion = "Este es el plan SimaPro más completo. Incluye todas las funciones avanzadas para un experto en análisis de ciclo de vida.";
        mostrarProductoId = 'mostrar-producto-negocios'; // Producto para negocios
        document.getElementById('resultado-1').style.display = 'block'; // Muestra el resultado correspondiente
    } else if (plan === 'doctorado') {
        titulo = "Recomendamos SimaPro Craft (plan PhD)";
        descripcion = "El plan de doctorado fue diseñado para el profesional de ACV que necesita funciones avanzadas de modelado y evaluación. Tiene todo lo que necesita para realizar su investigación de doctorado.";
        mostrarProductoId = 'mostrar-producto-educacion'; // Producto para educación
        document.getElementById('resultado-2').style.display = 'block'; // Muestra el resultado correspondiente
    } else if (plan === 'clase') {
        titulo = "Recomendamos SimaPro Craft (plan Faculty)";
        descripcion = "El plan Faculty es ideal para fines de enseñanza. Esta versión básica de SimaPro fue diseñada especialmente para ofrecer todas las características que necesita para enseñar ACV de manera efectiva. El plan Faculty incluye la base de datos ecoinvent v3 y otras 4 bases de datos.";
        mostrarProductoId = 'mostrar-producto-educacion'; // Producto para educación
        document.getElementById('resultado-2').style.display = 'block'; // Muestra el resultado correspondiente
    }

    // Insertamos el título y la descripción en el área del producto seleccionado
    document.getElementById(mostrarProductoId).innerHTML = `
      <div class='producto'>
        <h2 style="margin-bottom: 0.5rem;">${titulo}</h2>
        <p style="color: #555;">${descripcion}</p>
      </div>
    `;
}

// Función para reiniciar el cuestionario y mostrar la intro de nuevo
function reiniciarPreguntas() {
    // Ocultamos los resultados
    document.getElementById('resultado-1').style.display = 'none'; // Oculta el resultado de la primera opción
    document.getElementById('resultado-2').style.display = 'none'; // Oculta el resultado de la segunda opción

    // Mostramos de nuevo la sección introductoria
    document.querySelector('.main-title').style.display = 'block'; // Muestra el título principal
    document.querySelector('.intro-section').style.display = 'block'; // Muestra la sección introductoria

    // Ocultamos todas las preguntas
    document.querySelectorAll('.preguntas').forEach(el => {
        el.style.display = 'none'; // Oculta todas las preguntas
    });
}
