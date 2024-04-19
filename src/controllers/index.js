import { conversion } from "./dependences.js"
const convert = document.getElementById("btn-convert")
convert.addEventListener("click",()=>{
    const input = document.getElementById("valor").value

    conversion.verOperadores(input)
    conversion.compartirDatos(input);
    conversion.validarResultado()
    const result = document.getElementById("Imprimir")
    let vacio = document.createElement("span")
    
    let ExpInfija = document.createElement("span")
    result.innerText = ""
    result.appendChild(vacio)

    ExpInfija.innerText = "datos de la conversion:\n los primeros " + conversion.getCount() + " datos son la entrada y los ultimos la salida: \n" + conversion.getExprecionPrefija()
    result.appendChild(ExpInfija)
    let ResultadoOperacion = document.createElement("span")
    //ResultadoOperacion.innerText = "Resultado de la operacion: " + conversion.getPrefijos2()
    result.appendChild(ResultadoOperacion)
})