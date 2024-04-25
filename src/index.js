import { Carousel } from "carousel-test-95";

const carouselEl = document.querySelector(".carousel-inner");
const carouselObj = new Carousel(carouselEl);

const previousBtn = document.querySelector("#carousel-previous");
previousBtn.addEventListener("click", () => {
  carouselObj.previous();
});

const nextBtn = document.querySelector("#carousel-next");
nextBtn.addEventListener("click", () => {
  carouselObj.next();
});
