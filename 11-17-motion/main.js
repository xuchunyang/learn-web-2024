import { animate, inView } from "motion";

const numberAnimation = animate(0, 100, {
  // duration: 0.3,
  onUpdate: (latest) => console.log(latest),
});

console.log("numberAnimation's Duration is", numberAnimation.duration);

// Animate #box1 to right
const animation = animate(
  "#box1",
  {
    // background color might not be supported by hardware acceleration
    // backgroundColor: "rgb(255, 0, 0)",
    opacity: 1,
    // transform: "translateX(200px)",
    // x: 200,
    x: [0, 100, 200],
    // filter: "blur(1px)",
  },
  {
    duration: 3,
    repeat: 3,
    onRepeat: (count) => {
      console.log(count);
    },
    onUpdate: (latest) => {
      console.log(latest);
    },
    onPlay: () => {
      console.log("Animation started");
    },
    onStop: () => {
      console.log("Animation stopped");
    },
    onComplete: () => {
      console.log("Animation completed");
    },
  },
);

animation.stop();
// animation.play();

const setupBox2Animation = () =>
  inView("#box2", (info) => {
    console.log(info);
    animate(
      info.target,
      {
        opacity: [0, 1],
        transform: ["translateX(200px)", "translateX(0)"],
      },
      {
        duration: 1,
      },
    );
    // setupBox2Animation();
  });

setupBox2Animation();
