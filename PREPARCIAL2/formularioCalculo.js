function validar() {
    var cantidad = document.getElementById("Operacion 1").value;
    var moneda = document.getElementById("moneda").value;

    if (cantidad === "" || moneda === "") {
        alert("Por favor complete todos los campos");
        return;
    }

    var resultado = calcularConversion(cantidad, moneda);
    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
}

function calcularConversion(cantidad, moneda, costoConversion, nombreMoneda, agregarMoneda) {
    var conversion;

    switch (moneda) {
        case "euro":
            conversion = cantidad / 100;
            break;
        case "dolar":
            conversion = cantidad / 200;
            break;
        case nombreMoneda:
            conversion = cantidad / costoConversion;
            break;
        default:
            conversion = 0;
    }
    return conversion;
}

function agregarMonedaFormulario() {
    var nombreMoneda = document.getElementById("nombreMoneda").value;
    var costoConversion = document.getElementById("costoConversion").value;

    if (nombreMoneda === "" || costoConversion === "") {
        alert("Por favor complete todos los campos");
        return;
    }

    var select = document.getElementById("moneda");
    var option = document.createElement("option");
    option.text = nombreMoneda;
    option.value = nombreMoneda;
    select.add(option);

    document.getElementById("agregarMoneda").reset();
}