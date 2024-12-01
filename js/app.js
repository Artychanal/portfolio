document.addEventListener("DOMContentLoaded", () => {
  // Создаем экземпляр ScrollSmoother
  ScrollSmoother.create({
    wrapper: "#smooth-wrapper", // Обертка
    content: "#smooth-content", // Контент
    smooth: 1.5, // Плавность скролла
    effects: true, // Включаем эффекты скролла
  });

  // Анимация элементов при скролле
  gsap.utils.toArray(".animate-on-scroll").forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%", // Начало анимации
        end: "bottom 20%", // Конец анимации
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  });

  // Параллакс эффект для фона
  gsap.to(".parallax-background", {
    scrollTrigger: {
      trigger: ".parallax-background",
      start: "top bottom",
      scrub: true,
    },
    y: (i, target) => -window.innerHeight * 0.5,
    ease: "none",
  });

  // Анимация при наведении
  gsap.utils.toArray(".hover-animate").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(element, { scale: 1.05, duration: 0.3, ease: "power1.out" });
    });
    element.addEventListener("mouseleave", () => {
      gsap.to(element, { scale: 1, duration: 0.3, ease: "power1.out" });
    });
  });
});