document.addEventListener("DOMContentLoaded", () => {
  ScrollSmoother.create({
    wrapper: "#smooth-wrapper", 
    content: "#smooth-content", 
    smooth: 1.5, 
    effects: true, 
  });

  gsap.utils.toArray(".animate-on-scroll").forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%", 
        end: "bottom 20%", 
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  });

  gsap.to(".parallax-background", {
    scrollTrigger: {
      trigger: ".parallax-background",
      start: "top bottom",
      scrub: true,
    },
    y: (i, target) => -window.innerHeight * 0.5,
    ease: "none",
  });

  gsap.utils.toArray(".hover-animate").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(element, { scale: 1.05, duration: 0.1, ease: "power1.out" });
    });
    element.addEventListener("mouseleave", () => {
      gsap.to(element, { scale: 1, duration: 0.1, ease: "power1.out" });
    });
  });
});