// script.js

// Ajustar las imágenes para que sean responsivas
function makeImagesResponsive() {
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.style.maxWidth = '100%';  // Ajusta el ancho máximo de la imagen al 100% del contenedor
        image.style.height = 'auto';  // Mantiene la proporción de la imagen
    });
}

// Ejecutar la función cuando la página se cargue
window.onload = function() {
    makeImagesResponsive();
};

// Reajustar las imágenes cuando se cambie el tamaño de la ventana
window.onresize = function() {
    makeImagesResponsive();
};
