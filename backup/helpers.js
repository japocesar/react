import { TweenMax } from "gsap/gsap-core";

export const banner = () => {
    TweenMax.to(".pContent", {
        xPercent: 1,
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".pSection",
          // start: "top bottom", // the default values
          // end: "bottom top",
          scrub: true
        }, 
      });

      TweenMax.to(".pContent1", {
        xPercent: -150,
        y: 50,
        // yPercent: 200,
        ease: "none",
        scrollTrigger: {
          trigger: ".pSection",
          // start: "top bottom", // the default values
          // end: "bottom top",
          scrub: true
        }, 
      });
      
      TweenMax.to(".pImage", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".pSection",
          // start: "top bottom", // the default values
          // end: "bottom top",
          scrub: true
        }, 
      });
}