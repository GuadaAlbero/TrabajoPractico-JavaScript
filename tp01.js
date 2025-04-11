const productos = [  
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },  
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },  
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" }, 
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },  
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }  
  ];
  
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