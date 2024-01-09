const video = document.querySelector("video");

const events = [
  "loadedmetadata",
  "loadeddata",
  "canplay",
  "canplaythrough",
  "play",
  "playing",
  "pause",
  "ended",
  "emptied",
  "stalled",
  "waiting",
  "error",
];
for (const event of events) {
  video.addEventListener(event, () => {
    console.log(event);
  });
}

video.muted = true;
video.loop = true;

document.addEventListener("DOMContentLoaded", function () {
  let videoPlayed = false; // Flag to ensure video plays only once

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !videoPlayed) {
          video.play();
          videoPlayed = true; // Update the flag after playing
          observer.unobserve(entry.target); // Stop observing after playing
        }
      });
    },
    { threshold: 0.0 },
  ); // Adjust threshold as needed

  observer.observe(video);
});
