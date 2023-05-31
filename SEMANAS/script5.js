//Obtiene datos del archivo JSON
fetch('productos.json')
    //Ejecuta cuando la solicitud este disponible y comprueba 
  .then(response => {
    //Si la respuesta no es exitosa, lanza el mensaje de error
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    //Si la respuesta es exitosa, devuelve los datos JSON
    return response.json();
  })
  //Toma los datos y crea filas de la tabla
  .then(data => {
    //Toma referencia a la tabla donde se muestra los productos
    const productTable = document.getElementById('productTable');

    //Se crean nuevas filas y celdas para cada propiedad de producto
    //(Foto, nombre, descripción, precio)
    data.forEach(product => {
      const row = document.createElement('tr');
      const photoCell = document.createElement('td');
      const photoImg = document.createElement('img');
      photoImg.src = product.foto;
      photoCell.appendChild(photoImg);
      row.appendChild(photoCell);

      const nameCell = document.createElement('td');
      nameCell.textContent = product.nombre;
      row.appendChild(nameCell);
      

      const descriptionCell = document.createElement('td');
      descriptionCell.textContent = product.peso;
      row.appendChild(descriptionCell);

      const priceCell = document.createElement('td');
      priceCell.textContent = product.precio;
      row.appendChild(priceCell);
      //Agrega la fila recien creada a la tabla
      productTable.appendChild(row);
    });
  })
  //Se muestra error, si ocurre durante la obtención de datos
  .catch(error => {
    console.error(error);
  });
