// Al hacer clic en la carta, pasa a la pantalla principal
document.getElementById("carta").addEventListener("click", () => {
  document.getElementById("intro").classList.add("oculto");
  document.getElementById("info").classList.remove("oculto");
});

// Contador regresivo a la fecha de la boda
const fechaBoda = new Date("2025-09-13T11:00:00");
const contenedor = document.getElementById("contador");

function actualizarContador() {
  const ahora = new Date();
  const diff = fechaBoda - ahora;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  contenedor.innerHTML = `
    <div>${dias} <span>días</span></div>
    <div>${horas} <span>horas</span></div>
    <div>${minutos} <span>minutos</span></div>
    <div>${segundos} <span>segundos</span></div>
  `;
}

setInterval(actualizarContador, 1000);
