
gsap.utils.toArray(".card").forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%", 
      end: "top 70%",
      toggleActions: "play none none reverse", 
      scrub: true
    },
    opacity: 0, 
    y: 50, 
    duration: 1 
  });
});
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });