import { Carousel } from "carousel-test-95";

const carouselEl = document.querySelector(".carousel-outer");
const carouselObj = new Carousel(carouselEl);

const featuredLinkEl = document.querySelector("#featured-link");
const menuLinkEl = document.querySelector("#menu-link");
const aboutLinkEl = document.querySelector("#about-link");

featuredLinkEl.addEventListener("click", () => {
  carouselObj.jumpTo(1);
});
menuLinkEl.addEventListener("click", () => {
  carouselObj.jumpTo(0);
});
