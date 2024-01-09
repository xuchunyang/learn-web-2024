console.log("01-09-play-video/main.js");

document.querySelectorAll("video").forEach(async (video) => {
  // 浏览器允许静音的视频自动播放
  video.muted = true;
  await video.play();
});
