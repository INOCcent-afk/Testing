const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".scrolling-container"),
  smooth: true,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".scrolling-container", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  pinType: document.querySelector(".scrolling-container").style.transform
    ? "transform"
    : "fixed",
});

let tl = gsap
  .timeline({ defaults: { ease: "none" } })
  .to(".changeColor", { color: "#cc7a00", duration: 1 })
  .to(".nav", { color: "#cc7a00", duration: 1 }, "-=1")
  .to(".circle", { background: "#cc7a00", duration: 1 }, "-=1");
ScrollTrigger.create({
  trigger: ".puerto-first-showCase",
  start: "50% 50%",
  end: "+=300",
  scroller: ".scrolling-container",
  animation: tl,
  scrub: true,
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

const cebuL = document.querySelector(".cebuL");
const puertoL = document.querySelector(".puertoL");
const manilaL = document.querySelector(".manilaL");
const baguioL = document.querySelector(".baguioL");
const davaoL = document.querySelector(".davaoL");

const showcaseHero = document.querySelector(".showcase-hero");

cebuL.addEventListener("mouseenter", function () {
  showcaseHero.style.backgroundImage =
    "url('./../images/puerto princesa/1d3acf89-3e04-4386-866d-393591e1a67d.jpg')";
});
// // ***********************

puertoL.addEventListener("mouseenter", function () {
  showcaseHero.style.backgroundImage =
    "url('./../images/puerto princesa/7254fcf7-fe23-4e9d-9497-aae983424b77.jpg";
});
manilaL.addEventListener("mouseenter", function () {
  showcaseHero.style.backgroundImage =
    "url('./../images/puerto princesa/7254fcf7-fe23-4e9d-9497-aae983424b77.jpg";
});
baguioL.addEventListener("mouseenter", function () {
  showcaseHero.style.backgroundImage =
    "url('./../images/puerto princesa/7254fcf7-fe23-4e9d-9497-aae983424b77.jpg";
});

davaoL.addEventListener("mouseenter", function () {
  showcaseHero.style.backgroundImage =
    "url('./../images/puerto princesa/7254fcf7-fe23-4e9d-9497-aae983424b77.jpg";
});
