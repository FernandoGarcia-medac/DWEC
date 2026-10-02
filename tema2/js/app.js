// Botón "Saludar": el usuario ve la alrta
function saludar() {
    alert("Hola, soy Fernnando");
    console.log("Se ha pulsado el botón Saludar");
}

// Botón "Simular un error": solo ve la consola el usuario
function simularError() {
    console.error("Error simulado: no se ha podido completar la operación bancaria");
}

// Botón "¿Qué navegador soy?": una alarta para el usuario y log para quien desarrolla
function queNavegador() {
    const agente = navigator.userAgent;
    alert("Tu navegador es este:\n" + agente);
    console.log("userAgent:", agente);
    console.warn("El userAgent no es 100% fiable, muchos navegadores se hacen pasar por otros");
}