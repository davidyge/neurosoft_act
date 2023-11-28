document.addEventListener("DOMContentLoaded", function () {
    var headerTo = document.querySelector('.header_to');
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            headerTo.classList.add("hide-on-scroll");
            headerTo.classList.remove("show-on-scroll");
        } else {
            headerTo.classList.remove("hide-on-scroll");
            headerTo.classList.add("show-on-scroll");
        }
    });
});

/* INICIO TEMPORALIZADOR */
// Establecer la fecha de finalización del temporizador (una hora desde ahora)
const endTime = new Date();
endTime.setHours(endTime.getHours() + 1);

// Función para actualizar el temporizador
function updateCountdown() {
  const now = new Date();
  const timeLeft = endTime - now;

  const minutes = Math.floor(timeLeft / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Obtener elementos por ID
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

  
  
    // Aplicar estilo al texto (color blanco)
    minutesElement.style.color = "white";
    secondsElement.style.color = "white";

     // Aplicar estilo al texto (negrita y color blanco)
  minutesElement.style.fontWeight = "bold";
  secondsElement.style.fontWeight = "bold";

    // Actualizar el contenido con "MINUTOS" y "SEGUNDOS"
    minutesElement.innerHTML = `${minutes} <p style='margin-top:-20px;'>Minutos</p>`;
    secondsElement.innerHTML = `${seconds} <p style='margin-top:-20px;'>Segundos</p>`;

  // Detener el temporizador cuando llega a cero
  if (timeLeft <= 0) {
    document.getElementById('minutes').innerHTML = "Oferta expirada";
    clearInterval(timerInterval);
  }
}

// Actualizar el temporizador cada segundo
const timerInterval = setInterval(updateCountdown, 1000);

// Llamar a la función para actualizar el temporizador inmediatamente
updateCountdown();
/* FIN TEMPORALIZADOR */

/* INICIO FAQ */
const btns = document.querySelectorAll(".acc-btn");

// fn
function accordion() {
  // this = the btn | icon & bg changed
  this.classList.toggle("is-open");

  // the acc-content
  const content = this.nextElementSibling;

  // IF open, close | else open
  if (content.style.maxHeight) content.style.maxHeight = null;
  else content.style.maxHeight = content.scrollHeight + "px";
}

// event
btns.forEach((el) => el.addEventListener("click", accordion));
/* FIN FAQ */


