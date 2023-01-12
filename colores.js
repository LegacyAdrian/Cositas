let boton = document.getElementById('Crear');
boton.addEventListener("click", () => {
const color = document.querySelector('#color').value;

const bgcolor = document.querySelector('#bgcolor').value;

localStorage.setItem("color", JSON.stringify(color));
localStorage.setItem("bgcolor", JSON.stringify(bgcolor));
})
