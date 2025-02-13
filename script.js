document.addEventListener("DOMContentLoaded", function() {
    const heartsContainer = document.querySelector(".hearts-container");
    const botonNo = document.getElementById("No");
    const botonSi = document.getElementById("Si");
    const descargar = document.getElementById("descargar");
    const card = document.querySelector(".card.container");
    const audioAmor = document.getElementById("audio-amor");

    descargar.style.display = "none";

    // Mostrar la tarjeta después de que la página esté cargada y reproducir el audio
    setTimeout(() => {
        card.classList.add("visible");
        audioAmor.play().catch(error => console.log("Error al reproducir el audio: ", error));
    }, 500);

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
        </svg>`;
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
        heart.style.fontSize = (Math.random() * 40 + 20) + "px"; /* Tamaño más grande */
        heartsContainer.appendChild(heart);
    
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    setInterval(createHeart, 100);

    botonNo.addEventListener("mouseover", function () {
        const maxX = window.innerWidth - botonNo.offsetWidth;
        const maxY = window.innerHeight - botonSi.offsetHeight;

        let x, y;
        do {
            x = Math.random() * maxX;
            y = Math.random() * maxY;
        } while (
            Math.abs(x - botonSi.offsetLeft) < 100 &&
            Math.abs(y - botonSi.offsetTop) < 50
        );

        botonNo.style.left = x + "px";
        botonNo.style.top = y + "px";
    });

    botonSi.addEventListener("click", function () {
        const mensajeSi = document.getElementById("mensaje-si");
        if (mensajeSi.style.display === "block") {
            mensajeSi.style.display = "none";
        } else {
            mensajeSi.style.display = "block";
            document.getElementById("mensaje-no").style.display = "none";
        }
    });

    botonNo.addEventListener("click", function () {
        const mensajeNo = document.getElementById("mensaje-no");
        if (mensajeNo.style.display === "block") {
            mensajeNo.style.display = "none";
        } else {
            mensajeNo.style.display = "block";
            document.getElementById("mensaje-si").style.display = "none";
        }
    });
});
