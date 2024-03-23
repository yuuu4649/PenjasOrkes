// Fungsi untuk menampilkan dark dan light mode
function toggleTheme(theme) {
  const body = document.body;
  body.classList.remove("dark-theme", "light-theme");
  body.classList.add(theme);

  // Simpan preferensi tema di Local Storage
  localStorage.setItem("theme", theme);
}

// Fungsi untuk  mengecek dark mode dan light mode dari local storage
function checkThemePreference() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark-theme") {
    toggleTheme("dark-theme");
  } else {
    toggleTheme("light-theme");
  }
}

// Event listeners untuk tombol dari dark mode dan light mode
document
  .getElementById("dark-theme-btn")
  .addEventListener("click", function () {
    toggleTheme("dark-theme");
  });

document
  .getElementById("light-theme-btn")
  .addEventListener("click", function () {
    toggleTheme("light-theme");
  });

// Memanggil fungsi checkThemePreference saat DOM content di muat
document.addEventListener("DOMContentLoaded", function () {
  checkThemePreference();
});
