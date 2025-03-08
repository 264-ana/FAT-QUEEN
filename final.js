/*****************************************************
 * 1) TEXTOS ALEATORIOS (con placeholder *nombre*)
 *****************************************************/
const frasesAleatorias = [
  `Sabías qué ... Cada cicatriz cuenta la historia de una batalla ganada. Deja que cada tropiezo te impulse a levantarte, porque no importa cuántas veces caigas, esa corona nunca saldrá de tu cabeza 🤍 así que sigue así de fuerte y aferrada, que todo tiene una recompensa *nombre*`,
  
  `Parece un lindo día para contarte una historia ... En un pequeño jardín, una semilla se sentía insignificante y olvidada. Sin embargo, al enfrentar el frío invierno, decidió crecer. Con el tiempo, se transformó en un árbol robusto y frondoso, cuya sombra aliviaba a quienes se refugiaban en él. La semilla aprendió que cada adversidad es una oportunidad para florecer. ¡Esa semilla eres tú *nombre* y queremos verte siempre fuerte!`,
  
  `No conocemos tu historia, ni hemos visto tus cicatrices, pero sabemos que si llegaste hasta aquí es porque eres capaz de muchos más, y estamos seguros de que lograrás mucho más. Estamos muy orgullosos de ti *nombre*`,
  
  `Aquí te dejamos un cuento para ti... En algún rincón del universo, una oruga soñaba con volar y alcanzar los cielos. Con cada obstáculo y cada cambio, fue tejiendo su propio destino hasta transformarse en una mariposa radiante. Tú, *nombre*, también tienes la capacidad de reinventarte, de dejar atrás lo viejo para abrir las alas y abrazar un futuro lleno de color y luz. ¡Confía en tu proceso!`,
  
  `Por si lo haz olvidado... recuerda que la vida es un constante ir y venir, una danza entre lágrimas y sonrisas. Como dice el refrán, “no hay mal que por bien no venga”. Cada tropiezo es una lección y cada caída, una invitación a levantarse con más fuerza. Hoy, no importa qué día lo leas, celebramos la mujer que eres, *nombre*, y la mujer que estás destinada a ser. ¡Sigue adelante, que tu fortaleza inspira a quienes te rodean!`,
  
  `Dicen que en la oscuridad es cuando brillan las estrellas. Cada dificultad ha sido una chispa que encendió tu luz interior, *nombre*. Aunque el camino parezca incierto, tu determinación transforma cada obstáculo en un escalón hacia tus sueños. “La fe mueve montañas” es un recordatorio de que tu fuerza, por pequeña que parezca en algún momento, tiene el poder de cambiarlo todo.`,
  
  `No sabemos lo que estés pasando ahora, pero sabemos que saldrás de eso. Como dice el refrán, “después de la tormenta siempre llega la calma”. Recuerda que cada desafío es una oportunidad para crecer, y tu fuerza interior te guiará a días más brillantes. ¡Confía en ti, *nombre*, porque eres capaz de transformar la adversidad en triunfo!`,
  
  `Amiga, no conocemos cada detalle de tus luchas, pero estamos seguros de que tienes el coraje para superarlas. Piensa en esa historia de la mariposa: en su capullo, se prepara para desplegar unas alas hermosas. Así eres tú, *nombre*, lista para emerger con una fuerza renovada. “La fe mueve montañas” es un recordatorio de que, con constancia, todo es posible.`,
  
  `No sabemos lo que estés viviendo en este momento, pero sabemos que tu resiliencia es inquebrantable. Recuerda la historia de aquella flor que, a pesar del invierno, encontró la manera de florecer. Tú, *nombre*, también puedes transformar el dolor en belleza. Como dice el proverbio, “cada nube tiene un rayo de sol esperando a brillar”. ¡Sigue adelante, que el sol siempre regresa!`,
  
  `No sabemos lo que estés pasando en este preciso momento, pero sabemos que cada experiencia te está moldeando en una persona aún más fuerte. Como en la historia de la oruga que se transforma en mariposa, tú también tienes el poder de reinventarte. *nombre*, cada cicatriz es una medalla de valor, y cada caída, una lección que te prepara para volar alto. ¡Nunca olvides lo valiosa y resiliente que eres!`
];

/*****************************************************
 * 2) OBTENER FRASE ALEATORIA (reemplaza *nombre*)
 *****************************************************/
function getRandomFrase(nombre) {
  const index = Math.floor(Math.random() * frasesAleatorias.length);
  return frasesAleatorias[index].replace(/\*nombre\*/gi, nombre);
}

/*****************************************************
 * 3) FORMULARIO PARA INGRESAR NOMBRE
 *****************************************************/
function showNamePrompt() {
  // Limpiar todo para que se vea "desde cero"
  document.body.innerHTML = "";

  // Crear overlay que cubra toda la pantalla
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  overlay.style.display = "flex";
  overlay.style.flexDirection = "column";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "11000";
  
  // Crear contenedor del formulario
  const formContainer = document.createElement("div");
  formContainer.style.backgroundColor = "#F7EBDB";
  formContainer.style.padding = "2rem";
  formContainer.style.borderRadius = "10px";
  formContainer.style.textAlign = "center";
  formContainer.style.width = "80%";
  formContainer.style.maxWidth = "400px";
  
  // Título o indicación
  const title = document.createElement("h2");
  title.textContent = "Ingresa tu nombre:";
  title.style.marginBottom = "1rem";
  title.style.color = "#D82B02";
  
  // Input para el nombre
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Tu nombre";
  nameInput.style.padding = "0.5rem";
  nameInput.style.width = "100%";
  nameInput.style.fontSize = "1rem";
  nameInput.style.marginBottom = "1rem";
  
  // Botón para enviar
  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Enviar";
  submitBtn.style.padding = "0.75rem 2rem";
  submitBtn.style.fontSize = "1rem";
  submitBtn.style.fontWeight = "bold";
  submitBtn.style.border = "none";
  submitBtn.style.borderRadius = "2rem";
  submitBtn.style.backgroundColor = "#D82B02";
  submitBtn.style.color = "#F7EBDB";
  submitBtn.style.cursor = "pointer";
  
  // Función para enviar el nombre
  function submitName() {
    const nombre = nameInput.value.trim();
    if (nombre !== "") {
      overlay.remove(); // Eliminar overlay
      showPersonalizedMessage(nombre);
    }
  }
  
  submitBtn.addEventListener("click", submitName);
  nameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      submitName();
    }
  });
  
  formContainer.appendChild(title);
  formContainer.appendChild(nameInput);
  formContainer.appendChild(submitBtn);
  overlay.appendChild(formContainer);
  document.body.appendChild(overlay);
}

/*****************************************************
 * 4) PANTALLA FINAL (Hola Nombre + FRASE ALEATORIA + Botones)
 *****************************************************/
function showPersonalizedMessage(nombre) {
  // Limpiar el body para que se vea como una nueva página
  document.body.innerHTML = "";

  // Crear contenedor principal
  const finalPage = document.createElement("div");
  finalPage.classList.add("final-page");

  // Logo
  const logoImg = document.createElement("img");
  logoImg.src = "./FOTOS/LOGOFG.png";
  logoImg.alt = "Fat Queen Logo";
  logoImg.classList.add("fat-queen-logo");

  // Saludo grande
  const saludo = document.createElement("h1");
  saludo.innerHTML = `Hola ${nombre}! <span style="font-size:1.5rem;">👑</span>`;

  // Contenedor de la frase
  const fraseContainer = document.createElement("div");
  fraseContainer.classList.add("frase-container");
  fraseContainer.textContent = getRandomFrase(nombre); // Frase inicial

  // Contenedor de botones
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");

  // Botón 1: GRACIAS, TQM -> Pantalla LOVE
  const btnGracias = document.createElement("button");
  btnGracias.textContent = "GRACIAS, TQM";
  btnGracias.classList.add("final-btn");
  btnGracias.addEventListener("click", () => {
    showLovePage(nombre);
  });

  // Botón 2: UNA MÁS -> Cambiar la frase
  const btnUnaMas = document.createElement("button");
  btnUnaMas.textContent = "UNA MÁS";
  btnUnaMas.classList.add("final-btn");
  btnUnaMas.addEventListener("click", () => {
    fraseContainer.textContent = getRandomFrase(nombre);
  });

  // Botón 3: REGRESAR -> Volver a ingresar el nombre
  const btnRegresar = document.createElement("button");
  btnRegresar.textContent = "REGRESAR";
  btnRegresar.classList.add("final-btn");
  btnRegresar.addEventListener("click", () => {
    showNamePrompt();
  });

  // Agregar botones al contenedor
  buttonsContainer.appendChild(btnGracias);
  buttonsContainer.appendChild(btnUnaMas);
  buttonsContainer.appendChild(btnRegresar);

  // Agregar todo al finalPage
  finalPage.appendChild(logoImg);
  finalPage.appendChild(saludo);
  finalPage.appendChild(fraseContainer);
  finalPage.appendChild(buttonsContainer);

  document.body.appendChild(finalPage);
}

/*****************************************************
 * 5) PANTALLA LOVE (Mensaje de "GRACIAS, TQM")
 *****************************************************/
function showLovePage(nombre) {
  // Limpiar el body
  document.body.innerHTML = "";

  // Crear contenedor principal
  const lovePage = document.createElement("div");
  lovePage.classList.add("love-page");

  // Título
  const loveTitle = document.createElement("h1");
  loveTitle.textContent = "¡Te queremos mucho!";

  // Mensaje especial
  const loveMsg = document.createElement("p");
  loveMsg.innerHTML = `
    Nosotros también te queremos mucho, pero lo más importante es que tú lo hagas siempre 🫶🏼
    <br/>
    y recuerda que una QUEEN, siempre va para arriba y con la corona bien puesta
  `;

  // Botón para volver a la pantalla de frases
  const btnVolver = document.createElement("button");
  btnVolver.textContent = "VOLVER";
  btnVolver.classList.add("final-btn");
  btnVolver.addEventListener("click", () => {
    showPersonalizedMessage(nombre);
  });

  lovePage.appendChild(loveTitle);
  lovePage.appendChild(loveMsg);
  lovePage.appendChild(btnVolver);

  document.body.appendChild(lovePage);
}

/*****************************************************
 * 6) CÓDIGO ORIGINAL DE final.js (animaciones iniciales)
 *****************************************************/
setTimeout(() => {
  // Contenedor centrado (animación inicial)
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = "50%";
  container.style.left = "50%";
  container.style.transform = "translate(-50%, -50%)";
  container.style.zIndex = "10000";
  container.style.textAlign = "center";
  container.style.fontFamily = "'Flame', Arial, sans-serif";
  container.style.color = "#F7EBDB";

  // Estructura en grid
  container.innerHTML = `
    <div id="grid" style="
      position: relative;
      display: grid;
      grid-template-rows: auto auto auto auto;
      align-items: center;
      justify-items: center;
    ">
      <!-- Fila 1 -->
      <div id="line1" style="
        font-size: 3rem;
        margin: 0 0 0.1rem 0; 
        line-height: 0.8;
      ">
        HOY, TÚ ERES LA
      </div>

      <!-- Fila 2: "QUEEN" -->
      <div id="line2" style="
        font-size: 8rem;
        margin: 0 0 2rem 0; 
        line-height: 0.8;
        position: relative;
      ">
        QUEEN
      </div>

      <!-- Fila 3: Texto secundario -->
      <div id="line3" style="
        font-size: 1.4rem;
        margin: 0;
        line-height: 1.2;
        color: #FD933A;
        opacity: 0;
        transform: translateY(20px);
      ">
        (No importa qué día lo leas)
      </div>

      <!-- Fila 4: Contenedor del botón -->
      <div id="line4" style="margin-top: 1rem;"></div>
    </div>
  `;

  document.body.appendChild(container);

  // Función: animar letra por letra
  function applyExplosionEffectByLetters(element, delayIncrement = 0.1) {
    const text = element.textContent;
    element.textContent = "";
    let letterIndex = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === " ") {
        element.appendChild(document.createTextNode(" "));
      } else {
        const span = document.createElement("span");
        span.textContent = char;
        span.classList.add("explode-letter");
        span.style.animationDelay = `${letterIndex * delayIncrement}s`;
        letterIndex++;
        element.appendChild(span);
      }
    }
  }

  // Aplicar efecto a la línea 1
  const line1El = document.getElementById("line1");
  applyExplosionEffectByLetters(line1El, 0.1);

  // Ajustar "QUEEN" al ancho de "HOY, TÚ ERES LA"
  const line2El = document.getElementById("line2");
  requestAnimationFrame(() => {
    const line1Width = line1El.getBoundingClientRect().width;
    const line2Width = line2El.getBoundingClientRect().width;
    if (line2Width > 0) {
      const scaleFactor = line1Width / line2Width;
      const currentFontSize = parseFloat(window.getComputedStyle(line2El).fontSize);
      const newSize = currentFontSize * scaleFactor;
      line2El.style.fontSize = newSize + "px";
    }
    // Ocultar mientras no se anima
    line2El.style.opacity = "0";
  });

  // Animación de entrada para "QUEEN"
  function animateQueenEntrance() {
    const finalQueenEl = document.getElementById("line2");
    const finalFontSize = window.getComputedStyle(finalQueenEl).fontSize;
    
    // Elemento temporal para la animación
    const tempQueen = document.createElement("div");
    tempQueen.textContent = finalQueenEl.textContent;
    tempQueen.style.position = "absolute";
    tempQueen.style.top = finalQueenEl.offsetTop + "px";
    tempQueen.style.left = finalQueenEl.offsetLeft + "px";
    tempQueen.style.width = finalQueenEl.offsetWidth + "px";
    tempQueen.style.fontFamily = window.getComputedStyle(finalQueenEl).fontFamily;
    tempQueen.style.color = window.getComputedStyle(finalQueenEl).color;
    // 3x el tamaño final
    tempQueen.style.fontSize = (parseFloat(finalFontSize) * 3) + "px";
    tempQueen.style.lineHeight = finalQueenEl.style.lineHeight;
    // Inicia a la derecha de la pantalla
    tempQueen.style.transform = "translateX(100vw)";
    tempQueen.style.opacity = "1";
    tempQueen.style.transition = "transform 1.5s ease-in-out";

    const gridEl = document.getElementById("grid");
    gridEl.appendChild(tempQueen);

    // Forzar reflow e iniciar la animación
    void tempQueen.offsetWidth;
    tempQueen.style.transform = "translateX(-200vw)";

    // Al terminar, quitar el elemento temporal y mostrar "QUEEN" final con contorno->relleno
    tempQueen.addEventListener("transitionend", function handler() {
      tempQueen.removeEventListener("transitionend", handler);
      tempQueen.parentElement.removeChild(tempQueen);
      finalQueenEl.style.opacity = "1";
      finalQueenEl.style.color = "transparent";
      finalQueenEl.style.webkitTextStroke = "2px #F7EBDB";
      finalQueenEl.style.transition = "";
      void finalQueenEl.offsetWidth;
      finalQueenEl.classList.add("fill-text");
      finalQueenEl.addEventListener("animationend", function fillHandler() {
        finalQueenEl.removeEventListener("animationend", fillHandler);
        animateLine3();
      }, { once: true });
    });
  }

  // Animar la línea 3
  function animateLine3() {
    const line3El = document.getElementById("line3");
    line3El.style.transition = "opacity 0.8s ease-in-out, transform 0.8s ease-in-out";
    line3El.style.opacity = "1";
    line3El.style.transform = "translateY(0)";
    setTimeout(animateButtonPop, 800);
  }

  // Botón "SOY LA QUEEN"
  function animateButtonPop() {
    const line4El = document.getElementById("line4");
    const buttonEl = document.createElement("button");
    buttonEl.textContent = "SOY LA QUEEN";
    buttonEl.style.backgroundColor = "#F7EBDB";
    buttonEl.style.color = "#D82B02";
    buttonEl.style.border = "none";
    buttonEl.style.borderRadius = "2rem";
    buttonEl.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    buttonEl.style.padding = "0.75rem 2rem";
    buttonEl.style.fontSize = "1.2rem";
    buttonEl.style.fontWeight = "bold";
    buttonEl.style.cursor = "pointer";
    buttonEl.style.transition = "transform 0.5s ease, opacity 0.5s ease, background-color 0.3s";
    buttonEl.style.opacity = "0";
    buttonEl.style.transform = "scale(0.5)";

    buttonEl.addEventListener("mouseover", () => {
      buttonEl.style.backgroundColor = "#FDA45B";
    });
    buttonEl.addEventListener("mouseout", () => {
      buttonEl.style.backgroundColor = "#F7EBDB";
    });
    
    // Al hacer clic, se muestra el prompt para ingresar nombre
    buttonEl.addEventListener("click", () => {
      showNamePrompt();
    });

    line4El.appendChild(buttonEl);

    void buttonEl.offsetWidth;
    buttonEl.style.transform = "scale(1)";
    buttonEl.style.opacity = "1";
  }

  // Iniciar la animación de "QUEEN" después de 500ms
  setTimeout(animateQueenEntrance, 500);

  // "By" + logo en la esquina inferior derecha
  const brandContainer = document.createElement("div");
  brandContainer.style.position = "fixed";
  brandContainer.style.bottom = "1rem";
  brandContainer.style.right = "1rem";
  brandContainer.style.zIndex = "10001";
  brandContainer.style.display = "flex";
  brandContainer.style.alignItems = "center";
  brandContainer.style.gap = "0.5rem";

  const byText = document.createElement("span");
  byText.textContent = "By";
  byText.style.fontSize = "1rem";
  byText.style.fontWeight = "bold";
  byText.style.fontFamily = "'Flame', Arial, sans-serif";
  byText.style.color = "#F7EBDB";

  const logoImg = document.createElement("img");
  logoImg.src = "./FOTOS/FGB.png";
  logoImg.alt = "Fat Guys Logo";
  logoImg.style.width = "80px";
  logoImg.style.height = "auto";

  brandContainer.appendChild(byText);
  brandContainer.appendChild(logoImg);
  document.body.appendChild(brandContainer);

}, 11600);
