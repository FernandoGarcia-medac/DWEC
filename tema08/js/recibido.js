/*
  Tarea 8 · DWEC · [Tu nombre y apellidos]
  recibido.html: lee lo que ha llegado por GET y lo pinta en la tabla.
  En una web real esto lo haría el servidor; aquí lo hacemos en el navegador para verlo.
*/

console.log("recibido.js cargado");

// location.search es la parte de la URL desde el ?, por ejemplo "?nombre=Luc%C3%ADa&taller=html"
console.log("Ha llegado:", location.search);

// URLSearchParams la separa en pares nombre → valor y decodifica las tildes y los espacios.
// El modelo: un dato suelto, por su name
const parametros = new URLSearchParams(location.search);
console.log("nombre =", parametros.get("nombre"));

// Ejercicio 3: muestro la consulta GET y cada dato que ha llegado en la tabla.
const consulta = document.querySelector("#consulta");
consulta.textContent = location.search || "(nada)";

const cuerpoTabla = document.querySelector("#datos");
for (const [campo, valor] of parametros) {
  const fila = document.createElement("tr");
  const nombreCampo = document.createElement("th");
  nombreCampo.scope = "row";
  nombreCampo.textContent = campo;

  const valorCampo = document.createElement("td");
  valorCampo.textContent = valor;

  fila.append(nombreCampo, valorCampo);
  cuerpoTabla.append(fila);
}

if (parametros.size === 0) {
  const aviso = document.createElement("p");
  aviso.className = "alert alert-info";
  aviso.textContent = "No han llegado datos en la URL.";
  document.querySelector(".card-body").insertBefore(aviso, document.querySelector("table"));
}
