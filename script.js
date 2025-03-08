const nombres = [
  "AZUCENA", "ROMINA", "ANA", "MILAGROS", "VALERIA", "ALESSANDRA", "SOL", "ANNIE", "ALE", "JIMENA",
  "MARÍA", "CARMEN", "BÁRBARA", "NATHALY", "VERÓNICA", "MARY", "DANI", "ANDREA", "ANTUANE", "GABRIELA",
  "GIANELLA", "DAYANNA", "GUADALUPE", "NATHALIA", "FRANSHESCA", "ANGELA", "VICTORIA", "SOFÍA", "LUCÍA", "PAULA",
  "MARIANA", "ESTEFANÍA", "REBECA", "FABIOLA", "MÓNICA", "CAROLINA", "ISABELLA", "PATRICIA", "MARTA", "XIMENA",
  "LORENA", "DANIELA", "INDIRA", "FAVIANA", "SAMANTHA", "CLARA", "INES", "CECILIA", "LUCERO", "RAQUEL", "YAHAIRA", "NAYELI", "FÁTIMA",
  "ALMA", "NOELIA", "AMELIA", "NATALIA", "ERIKA", "TABATA", "LESLIE", "SHARON", "ISA","GERALDINE", "CYNTHIA", "MAR", "BRI", "MELANY",
  "ARLET", "KATHY","ALEXIA", "SHARON", "LUISA", "RAYSA", "MELISSA", "MARIA JOSE", "ARIANA", "KRYSTELL", "ANGGIE", "FLAVIA", "FER", "ADRIANA"
];

function colocarNombres() {
  const container = document.getElementById("namesContainer");
  container.innerHTML = "";

  // Barajar el array completo para mostrar los nombres en orden aleatorio
  const nombresBarajados = [...nombres].sort(() => Math.random() - 0.5);

  // Seleccionar 12 nombres aleatorios para resaltar con "outline"
  const nombresAleatorios = [...nombres].sort(() => Math.random() - 0.5).slice(0, 12);

  // Ajustar tamaño de fuente según ancho de pantalla
  const isMobile = window.innerWidth <= 768;
  const minSize = isMobile ? 20 : 50;
  const maxSize = isMobile ? 40 : 100;

  for (let i = 0; i < nombresBarajados.length; i++) {
    const nameElement = document.createElement("span");
    nameElement.classList.add("name");
    nameElement.textContent = nombresBarajados[i];

    // Tamaño de fuente aleatorio dentro del rango
    const randomSize = Math.floor(Math.random() * (maxSize - minSize)) + minSize;
    nameElement.style.fontSize = randomSize + "px";

    // Marcar algunos nombres con "outline"
    if (nombresAleatorios.includes(nombresBarajados[i])) {
      nameElement.classList.add("outline");
    }

    container.appendChild(nameElement);
  }
}

window.onload = function() {
  // Retraso inicial de 1.5s antes de ocultar el logo
  setTimeout(() => {
    const logoPreloader = document.getElementById('preloader-logo');
    logoPreloader.classList.add('hidden');

    // Esperar a que termine el fade-out
    setTimeout(() => {
      logoPreloader.style.display = 'none';

      // Mostrar preloader de nombres
      const namesPreloader = document.getElementById('preloader-names');
      namesPreloader.style.display = 'flex';
      colocarNombres();

      // Esperar 8s mientras los nombres se desplazan
      setTimeout(() => {
        namesPreloader.classList.add('hidden');
        setTimeout(() => {
          namesPreloader.style.display = 'none';
          document.body.style.backgroundColor = "#D82B02";
        }, 1000);
      }, 8000);

    }, 1000);
  }, 1500);
};
