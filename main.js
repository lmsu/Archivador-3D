const gaveta = document.querySelector('.gaveta');
const carpetas = document.querySelectorAll('.carpeta');

gaveta.addEventListener('click', () => {
// Abrir o cerrar la gaveta
gaveta.classList.toggle('open');
});

carpetas.forEach((carpeta) => {
carpeta.addEventListener('click', (e) => {
    // Resetear cualquier carpeta seleccionada previamente
    carpetas.forEach((c) => c.classList.remove('selected'));
    // Seleccionar la carpeta clickeada
    e.target.classList.add('selected');
    e.stopPropagation(); // Evitar que el evento se propague al contenedor gaveta
});
});