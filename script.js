const bar = document.getElementById("bar");
const close = document.getElementById("close");
const menu = document.querySelector(".categories ul");
const mainImg = document.getElementById("MainImg");
const smallImg = document.getElementsByClassName("small-img");
if (bar) {
  bar.addEventListener("click", () => {
    menu.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    menu.classList.remove("active");
  });
}
smallImg[0].onclick = function () {
  mainImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  mainImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  mainImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  mainImg.src = smallImg[3].src;
};
