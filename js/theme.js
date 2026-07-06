const THEME_STORAGE_KEY = "portfolio-theme";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

function updateThemeButton(theme) {
  const toggle = document.querySelector("[data-theme-toggle]");

  if (!toggle) {
    return;
  }

  const icon = toggle.querySelector(".theme-toggle__icon");
  toggle.setAttribute("aria-pressed", String(theme === "dark"));

  if (icon) {
    icon.textContent = theme === "dark" ? "☀︎" : "☾";
  }
}

function initializeTheme() {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = storedTheme || (prefersDark ? "dark" : "light");

  applyTheme(theme);
  updateThemeButton(theme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(currentTheme);
  localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
  updateThemeButton(currentTheme);
}

function initThemeToggle() {
  const toggle = document.querySelector("[data-theme-toggle]");

  if (!toggle) {
    return;
  }

  toggle.addEventListener("click", toggleTheme);
}

initializeTheme();
initThemeToggle();
