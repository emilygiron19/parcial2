// Lee el valor de un campo (por su id) y lo convierte a número.
// Si el campo está vacío devuelve NaN (Not a Number), que luego usamos para detectar que falta un dato.
function leer(id) {
  const v = document.getElementById(id).value.trim();
  return v === "" ? NaN : Number(v);
}

// Muestra un mensaje en el cuadro de resultado indicado.
// - id: el cuadro donde se escribe el mensaje
// - texto: el mensaje a mostrar
// - ok: true = mensaje verde (correcto), false = mensaje rojo (error)
function mostrar(id, texto, ok) {
  const el = document.getElementById(id);
  el.textContent = texto;
  el.className = "result " + (ok ? "ok" : "err");
}

// Da formato a un número: si es entero lo deja igual (27),
// y si tiene decimales lo redondea a 2 (3.14159 -> 3.14).
function fmt(n) {
  return Number.isInteger(n) ? String(n) : String(parseFloat(n.toFixed(2)));
}

/* EJERCICIO 1: CUBO DE UN NÚMERO*/

function calcularCubo() {
  // Lee el número que escribió el usuario.
  const n = leer("cNum");

  // Si no es un número válido, muestra un error y termina.
  if (isNaN(n)) return mostrar("cRes", "Por favor, escriba un número válido.", false);

  // Math.pow(n, 3) eleva el número al cubo (n × n × n).
  mostrar("cRes", "El cubo de " + n + " es: " + fmt(Math.pow(n, 3)), true);
}

/* EJERCICIO 2: ÁREA DE UN TRIÁNGULO */

function calcularArea() {
  // Lee la base y la altura.
  const b = leer("tBase"), h = leer("tAlt");

  // Valida que ambos campos tengan un número.
  if (isNaN(b) || isNaN(h)) return mostrar("tRes", "Ingrese valores válidos para la base y la altura.", false);

  // Una medida no puede ser negativa.
  if (b < 0 || h < 0) return mostrar("tRes", "La base y la altura no pueden ser negativas.", false);

  // Aplica la fórmula y muestra el resultado en metros cuadrados.
  mostrar("tRes", "El área en metros cuadrados del triángulo es: " + fmt((b * h) / 2), true);
}

/* EJERCICIO 3: PROMEDIO DE CALIFICACIONES */

function calcularPromedio() {
  // Lee el nombre del estudiante (texto, sin espacios sobrantes).
  const nombre = document.getElementById("pNom").value.trim();

  // Lee las tres notas y las guarda en una lista (arreglo).
  const notas = ["pN1", "pN2", "pN3"].map(leer);

  // Valida que haya un nombre.
  if (!nombre) return mostrar("pRes", "Escriba el nombre del estudiante.", false);

  // Valida que las tres notas sean números (some = "alguna cumple").
  if (notas.some(isNaN)) return mostrar("pRes", "Ingrese las tres calificaciones.", false);

  // Promedio = suma de las notas dividida entre 3.
  const prom = (notas[0] + notas[1] + notas[2]) / 3;

  // toFixed(2) deja el promedio con 2 decimales (ej.: 17.33).
  mostrar("pRes", "El promedio de " + nombre + " es: " + prom.toFixed(2) + " puntos", true);
}

/* EJERCICIO 4: COMPARACIÓN DE DOS VALORES Indica si el primer número es MAYOR, MENOR o IGUAL al
   segundo, y muestra la diferencia entre ambos. */
    
function compararValores() {
  // Lee los dos números.
  const a = leer("kA"), b = leer("kB");

  // Valida que ambos sean números.
  if (isNaN(a) || isNaN(b)) return mostrar("kRes", "Ingrese los dos números.", false);

  // La diferencia siempre es positiva (Math.abs quita el signo).
  const diferencia = fmt(Math.abs(a - b));

  // CASO 1: el primer número es MAYOR que el segundo.
  if (a > b) {
    mostrar("kRes", "El número mayor es " + a + ", el menor es " + b + ", y su diferencia es " + diferencia + ".", true);

  // CASO 2: el primer número es MENOR que el segundo.
  } else if (a < b) {
    mostrar("kRes", "El número mayor es " + b + ", el menor es " + a + ", y su diferencia es " + diferencia + ".", true);

  // CASO 3: los números son IGUALES (no hay mayor ni menor).
  } else {
    mostrar("kRes", "Los dos números son iguales (" + a + "), y su diferencia es 0.", true);
  }
}