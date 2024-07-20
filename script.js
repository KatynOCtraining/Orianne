document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  const largeViewButton = document.getElementById("large-view-button");
  const gridViewButton = document.getElementById("grid-view-button");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const items = document.querySelectorAll(".gallery-item");

  let currentIndex = 0;

  function showItem(index) {
    items.forEach((item, i) => {
      item.classList.toggle("active", i === index);
    });
  }

  function showNextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
  }

  function showPrevItem() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
  }

  largeViewButton.addEventListener("click", () => {
    gallery.classList.add("large-view");
    gallery.classList.remove("grid-view");
    showItem(currentIndex);
  });

  gridViewButton.addEventListener("click", () => {
    gallery.classList.add("grid-view");
    gallery.classList.remove("large-view");
    items.forEach((item) => item.classList.add("active"));
  });

  prevButton.addEventListener("click", showPrevItem);
  nextButton.addEventListener("click", showNextItem);

  // Initial display
  showItem(currentIndex);
});
