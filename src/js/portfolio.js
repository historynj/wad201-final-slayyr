document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".category");
  const images = document.querySelectorAll(".category__images");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function (event) {
      event.preventDefault();

      document
        .querySelectorAll(".category")
        .forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      images.forEach((img) => img.classList.remove("active"));
      images[index].classList.add("active");
    });
  });
});
