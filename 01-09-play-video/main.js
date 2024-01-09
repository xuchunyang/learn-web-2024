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

(async () => {
  video.muted = true;
  video.loop = true;
  await video.play();
})();
