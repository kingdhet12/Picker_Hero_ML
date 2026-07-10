// ==============================
// Data Hero Mobile Legends
// Roster diverifikasi pada 10 Juli 2026 dari MLBB Wiki.
// ==============================
const heroes = [
  { name: "Miya", role: "Marksman" },
  { name: "Balmond", role: "Fighter" },
  { name: "Saber", role: "Assassin" },
  { name: "Alice", role: "Mage / Tank" },
  { name: "Nana", role: "Mage" },
  { name: "Tigreal", role: "Tank" },
  { name: "Alucard", role: "Fighter / Assassin" },
  { name: "Karina", role: "Assassin" },
  { name: "Akai", role: "Tank" },
  { name: "Franco", role: "Tank" },
  { name: "Bane", role: "Fighter / Mage" },
  { name: "Bruno", role: "Marksman" },
  { name: "Clint", role: "Marksman" },
  { name: "Rafaela", role: "Support" },
  { name: "Eudora", role: "Mage" },
  { name: "Zilong", role: "Fighter / Assassin" },
  { name: "Fanny", role: "Assassin" },
  { name: "Layla", role: "Marksman" },
  { name: "Minotaur", role: "Tank / Support" },
  { name: "Lolita", role: "Support / Tank" },
  { name: "Hayabusa", role: "Assassin" },
  { name: "Freya", role: "Fighter" },
  { name: "Gord", role: "Mage" },
  { name: "Natalia", role: "Assassin" },
  { name: "Kagura", role: "Mage" },
  { name: "Chou", role: "Fighter" },
  { name: "Sun", role: "Fighter" },
  { name: "Alpha", role: "Fighter" },
  { name: "Ruby", role: "Fighter / Tank" },
  { name: "Yi Sun-shin", role: "Assassin / Marksman" },
  { name: "Moskov", role: "Marksman" },
  { name: "Johnson", role: "Tank / Support" },
  { name: "Cyclops", role: "Mage" },
  { name: "Estes", role: "Support" },
  { name: "Hilda", role: "Fighter / Tank" },
  { name: "Aurora", role: "Mage" },
  { name: "Lapu-Lapu", role: "Fighter" },
  { name: "Vexana", role: "Mage" },
  { name: "Roger", role: "Fighter / Marksman" },
  { name: "Karrie", role: "Marksman" },
  { name: "Gatotkaca", role: "Tank / Fighter" },
  { name: "Harley", role: "Mage / Assassin" },
  { name: "Irithel", role: "Marksman" },
  { name: "Grock", role: "Tank / Fighter" },
  { name: "Argus", role: "Fighter" },
  { name: "Odette", role: "Mage" },
  { name: "Lancelot", role: "Assassin" },
  { name: "Diggie", role: "Support" },
  { name: "Hylos", role: "Tank" },
  { name: "Zhask", role: "Mage" },
  { name: "Helcurt", role: "Assassin" },
  { name: "Pharsa", role: "Mage" },
  { name: "Lesley", role: "Marksman / Assassin" },
  { name: "Jawhead", role: "Fighter" },
  { name: "Angela", role: "Support" },
  { name: "Gusion", role: "Assassin" },
  { name: "Valir", role: "Mage" },
  { name: "Martis", role: "Fighter" },
  { name: "Uranus", role: "Tank" },
  { name: "Hanabi", role: "Marksman" },
  { name: "Chang'e", role: "Mage" },
  { name: "Kaja", role: "Fighter / Support" },
  { name: "Selena", role: "Assassin / Mage" },
  { name: "Aldous", role: "Fighter" },
  { name: "Claude", role: "Marksman" },
  { name: "Vale", role: "Mage" },
  { name: "Leomord", role: "Fighter" },
  { name: "Lunox", role: "Mage" },
  { name: "Hanzo", role: "Assassin" },
  { name: "Belerick", role: "Tank" },
  { name: "Kimmy", role: "Marksman / Mage" },
  { name: "Thamuz", role: "Fighter" },
  { name: "Harith", role: "Mage" },
  { name: "Minsitthar", role: "Fighter" },
  { name: "Kadita", role: "Mage / Assassin" },
  { name: "Faramis", role: "Support / Mage" },
  { name: "Badang", role: "Fighter" },
  { name: "Khufra", role: "Tank" },
  { name: "Granger", role: "Marksman" },
  { name: "Guinevere", role: "Fighter" },
  { name: "Esmeralda", role: "Mage / Tank" },
  { name: "Terizla", role: "Fighter / Tank" },
  { name: "X.Borg", role: "Fighter" },
  { name: "Ling", role: "Assassin" },
  { name: "Dyrroth", role: "Fighter" },
  { name: "Lylia", role: "Mage" },
  { name: "Baxia", role: "Tank" },
  { name: "Masha", role: "Fighter / Tank" },
  { name: "Wanwan", role: "Marksman" },
  { name: "Silvanna", role: "Fighter" },
  { name: "Cecilion", role: "Mage" },
  { name: "Carmilla", role: "Support / Tank" },
  { name: "Atlas", role: "Tank" },
  { name: "Popol and Kupa", role: "Marksman" },
  { name: "Yu Zhong", role: "Fighter" },
  { name: "Luo Yi", role: "Mage" },
  { name: "Benedetta", role: "Assassin / Fighter" },
  { name: "Khaleed", role: "Fighter" },
  { name: "Barats", role: "Tank / Fighter" },
  { name: "Brody", role: "Marksman" },
  { name: "Yve", role: "Mage" },
  { name: "Mathilda", role: "Support / Assassin" },
  { name: "Paquito", role: "Fighter / Assassin" },
  { name: "Gloo", role: "Tank" },
  { name: "Beatrix", role: "Marksman" },
  { name: "Phoveus", role: "Fighter" },
  { name: "Natan", role: "Marksman" },
  { name: "Aulus", role: "Fighter" },
  { name: "Aamon", role: "Assassin" },
  { name: "Valentina", role: "Mage" },
  { name: "Edith", role: "Tank / Marksman" },
  { name: "Floryn", role: "Support" },
  { name: "Yin", role: "Fighter / Assassin" },
  { name: "Melissa", role: "Marksman" },
  { name: "Xavier", role: "Mage" },
  { name: "Julian", role: "Assassin / Fighter" },
  { name: "Fredrinn", role: "Fighter / Tank" },
  { name: "Joy", role: "Assassin" },
  { name: "Novaria", role: "Mage" },
  { name: "Arlott", role: "Fighter / Assassin" },
  { name: "Ixia", role: "Marksman" },
  { name: "Nolan", role: "Assassin" },
  { name: "Cici", role: "Fighter" },
  { name: "Chip", role: "Support / Tank" },
  { name: "Zhuxin", role: "Mage" },
  { name: "Suyou", role: "Assassin / Fighter" },
  { name: "Lukas", role: "Fighter" },
  { name: "Kalea", role: "Support / Fighter" },
  { name: "Zetian", role: "Mage" },
  { name: "Obsidia", role: "Marksman" },
  { name: "Sora", role: "Fighter / Assassin" },
  { name: "Marcel", role: "Support" },
  { name: "Hirara", role: "Assassin" },
];

// ==============================
// Role Tim untuk 5 Player
// ==============================
const teamRoles = ["Jungle", "Mid Lane", "Gold Lane", "EXP Lane", "Roam"];

// ==============================
// Elemen DOM
// ==============================
const siteHeader = document.getElementById("siteHeader");
const navbarToggle = document.getElementById("navbarToggle");
const navbarMenu = document.getElementById("navbarMenu");
const navLinks = document.querySelectorAll(".navbar__link");
const themeToggle = document.getElementById("themeToggle");
const heroPoolCount = document.getElementById("heroPoolCount");
const startPickButton = document.getElementById("startPickButton");
const randomButton = document.getElementById("randomButton");
const rerollButton = document.getElementById("rerollButton");
const resetButton = document.getElementById("resetButton");
const loadingPanel = document.getElementById("loadingPanel");
const playerInputs = document.querySelectorAll(".player-name-input");
const playerCards = document.querySelectorAll(".player-card");
const backToTop = document.getElementById("backToTop");
const revealElements = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("main section[id]");
const particleCanvas = document.getElementById("particleCanvas");
const particleContext = particleCanvas.getContext("2d");

let isRandomizing = false;
let particles = [];

// ==============================
// Helper Umum
// ==============================
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function escapeText(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getInitials(name) {
  return name
    .split(/[\s.-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function getRoleColor(role) {
  if (role.includes("Tank")) return "#42d7ff";
  if (role.includes("Fighter")) return "#ff7a45";
  if (role.includes("Assassin")) return "#b36bff";
  if (role.includes("Mage")) return "#5aa7ff";
  if (role.includes("Marksman")) return "#ffd166";
  if (role.includes("Support")) return "#6dffb8";
  return "#f6c85f";
}

function createHeroSlug(name) {
  return name
    .toLowerCase()
    .replace(/[\.'']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getHeroImagePath(hero) {
  return `assets/heroes/${createHeroSlug(hero.name)}.png`;
}

// ==============================
// Hero Portrait SVG Dinamis
// ==============================
function createHeroPortrait(hero) {
  const safeName = escapeText(hero.name);
  const safeRole = escapeText(hero.role);
  const initials = escapeText(getInitials(hero.name));
  const roleColor = getRoleColor(hero.role);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" role="img" aria-label="${safeName}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#061536"/>
          <stop offset="45%" stop-color="#1c1a62"/>
          <stop offset="100%" stop-color="${roleColor}"/>
        </linearGradient>
        <radialGradient id="aura" cx="50%" cy="38%" r="62%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity=".42"/>
          <stop offset="52%" stop-color="${roleColor}" stop-opacity=".22"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="520" height="520" rx="44" fill="url(#bg)"/>
      <circle cx="260" cy="190" r="196" fill="url(#aura)"/>
      <path d="M72 438c25-106 104-166 188-166s163 60 188 166H72Z" fill="#060a18" opacity=".78"/>
      <path d="M144 232l70-92 46 62 46-62 70 92-48 62H192l-48-62Z" fill="#f6c85f" opacity=".92"/>
      <path d="M198 298h124l-28 82h-68l-28-82Z" fill="#ffffff" opacity=".18"/>
      <circle cx="260" cy="214" r="92" fill="#111a40" opacity=".72"/>
      <text x="260" y="238" text-anchor="middle" font-family="Poppins, Arial, sans-serif" font-size="82" font-weight="800" fill="#ffffff">${initials}</text>
      <rect x="72" y="392" width="376" height="64" rx="32" fill="#050815" opacity=".72"/>
      <text x="260" y="416" text-anchor="middle" font-family="Poppins, Arial, sans-serif" font-size="25" font-weight="800" fill="#ffe9a4">${safeName}</text>
      <text x="260" y="444" text-anchor="middle" font-family="Poppins, Arial, sans-serif" font-size="17" font-weight="700" fill="${roleColor}">${safeRole}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

// ==============================
// Fisher-Yates Shuffle
// ==============================
function fisherYatesShuffle(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function getRandomHeroes() {
  return fisherYatesShuffle(heroes).slice(0, 5);
}

// ==============================
// Data Player dan Update Card
// ==============================
function getPlayerNames() {
  return Array.from(playerInputs).map((input, index) => {
    const value = input.value.trim();
    return value || `Player ${index + 1}`;
  });
}

function setCardLoading(card, playerName, index) {
  const image = card.querySelector(".player-card__image");

  card.classList.remove("is-picked", "reveal-result");
  card.classList.add("is-shuffling");
  card.querySelector(".player-card__avatar").textContent = `P${index + 1}`;
  card.querySelector(".player-card__lane").textContent = teamRoles[index];
  card.querySelector(".player-card__name").textContent = playerName;
  card.querySelector(".player-card__hero").textContent = "Shuffling...";
  card.querySelector(".player-card__role").textContent = "Choosing";
  image.onerror = null;
  image.src = "assets/heroes/hero-placeholder.svg";
  image.alt = "Hero sedang diacak";
}

function setCardResult(card, playerName, hero, index) {
  const image = card.querySelector(".player-card__image");

  card.classList.remove("is-shuffling", "is-picked", "reveal-result");
  void card.offsetWidth;

  card.querySelector(".player-card__avatar").textContent = getInitials(playerName) || `P${index + 1}`;
  card.querySelector(".player-card__lane").textContent = teamRoles[index];
  card.querySelector(".player-card__name").textContent = playerName;
  card.querySelector(".player-card__hero").textContent = hero.name;
  card.querySelector(".player-card__role").textContent = hero.role;
  image.onerror = () => {
    image.onerror = null;
    image.src = createHeroPortrait(hero);
  };
  image.src = getHeroImagePath(hero);
  image.alt = `Hero ${hero.name}`;

  card.classList.add("is-picked", "reveal-result");
}

function resetCards() {
  const playerNames = getPlayerNames();

  playerCards.forEach((card, index) => {
    const image = card.querySelector(".player-card__image");

    card.classList.remove("is-shuffling", "is-picked", "reveal-result");
    card.querySelector(".player-card__avatar").textContent = `P${index + 1}`;
    card.querySelector(".player-card__lane").textContent = teamRoles[index];
    card.querySelector(".player-card__name").textContent = playerNames[index] || `Player ${index + 1}`;
    card.querySelector(".player-card__hero").textContent = "Belum Dipilih";
    card.querySelector(".player-card__role").textContent = "Role Hero";
    image.onerror = null;
    image.src = "assets/heroes/hero-placeholder.svg";
    image.alt = "Hero belum dipilih";
  });
}

// ==============================
// Random Hero Picker
// ==============================
async function randomizeHeroes() {
  if (isRandomizing) return;

  isRandomizing = true;
  setButtonsDisabled(true);
  playClickSound();

  const playerNames = getPlayerNames();
  const selectedHeroes = getRandomHeroes();

  loadingPanel.classList.add("show");
  playerCards.forEach((card, index) => setCardLoading(card, playerNames[index], index));

  await delay(3000);

  playerCards.forEach((card) => card.classList.remove("is-shuffling"));

  for (let index = 0; index < playerCards.length; index += 1) {
    await delay(360);
    setCardResult(playerCards[index], playerNames[index], selectedHeroes[index], index);
  }

  loadingPanel.classList.remove("show");
  setButtonsDisabled(false);
  isRandomizing = false;
}

function setButtonsDisabled(disabled) {
  [startPickButton, randomButton, rerollButton, resetButton].forEach((button) => {
    button.disabled = disabled;
  });
}

// ==============================
// Efek Suara Klik Opsional
// ==============================
function playClickSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;

  if (!AudioContext) return;

  const audioContext = new AudioContext();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(540, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(180, audioContext.currentTime + 0.16);
  gain.gain.setValueAtTime(0.12, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.18);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.18);
}

// ==============================
// Particle Background Canvas
// ==============================
function resizeCanvas() {
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;
}

function createParticles() {
  const total = Math.min(90, Math.floor(window.innerWidth / 16));

  particles = Array.from({ length: total }, () => ({
    x: Math.random() * particleCanvas.width,
    y: Math.random() * particleCanvas.height,
    radius: Math.random() * 2.2 + 0.8,
    speedX: (Math.random() - 0.5) * 0.45,
    speedY: Math.random() * 0.42 + 0.12,
    alpha: Math.random() * 0.5 + 0.2,
  }));
}

function drawParticles() {
  particleContext.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

  particles.forEach((particle) => {
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (particle.y > particleCanvas.height + 10) {
      particle.y = -10;
      particle.x = Math.random() * particleCanvas.width;
    }

    if (particle.x < -10) particle.x = particleCanvas.width + 10;
    if (particle.x > particleCanvas.width + 10) particle.x = -10;

    particleContext.beginPath();
    particleContext.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    particleContext.fillStyle = `rgba(246, 200, 95, ${particle.alpha})`;
    particleContext.fill();
  });

  requestAnimationFrame(drawParticles);
}

// ==============================
// Smooth Scroll dan Navbar
// ==============================
function closeMobileMenu() {
  navbarMenu.classList.remove("show");
  navbarToggle.classList.remove("open");
  navbarToggle.setAttribute("aria-expanded", "false");
}

navbarToggle.addEventListener("click", () => {
  const isOpen = navbarMenu.classList.toggle("show");
  navbarToggle.classList.toggle("open", isOpen);
  navbarToggle.setAttribute("aria-expanded", isOpen.toString());
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    event.preventDefault();
    window.scrollTo({
      top: targetElement.offsetTop - siteHeader.offsetHeight + 2,
      behavior: "smooth",
    });
    closeMobileMenu();
  });
});

function setActiveMenu() {
  const scrollPosition = window.scrollY + siteHeader.offsetHeight + 90;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPosition >= top && scrollPosition < bottom) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    }
  });
}

function handleScroll() {
  siteHeader.classList.toggle("scrolled", window.scrollY > 24);
  backToTop.classList.toggle("show", window.scrollY > 520);
  setActiveMenu();
}

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ==============================
// Dark Mode
// ==============================
function updateThemeIcon() {
  const icon = themeToggle.querySelector("i");
  icon.className = document.body.classList.contains("dark-mode") ? "fa-solid fa-moon" : "fa-solid fa-sun";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("ml-picker-theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  updateThemeIcon();
});

// ==============================
// Ripple Effect Tombol
// ==============================
document.querySelectorAll(".ripple-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.className = "ripple";
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
});

// ==============================
// Reveal Animation
// ==============================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealElements.forEach((element) => revealObserver.observe(element));

// ==============================
// Event Tombol Picker
// ==============================
startPickButton.addEventListener("click", async () => {
  document.getElementById("picker").scrollIntoView({ behavior: "smooth" });
  await delay(620);
  randomizeHeroes();
});

randomButton.addEventListener("click", randomizeHeroes);
rerollButton.addEventListener("click", randomizeHeroes);
resetButton.addEventListener("click", () => {
  if (isRandomizing) return;
  playClickSound();
  resetCards();
  loadingPanel.classList.remove("show");
});

playerInputs.forEach((input) => {
  input.addEventListener("input", resetCards);
});

// ==============================
// Inisialisasi Halaman
// ==============================
window.addEventListener("resize", () => {
  resizeCanvas();
  createParticles();
});

window.addEventListener("scroll", handleScroll);

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("ml-picker-theme");
  if (savedTheme === "light") document.body.classList.remove("dark-mode");

  heroPoolCount.textContent = `${heroes.length} Heroes`;
  resetCards();
  updateThemeIcon();
  resizeCanvas();
  createParticles();
  drawParticles();
  handleScroll();
});
