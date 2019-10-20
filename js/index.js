window.onload = function() {
  const panel = document.querySelector(".panel");
  const educationList = document.querySelector(".my-education-schools");
  const project = document.querySelectorAll(".project-name");
  const list = document.querySelectorAll(".list");
  this.console.log(list);

  panel.addEventListener("click", () => {
    panel.classList.toggle("active");
    if (educationList.style.maxHeight) {
      educationList.style.maxHeight = null;
    } else {
      educationList.style.maxHeight = educationList.scrollHeight + "px";
    }
  });

  project.forEach(elem => {
    elem.addEventListener("click", function() {
      list.forEach(el => {
        if (el.style.maxHeight) {
          el.style.maxHeight = null;
        } else {
          el.style.maxHeight = el.scrollHeight + "px";
        }
      });
      elem.classList.toggle("active");
    });
  });

  let swiper = new Swiper(".swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
};
