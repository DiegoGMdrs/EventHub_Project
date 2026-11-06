lucide.createIcons(); // Carrega os ícones da biblioteca Lucide.

// =========================================
// 1. CARROSSEL PRINCIPAL (SWIPER)
// =========================================

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// =========================================
// 2. CARROSSEL DE CATEGORIAS
// =========================================

const categoriesViewport = document.querySelector(".categories-viewport");
const prevButton = document.querySelector(".categories-prev");
const nextButton = document.querySelector(".categories-next");
const favoriteButtons = document.querySelectorAll(".favorite-button");

nextButton.addEventListener("click", () => {
  categoriesViewport.scrollBy({
    left: categoriesViewport.clientWidth,
    behavior: "smooth",
  });
});

prevButton.addEventListener("click", () => {
  categoriesViewport.scrollBy({
    left: -categoriesViewport.clientWidth,
    behavior: "smooth",
  });
});

// =========================================
// 3. BOTÃO DE FAVORITOS
// =========================================

favoriteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isActive = button.classList.toggle("active");
  });
});
