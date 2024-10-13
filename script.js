// Efecto de menú hamburguesa
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
});

// Funcionalidad del modal
// Obtiene el elemento del modal usando su id ('modal')
const modal = document.getElementById('modal');
// Obtiene el iframe donde se cargará el contenido del proyecto seleccionado
const projectFrame = document.getElementById('project-frame');

// Selecciona todos los elementos con la clase 'gallery-item' (cada uno representa un proyecto)
document.querySelectorAll('.gallery-item').forEach(item => {

    // Añade un evento 'click' a cada elemento de la galería
    item.addEventListener('click', () => {
         // Cambia la propiedad 'src' del iframe al valor del atributo 'data-project' del elemento clicado,
        // cargando así el contenido correspondiente al proyecto seleccionado
        projectFrame.src = item.getAttribute('data-project');

         // Muestra el modal configurando su estilo 'display' a 'flex', lo que lo hace visible
        modal.style.display = 'flex';
    });
});
// Añade un evento 'click' al botón de cierre del modal (representado por el elemento con la clase 'close')
document.querySelector('.close').addEventListener('click', () => {

    // Oculta el modal configurando su estilo 'display' a 'none', lo que lo hace invisible
    modal.style.display = 'none';
});
