// script.js

// ✅ Register GSAP + ScrollTrigger once
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  initPageAnimations();
  initCarousel();
  initForm();
});

// ✅ Page Animations
function initPageAnimations() {
  
  // Header fade-in
  gsap.from("header", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out"
  });


  // Hero title masked text reveal
  gsap.from(".hero-title .mask", {
    yPercent: 100,
    duration: 1,
    ease: "power4.out",
    stagger: 0.15,
    delay: 0.3
  });

  // Hero subtitle + button
  gsap.from(".hero-sub, .btn", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.2,
    delay: 1
  });

  // Fade-in on scroll
  document.querySelectorAll(".fade-in").forEach(el => {
    gsap.from(el, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%"
      }
    });
  });

  // Services cards stagger (keep only one version ✅)
  gsap.from(".card", {
    opacity: 0,
    y: 40,
    duration: 0.9,
    stagger: 0.25,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".services-grid",
      start: "top 85%"
    }
  });
}

// ✅ Carousel
function initCarousel() {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  let index = 0;

  function updateCarousel() {
    gsap.to(track, { x: -index * 100 + "%", duration: 0.8, ease: "power2.inOut" });
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  });
}

// ✅ Booking form (clean version)
function initForm() {
  const bookingForm = document.getElementById("booking-form");
  if (!bookingForm) return;

const response = document.getElementById("bookingResponse");


  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    response.textContent = "Message sent successfully!";
    response.className = "form-response success";
    gsap.fromTo(response, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 });
    bookingForm.reset();
  });
}
