document.addEventListener("contextmenu",function(e){
  e.preventDefault();
});
gsap.registerPlugin(ScrollTrigger);
// custom cursorr styling here

let cursor = document.querySelector(".cursorr");
document.addEventListener("mousemove",(e)=>{
  gsap.to(cursor,{
    x:e.clientX,
    y:e.clientY,
    duration:6,
    ease:"elastic.out(1, 0.3)" 
  });
  
});
//logo animation
let logo = document.querySelector(".logss");
gsap.from(logo,{
  y:100,
  delay:.1,
  scale:0.3,
  opacity:0,
  duration:.6,
  ease:"power3.out"
});
// NAVS LINKS ANIMATION
let navs = document.querySelectorAll(".nav-link");

  gsap.from(navs,{
    y:100,
    opacity:0,
    delay:0.2,
    scale:0.3,
    ease:"bounce.in",
    duration:1,
    stagger:0.2
  });
  // HERO PAGE IMAGE ANIMATION
  let hImage = document.querySelector(".h_right");
  gsap.from(hImage,{
    scale:.2,
    opacity:0,
    duration:2,
    delay:.2,
    ease:"power1.out"
  });
  // cards section amimation
   let card = document.querySelectorAll(".card");
  gsap.from(card,{
    y:50,
    stagger:0.2,
    opacity:0,
    scale:.5,
    delay:.1,
    duration:4,
     scrollTrigger: {
      trigger: card,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
    },
  });


// SCROLL TRIGGER IN THE ABOUT SECTIONS


let boxx = document.querySelectorAll(".childd");
let imgg = document.querySelector(".middle");

// Animate child elements
boxx.forEach((ele) => {
  gsap.from(ele, {
    y: 160,
    opacity: 0,
    ease: "power2.out",
    duration: 0.5, // slightly longer for smoothness
    scrollTrigger: {
      trigger: ele,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      
    },
  });
});

// Animate middle image
gsap.from(imgg, {
  y: 200,
  opacity: 0,
  duration: 0.7, // slightly longer
  ease: "power2.out",
  scrollTrigger: {
    trigger: imgg,
    start: "top 80%",
    end: "top 20%",
    scrub: true,
     
  },
});