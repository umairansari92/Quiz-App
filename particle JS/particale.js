tsParticles.load("tsparticles", {
  fullScreen: { enable: true },
  background: {
    color: "#000000"
  },
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: "#C0C0C0"
    },
    shape: {
      type: ["circle"]
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: { min: 3, max: 5 }
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: {
        default: "bounce"
      }
    },
     collisions: {
      enable: true
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      },
      // onClick: {
      //   enable: true,
      //   mode: "push"
      // },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100
      },
      // push: {
      //   quantity: 4
      // }
    }
  },
  detectRetina: true
});