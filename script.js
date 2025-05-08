// ─────────────────────────────────────────────────────────────────────────────
// Snippet de polling para forzar la suite “Random Quote Machine”
;(function autoSelectSuite() {
  const intervalId = setInterval(() => {
    const select = document.querySelector('.fcc-test-suite select');
    const runBtn = document.querySelector('.fcc-test-suite button');
    if (!select || !runBtn) return;
    // busca y selecciona «Random Quote Machine»
    const idx = [...select.options].findIndex(o =>
      /Random Quote Machine/i.test(o.text)
    );
    if (idx !== -1) {
      select.selectedIndex = idx;
      select.dispatchEvent(new Event('change'));
      runBtn.click();
      clearInterval(intervalId);
    }
  }, 200);
})();
// ─────────────────────────────────────────────────────────────────────────────

// US 2–5: referencias a elementos
const textEl    = document.getElementById('text');
const authorEl  = document.getElementById('author');
const newBtn    = document.getElementById('new-quote');
const tweetLink = document.getElementById('tweet-quote');

// Paleta de colores para animar el fondo
const colors = [
  '#16a085','#27ae60','#2c3e50','#f39c12',
  '#e74c3c','#9b59b6','#FB6964','#342224',
  '#472E32','#BDBB99','#77B1A9','#73A857'
];

// Citas de superación y conexión global
const quotes = [
  {
    text: "Cada amanecer nos regala la posibilidad de reinventarnos y sanar las heridas del ayer.",
    author: "Leandry Rivas"
  },
  {
    text: "Cuando el mundo parece detenerse, nuestra fuerza interior es la que impulsa el cambio.",
    author: "Leandry Rivas"
  },
  {
    text: "Las cicatrices no son más que medallas de valor, testigos de que seguimos de pie.",
    author: "Leandry Rivas"
  },
  {
    text: "La solidaridad trasciende fronteras; un simple gesto puede encender esperanza en cualquier rincón.",
    author: "Leandry Rivas"
  },
  {
    text: "La libertad auténtica nace al soltar el miedo y abrazar la incertidumbre con coraje.",
    author: "Leandry Rivas"
  },
  {
    text: "La gratitud convierte lo poco que tenemos en suficiente y nos abre las puertas al mundo.",
    author: "Leandry Rivas"
  },
  {
    text: "El verdadero viaje no es buscar nuevos paisajes, sino cambiar la mirada que tenemos de la vida.",
    author: "Leandry Rivas"
  },
  {
    text: "En cada crisis florece una oportunidad: aprende del pasado, actúa en el presente y construye el futuro.",
    author: "Leandry Rivas"
  },
  {
    text: "Nuestra voz importa; alzándola con empatía podemos inspirar a millones de corazones.",
    author: "Leandry Rivas"
  },
  {
    text: "El acto más revolucionario es creer en ti mismo cuando nadie más lo hace.",
    author: "Leandry Rivas"
  }
];

// US 6–9: muestra cita aleatoria y actualiza autor
function showRandomQuote() {
  const { text, author } = quotes[Math.floor(Math.random() * quotes.length)];
  textEl.textContent   = text;
  authorEl.textContent = `— ${author}`;

  // US 10: actualiza enlace de Twitter
  const tweetText = `"${text}" — ${author}`;
  tweetLink.href  = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

  // anima color de fondo y botones
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = color;
  newBtn.style.backgroundColor        = color;
  tweetLink.style.backgroundColor     = color;
}

// US 4: clic en “Nueva cita”
newBtn.addEventListener('click', showRandomQuote);
// US 6–7: carga inicial
window.addEventListener('load', showRandomQuote);
