function convertirTemperatura() {
    var input = document.getElementById("tempInput").value;
  
    // Verificar si la entrada es un número
    if (isNaN(input)) {
      alert("Por favor ingrese un número válido.");
      return;
    }
  
    var celsius = parseFloat(input);
    var fahrenheit = (celsius * 9/5) + 32;
    var kelvin = celsius + 273.15;
  
    var resultado = "Grados Fahrenheit: " + fahrenheit.toFixed(2) + "<br>" +
                    "Grados Kelvin: " + kelvin.toFixed(2);
  
    document.getElementById("resultado").innerHTML = resultado;
  }
  