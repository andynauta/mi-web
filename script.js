function saludar() {
  let nombre = prompt("¿Cómo te llamás?");
  let mensaje = document.getElementById("mensaje");

  if (nombre === "") {
    mensaje.innerText = "¡Escribí tu nombre!";
  } else {
    mensaje.innerText = "¡Hola, " + nombre + "! Bienvenido 👋";
  }
}

function despedirse() {
  let mensaje = document.getElementById("mensaje");
  mensaje.innerText = "¡Hasta luego!";
}

function contar() {
  let resultado = "";

  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      resultado = resultado + i + " ";
    }
  }

  document.getElementById("contador").innerText = resultado;
}

function agregarTarea() {
  let tarea = document.getElementById("tarea").value;
  let lista = document.getElementById("lista");

  if (tarea === "") {
    alert("¡Escribí algo primero!");
  } else {
    let item = document.createElement("li");
    item.innerText = tarea;

    if (tarea === "comprar") {
      item.style.color = "red";
    }

    lista.appendChild(item);
    document.getElementById("tarea").value = "";
  }
}

function mostrarPeliculas() {
  let listaPeliculas = ["Volver al futuro I", "Volver al futuro II", "Volver al Futuro III", "Señor de los Anillos", "El Padrino"];
  let lista = document.getElementById("listaPeliculas");
  lista.innerHTML = "";

  for (let i = 0; i < listaPeliculas.length; i++) {
    let item = document.createElement("li");
    item.innerText = listaPeliculas[i];
    lista.appendChild(item);
  }
}

