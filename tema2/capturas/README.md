# Tarea 2. Navegadores, motores y mi primera página interactiva

**Autor:** Fernando José García Fernández

## Qué he hecho
He creado un sitio de dos páginas con Bootstrap, con la misma barra de navegación en las dos y mi nombre visible. `index.html` tiene la tabla de navegadores y motores, un texto propio, un ejemplo de compatibilidad sacado de caniuse y una reflexión. `interaccion.html` tiene tres botones que llaman a funciones de `js/app.js` y dejan trazas en la consola. Lo he probado con Live Server en Opera GX (motor Blink) y en Firefox (motor Gecko).

## Capturas

![index.html en el ordenador](capturas/captura1.png)

`index.html` abierto en el ordenador con Live Server. Se ve mi nombre en la navbar rosa y la tabla de navegadores.

![interaccion.html en modo móvil](capturas/captura2.png)

`interaccion.html` en el modo dispositivo de F12, simulando un móvil. Los tres botones y la lista caben en pantalla sin scroll horizontal.

![Consola con las trazas](capturas/captura3.png)

La consola con las trazas de los tres botones: el `console.log` de Saludar, el `console.error` de Simular un error y el `userAgent` de ¿Qué navegador soy?.

![alert en Opera GX](capturas/captura4a.png)

El `alert()` del botón «¿Qué navegador soy?» en Opera GX, que muestra su `userAgent`.

![alert en Firefox](capturas/captura4b.png)

El mismo `alert()` en Firefox, donde el `userAgent` es distinto porque es otro navegador y otro motor.

![VS Code con Live Server](capturas/captura5.png)

VS Code con la carpeta `tema02` abierta y Live Server en marcha (aparece «Port: 5500» abajo a la derecha).

## Quién hace qué (botón «Saludar»)
- **HTML:** el elemento `<button>` con su atributo `onclick="saludar()"`. Define que existe un botón, el texto que lleva y qué función se llama cuando se pulsa.
- **Bootstrap (CSS):** las clases `btn btn-primary` le dan el aspecto: color azul, bordes redondeados, tamaño y el efecto al pasar el ratón. Sin ellas sería el botón gris que trae el navegador por defecto.
- **JavaScript:** la función `saludar()` de `js/app.js`. Cuando el usuario pulsa, muestra un `alert()` con mi nombre (lo que ve el usuario) y escribe un `console.log()` (lo que ve quien desarrolla).

## Comparación de los userAgent
**Opera GX:** function queNavegador() {
    const agente = navigator.userAgent;
    alert("Tu navegador es este:\n" + agente);
    console.log("userAgent:", agente);
    console.warn("No es fiable");
}

**Firefox:** function queNavegador() 
    const agente = navigator.userAgent;
    alert("Tu navegador es este:\n" + agente);
    console.log("userAgent:", agente);
    console.warn("No es fiable");

En los dos reconozco el sistema operativo (`Windows NT 10.0; Win64; x64`, es decir, Windows 10/11 de 64 bits). En Opera GX veo `AppleWebKit`, `Chrome`, `Safari` y al final `OPR`, que es lo que lo identifica como Opera. En Firefox veo `Gecko` y `Firefox` con su versión, y no aparecen ni `Chrome` ni `Safari`.

Aparecen palabras como Mozilla, AppleWebKit o Safari aunque el navegador sea otro por razones históricas. Al principio las webs enviaban la versión completa solo a quien se identificaba como Mozilla (Netscape), así que los demás navegadores copiaron esa palabra para no quedarse fuera. Después pasó lo mismo con KHTML, Gecko, AppleWebKit y Safari, y por eso Opera GX lleva `Mozilla`, `AppleWebKit`, `Chrome` y `Safari` aunque no sea ninguno de ellos. Mi conclusión es que el `userAgent` no es fiable para saber qué navegador es: es un texto que cada navegador escribe como quiere para evitar problemas de compatibilidad.

## Fuentes consultadas
- Apuntes y presentación del Tema 2 (Davante, DWEC).
- [caniuse.com: field-sizing](https://caniuse.com/mdn-css_properties_field-sizing) (consultado el 02/10/2026)
- [MDN Web Docs](https://developer.mozilla.org/)

## Uso de IA
He usado Claude (IA) para orientarme en los pasos de la tarea, para obtener un borrador del código de las páginas y de los textos, y para revisar el README. Después he leído todo, lo he probado en mi equipo con Live Server y lo he adaptado, para entenderlo y poder explicarlo en la defensa. Las capturas y los `userAgent` son de mi equipo.