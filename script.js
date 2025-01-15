let imgs = document.querySelectorAll(".images ul img");
let prev_btn = document.querySelector("#left_btn");
let next_btn = document.querySelector("#right_btn");

let n = 0;

function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}
changeSlide();
prev_btn.addEventListener("click", () => {
  n--;
  if (n < 0) {
    n = imgs.length - 1;
  }
  changeSlide();
});
next_btn.addEventListener("click", () => {
  n++;
  if (n > imgs.length - 1) {
    n = 0;
  }
  changeSlide();
});
