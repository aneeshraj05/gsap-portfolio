gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// Enable smooth scroll
const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5,
  effects: true,
  smoothTouch: 0.1,
});

// Scroll-triggered zoom on background image
const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1",
    start: "90% 80%",
    end: "150% 80%",
    scrub: 1,
  }
});
tl1.to("#bg", {
  scale: 1.2,
});

// Capsule logo animation on load
const tl = gsap.timeline();
tl.to(".loading", {
  width: "100%",
  duration: 0.7,
  delay: 0.3,
})
.to(".capsulelogo", {
  scale: 2,
  duration: 0.5,
  opacity: 0,
}, 'a')
.to(".capsule", {
  clipPath: "inset(0% 0% 0% 0%)",
}, 'a');

// Scroll-triggered movement of .bottom in .page2
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "28% 70%",
    end: "100% 70%",
    scrub: 1,
   
  }
});
tl2.to(".page2 .bottom", {
  y: 520,
});
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    start: "1% 50%",
    end: "40% 50%",
    scrub: 1,
    markers: true,
  }
})
tl3.to(".hide",{
    top:"-100%"
})
