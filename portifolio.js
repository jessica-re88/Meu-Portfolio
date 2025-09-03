// Alternar Dark Mode
const btn = document.getElementById("toggle-dark");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Opcional: salvar preferência no localStorage
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
}

btn.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDark);
});
