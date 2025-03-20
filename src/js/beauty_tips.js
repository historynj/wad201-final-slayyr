document.addEventListener("DOMContentLoaded", function () {
    const filterdivlinks = document.getElementById("beauty-links");
    const filtera = filterdivlinks.querySelectorAll("a");
    const images = document.querySelectorAll(".image-item");
    filtera.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            filtera.forEach(item => item.classList.remove("active-filter"));
            this.classList.add("active-filter");

             const filter = this.getAttribute("data-filter");

             images.forEach(image => {
                if (filter === "all") {
                image.style.display = "block";
                } else {
                    const category = image.getAttribute("data-category");
                  if (category === filter) {
                      image.style.display = "block";
                  } else {
                      image.style.display = "none";
                  }
              }
          });
        });
    });
});


