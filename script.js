const ul = document.querySelector(".navegador ul");
const menu = document.querySelector(".menu i");
const habilitando = document.querySelectorAll(".habili");

function menuShow() {
  ul.classList.toggle("open");
}

habilitando.forEach(function (habili) {
  habili.addEventListener("click", function () {
    habili.classList.toggle("ativo");
  });
});
