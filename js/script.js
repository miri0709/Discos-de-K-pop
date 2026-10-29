//DATOS PARA FILTRAR//

//Primer filtro Albumes//

const dwmiri=[
//Albumes//
{id: 1, name:"Merchandising BTS", image:"merch oficial 1.jpeg",genero:Albumes,description:"Mercancía oficial de la gira mundial de BTS. Todo lo exclusivo de su tour: playeras, accesorios y recuerdos únicos para revivir cada momento de sus conciertos."},
{id: 2, name:"Merchandising TXT", image:"merch 2.jpeg",genero:"Albumes,description:"Caja oficial de mercancía de Soobin. Una colección exclusiva con productos especiales diseñados para ti. Un detalle único para todos los fans de TXT".},
{id: 3, name:"Colección Musical", image:"albumes 1.jpeg",genero:"Albumes",description:"Colecciona los álbumes de tus artistas preferidos. Cada uno trae detalles especiales y ediciones limitadas que hacen que cada pieza sea única en tu colección."},
{id: 4, name:" Music album ", image:"albumes 2.jpeg",genero:"Albumes",description:"Álbumes de K-pop originales con todo su contenido disco, póster, librito y photocards. Llega a ti en perfecto estado para que disfrutes la música de tus grupos favoritos."},                
//Merch-oficial//
{id: 5, name:"lightsticks", image:"lightsticks.jpeg",genero: "Merch-oficial" ,description:"Luces oficiales de cada grupo. Perfectas para conciertos y mostrar tu apoyo como fan."},
{id: 6, name:"photocards", image:"photocards 2.jpeg",genero:"Merch-oficial",description:"Tarjetas coleccionables con tus artistas favoritos. Piezas únicas para completar tu colección."},


];

// Obtener los contenedores y botones del DOM
const dwmiriContainer = document.getElementById("Servicios-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas 
function renderDw(genero) {
    let dwmiriToRender = [];
    if (genero === "all") {
        dwmiriToRender = dwmiri;
    } else {
        dwmiriToRender = dwmiri.filter(Dwmiri => Dwmiri.genero === genero);
    }
    }