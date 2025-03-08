const nombres = [
  "AZUCENA", "ROMINA", "ANA", "MILAGROS", "VALERIA", "ALESSANDRA", "SOL", "ANNIE", "ALE", "JIMENA",
  "MARÍA", "CARMEN", "BÁRBARA", "NATHALY", "VERÓNICA", "MARY", "DANI", "ANDREA", "ANTUANE", "GABRIELA",
  "GIANELLA", "DAYANNA", "GUADALUPE", "NATHALIA", "FRANSHESCA", "ANGELA", "VICTORIA", "SOFÍA", "LUCÍA", "PAULA",
  "MARIANA", "ESTEFANÍA", "REBECA", "FABIOLA", "MÓNICA", "CAROLINA", "ISABELLA", "PATRICIA", "MARTA", "JULIANA",
  "LORENA", "DANIELA", "EUGENIA", "MIRANDA", "SAMANTHA", "CLARA", "INES", "CECILIA", "FLORENCIA", "RAQUEL"
];

function colocarNombres() {
  const container = document.getElementById("namesContainer");
  container.innerHTML = "";

  // Seleccionar 12 nombres aleatorios para aplicar contorno
  const nombresAleatorios = [...nombres].sort(() => Math.random() - 0.5).slice(0, 12);

  // Ajuste de tamaños según dispositivo
  const isMobile = window.innerWidth <= 768;
  const minSize = isMobile ? 20 : 50;
  const maxSize = isMobile ? 40 : 100;

  for (let i = 0; i < nombres.length; i++) {
    const nameElement = document.createElement("span");
    nameElement.classList.add("name");
    nameElement.textContent = nombres[i];

    const randomSize = Math.floor(Math.random() * (maxSize - minSize)) + minSize;
    nameElement.style.fontSize = randomSize + "px";

    if (nombresAleatorios.includes(nombres[i])) {
      nameElement.classList.add("outline");
    }

    container.appendChild(nameElement);
  }
}

window.onload = function() {
  setTimeout(() => {
    const logo = document.getElementById('preloader-logo');
    logo.classList.add('hidden'); // Inicia fade-out del logo
    setTimeout(() => {
      logo.style.display = 'none';
      const preloaderNames = document.getElementById('preloader-names');
      preloaderNames.style.display = 'flex';
      colocarNombres();
      setTimeout(() => {
        preloaderNames.classList.add('hidden');
        setTimeout(() => {
          preloaderNames.style.display = 'none';
          document.body.style.backgroundColor = "#D82B02";
        }, 1000);
      }, 8000);
    }, 1000);
  }, 1500);
};
