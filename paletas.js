const color = JSON.parse(localStorage.getItem("color"));
const bgcolor = JSON.parse(localStorage.getItem("bgcolor"));
const main = document.querySelector('#main');
const borrar = document.querySelector('#borrar');
window.addEventListener("load", () => {
    const paletas = JSON.parse(localStorage.getItem("paletas")) || []
    const newPaleta= {color: color, bgcolor: bgcolor};
    paletas.push(newPaleta);
    localStorage.setItem("paletas", JSON.stringify(paletas));
    paletas.forEach((paleta,index) => {
        const div = document.createElement('div');
        div.classList.add('paletas');
        div.style.color = paleta.color;
        div.style.backgroundColor = paleta.bgcolor;
        div.textContent = 'Paleta' + (index+1);
        main.appendChild(div);
        
    });


})

borrar.addEventListener("click", (e) => {
    localStorage.removeItem("paletas");

})
