document.body.style.border = "5px solid red";

let userMute = false;

const muteButtonClass = ".ytp-mute-button";

const scrubberButtonClass = ".ytp-scrubber-button";

const htmlVideoClass = ".html5-main-video";

const adSkipButtonClass = ".ytp-ad-skip-button";

if ("undefined" == typeof window.jQuery) {
  console.log("JQ not found");
} else {
  const scrubberButtonObserver = new MutationObserver(function (
    mutations,
    mut
  ) {
    if (
      $(muteButtonClass).first().attr("data-title-no-tooltip") === "Mute" &&
      $(scrubberButtonClass).first().css("background-color") ===
        "rgb(255, 204, 0)"
    ) {
      $(muteButtonClass).first().click();
      $(htmlVideoClass).css("visibility", "hidden");
    }
    if (
      $(muteButtonClass).first().attr("data-title-no-tooltip") === "Unmute" &&
      $(scrubberButtonClass).first().css("background-color") ===
        "rgb(255, 0, 0)" &&
      !userMute
    ) {
      $(muteButtonClass).first().click();
      $(htmlVideoClass).css("visibility", "visible");
    }

    $(adSkipButtonClass).first().click();
  });

  scrubberButtonObserver.observe(document.querySelector(".ytp-progress-bar"), {
    attributes: true,
  });

  $(muteButtonClass).click(function (e) {
    if (e.which) userMute = true;
  });
}
