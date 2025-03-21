document.addEventListener("DOMContentLoaded", () => {
  const reviews = document.querySelectorAll(".testinominals p");
  const names = document.querySelectorAll(".testinominals__buttons span");
  const prevBtn = document.getElementById("testinominals-prev");
  const nextBtn = document.getElementById("testinominals-next");
  let currentIndex = 0;

  function updateTestinominals() {
    reviews.forEach((review, index) => {
      review.classList.toggle("active", index === currentIndex);
    });
    names.forEach((name, index) => {
      name.classList.toggle("active", index === currentIndex);
    });
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    updateTestinominals();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateTestinominals();
  });

  updateTestinominals();
});
