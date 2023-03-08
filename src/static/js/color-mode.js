const storedTheme = localStorage.getItem("theme");

function prefersDarkMode() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getPreferredTheme() {
  if (storedTheme) {
    return storedTheme;
  }

  return prefersDarkMode() ? "dark" : "light";
}

function setTheme(theme) {
  if (theme === "auto" && prefersDarkMode()) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", theme);
  }
}

const icons = {
  dark: ["far", "fas"],
  light: ["far", "fas"],
};

function showActiveTheme(theme) {
  document.querySelectorAll("[data-theme-value]").forEach(function (e) {
    e.classList.remove("active", "fas");
    e.classList.add("far");
  });

  const active = document.querySelector(`[data-theme-value="${theme}"]`);
  active.classList.add("active", "fas");
  active.classList.remove("far");
}

setTheme(getPreferredTheme());

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", function () {
    if (storedTheme !== "light" && storedTheme !== "dark") {
      setTheme(getPreferredTheme());
    }
  });

window.addEventListener("DOMContentLoaded", function () {
  showActiveTheme(storedTheme ?? "auto");
  document.querySelectorAll("[data-theme-value]").forEach(function (e) {
    e.addEventListener("click", () => {
      const theme = e.dataset.themeValue;
      localStorage.setItem("theme", theme);
      setTheme(theme);
      showActiveTheme(theme);
    });
  });
});
