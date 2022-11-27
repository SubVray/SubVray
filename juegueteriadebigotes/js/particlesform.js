/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 3,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#000",
      },
      shape: {
        type: ["image", "image2", "image3",'image4'],
        stroke: {
          width: 0,
          color: "#000",
        },
        polygon: {
          nb_sides: 4,
        },
        image: {
          src: "images/particles/image1.png",
        },
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 25,
        random: false,
        anim: {
          enable: false,
          speed: 10,
          size_min: 20,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 200,
        color: "#ffffff",
        opacity: 1,
        width: 2,
      },
      move: {
        enable: true,
        speed: 8,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "grab",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  }
);
