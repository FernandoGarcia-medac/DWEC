//boton saludar
function saludar() {
    alert("Hola, soy Fernnando");
    console.log("Has pulsado el botón Saludar");}
//boton simular error
function simularError() {
    console.error("Error");
}
//boton de que nevegador soy
function queNavegador() {
    const agente = navigator.userAgent;
    alert("Tu navegador es este:\n" + agente);
    console.log("userAgent:", agente);
    console.warn("No es fiable");
}