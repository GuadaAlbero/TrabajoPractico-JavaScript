const productos = [  
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },  
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },  
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" }, 
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },  
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }  
  ];
  //Parte 1
  console.log("Parte 1");
  //Muestro el primer producto
  console.log("Nombre del primer producto:", productos[0].nombre);

  //Mostrar en consola el nombre y el precio de cada producto
  for (let producto of productos) {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
  }

  //Usando .forEach()
  productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
  });

  //Parte 2
  console.log("Parte 2");
  //Obtener solo los nombres con .map()
  const nombresProductos = productos.map(producto => producto.nombre);
    console.log(nombresProductos);

 //Filtrar productos de categoría 'Ropa'
 const productosRopa = productos.filter(producto => producto.categoria === "Ropa");
    console.log(productosRopa);
    
//Filtrar productos con precio mayor a $3000
const productosMayoresA3000 = productos.filter(producto => producto.precio > 3000);
    console.log(productosMayoresA3000); 
    
//Buscar el producto con nombre 'Gorra'
const productoGorra = productos.find(producto => producto.nombre === "Gorra");
    console.log(productoGorra);
    
//Parte 3
console.log("Parte 3");
//Usá .some() para comprobar si existe algún producto con un precio mayor a $10.000
const existeProductoCaro = productos.some(producto => producto.precio > 10000);
    console.log(existeProductoCaro);

//Verificar con .every()
const todosMayoresA1000 = productos.every(producto => producto.precio > 1000);
    console.log(todosMayoresA1000);

//Verificar existencia con .includes()
const incluyeCampera = nombresProductos.includes("Campera");
    console.log(incluyeCampera);

//Parte 4
console.log("Parte 4");
//Ordenar con .sort()
//operador spread ([...productos]) para clonar el array original
const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
    console.log(productosOrdenados);

 //Generar mensajes personalizados con .map()
 const mensajesProductos = productos.map(producto =>
    `El producto ${producto.nombre} cuesta $${producto.precio} y pertenece a la categoría ${producto.categoria}.`
  );
    console.log(mensajesProductos);   

//Agregar productos con spread
const nuevosProductos = [
    { id: 6, nombre: "Ojotas", precio: 1900, categoria: "Calzado" }
  ];
  const productosCombinados = [...productos, ...nuevosProductos];
    console.log(productosCombinados);    