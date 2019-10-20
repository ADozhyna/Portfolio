window.onload = function() {
  const button = document.querySelector("#button-width");
  const iframe = document.querySelector(".container");

  button.addEventListener("click", () => {
    if (button.innerHTML == "Mobile") {
      iframe.style.width = 375 + "px";
      button.innerHTML = "Desktop";
    } else {
      iframe.style.width = 100 + "%";
      button.innerHTML = "Mobile";
    }
  });
};
