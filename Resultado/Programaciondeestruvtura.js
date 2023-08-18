function ingresarDatos() {
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var datos = [];

    for (var i = 0; i < cantidad; i++) {
        var dato = parseInt(prompt("Ingrese el dato #" + (i + 1)));
        datos.push(dato);
    }

    var suma = 0;
    for (var i = 0; i < cantidad; i++) {
        suma += datos[i];
    }

    var promedio = suma / cantidad;

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <h2>Resultados:</h2>
        <p>Datos ingresados: ${datos.join(', ')}</p>
        <p>Suma de los datos: ${suma}</p>
        <p>Promedio de los datos: ${promedio.toFixed(2)}</p>
    `;
    
    // Mostrar los resultados
    resultado.style.display = "block";
}
