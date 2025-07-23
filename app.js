gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
const smoother=ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content:"#smooth-content",
  smooth: 1.5,
    effects: true,  
    smoothTouch: 0.1,

});

const tl1=gsap.timeline({
    scrollTrigger: {
        trigger:".page1",
        start:"90% 80%",
        end:"150% 80%",
        scrub: 1,
 
    }
})
tl1.to("#bg",{
    transform:"scale(1.2)",

})
const tl=gsap.timeline();
tl.to(".loading",{
    width:"100%",
    duration:0.7,
    delay:0.3,
})
.to(".capsulelogo", {
    scale:2,
    duration:0.5,
    opacity:0,
},'a')
.to(".capsule",{
    clipPath:"inset(0% 0% 0% 0%)",
},'a')
