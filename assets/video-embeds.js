// A file:// page cannot send the HTTP Referer required by YouTube embeds.
// Keep its linked preview; enable the player only when the page is served over HTTP.
if (location.protocol === "http:" || location.protocol === "https:") {
  document.querySelectorAll(".video-frame[data-video-id]").forEach((frame) => {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${frame.dataset.videoId}`;
    iframe.title = frame.dataset.videoTitle;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    frame.replaceChildren(iframe);
  });
}
