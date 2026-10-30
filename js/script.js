//DATOS PARA FILTRAR//

//Primer filtro Albumes//

const dwmiri=[
//Albumes//
{id: 1, name:"Merchandising BTS", image:"merch oficial 1.jpeg",genero:"Albumes",description:"Mercancía oficial de la gira mundial de BTS. Todo lo exclusivo de su tour: playeras, accesorios y recuerdos únicos para revivir cada momento de sus conciertos."},
{id: 2, name:"Merchandising TXT", image:"merch 2.jpeg",genero:"Albumes",description:"Caja oficial de mercancía de Soobin. Una colección exclusiva con productos especiales diseñados para ti. Un detalle único para todos los fans de TXT."},
{id: 3, name:"Colección Musical", image:"albumes 1.jpeg",genero:"Albumes",description:"Colecciona los álbumes de tus artistas preferidos. Cada uno trae detalles especiales y ediciones limitadas que hacen que cada pieza sea única en tu colección."},
{id: 4, name:" Music album ", image:"albumes 2.jpeg",genero:"Albumes",description:"Álbumes de K-pop originales con todo su contenido disco, póster, librito y photocards. Llega a ti en perfecto estado para que disfrutes la música de tus grupos favoritos."},                
//Merch-oficial//
{id: 5, name:"lightsticks", image:"lightsticks.jpeg",genero: "Merch-oficial" ,description:"Luces oficiales de cada grupo. Perfectas para conciertos y mostrar tu apoyo como fan."},
{id: 6, name:"photocards", image:"photocards 2.jpeg",genero:"Merch-oficial",description:"Tarjetas coleccionables con tus artistas favoritos. Piezas únicas para completar tu colección."},
{id: 7, name:"Pequeños tesoros", image:"photocards 1.jpeg",genero:"Merch-oficial",description:"Tarjetas oficiales de tus ídolos para coleccionar y guardar con cariño. Cada una es un detalle especial para ti."},
{id: 8, name:"Peluches Oficiales", image:"peluches oficiales.jpeg",genero:"Merch-oficial",description:"Lleva siempre a tus peluches oficiales contigo. Tiernos y suaves, como un abrazo de tus artistas favoritos."},
];
// Obtener los contenedores y botones del DOM//
const dwmiriContainer = document.getElementById("Servicios-container")
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas//
function renderDw(genero) {
    const dwmiriToRender = genero === "all"
        ? dwmiri
        : dwmiri.filter(dw => dw.genero === genero);

    if (dwmiriToRender.length === 0) {
        dwmiriContainer.innerHTML = '<p class="text-center w-100">No hay disponibles para esta categoría.</p>';
        return;
    }

    dwmiriContainer.innerHTML = dwmiriToRender.map(dw => `
        <figure class="Servicios-card" data-gender="${dw.genero}">
            <img src="${dw.image}" alt="Producto de K-Discs: ${dw.name}">
            <figcaption>${dw.name}</figcaption>
            <div class="card-description">
                <p>${dw.description}</p>
            </div>
        </figure>
    `).join("");
}

// Agrega event listeners a los botones de filtro//
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const genero = button.dataset.category;


        // Remueve la clase 'active' de todos los botones//
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Agrega la clase 'active' al botón clickeado
        button.classList.add("active");
        
        // Renderiza las tarjetas con el filtro seleccionado//
        renderDw(genero);
    });
});
// Renderizar todos para cargar la página//
document.addEventListener("DOMContentLoaded", () => {
    renderDw('all');
});


// Función para el botón de volver al inicio//
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


