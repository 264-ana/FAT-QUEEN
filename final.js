// Esperamos a que finalice la animación de los nombres (11.6s desde que inició todo)
setTimeout(() => {
  // Contenedor centrado
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

  // Botón "ENCONTRARME"
  function animateButtonPop() {
    const line4El = document.getElementById("line4");
    const buttonEl = document.createElement("button");
    buttonEl.textContent = "ENCONTRARME";
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

  // Ajusta la ruta de la imagen a ./FOTOS/FGB.png
  const logoImg = document.createElement("img");
  logoImg.src = "./FOTOS/FGB.png";
  logoImg.alt = "Fat Guys Logo";
  logoImg.style.width = "80px";
  logoImg.style.height = "auto";

  brandContainer.appendChild(byText);
  brandContainer.appendChild(logoImg);
  document.body.appendChild(brandContainer);

}, 11600);
