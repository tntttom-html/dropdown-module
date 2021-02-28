$(document).ready(function () {
  // First pane to be open
  let firstContent = document.querySelectorAll(".single")[0];
  firstContent.classList.add("content-active");

  let contentList = Array.from(document.querySelectorAll(".single"));

  $("#purpose").on("change", function () {
    console.log($("#recruiting"));
    if (this.value == "recruiting") {
      contentList.map((content) => {
        content.classList.remove("content-active");
      });
      $("#recruiting")[0].classList.add("content-active");
    } else if (this.value == "onboarding") {
      contentList.map((content) => {
        content.classList.remove("content-active");
      });
      $("#onboarding")[0].classList.add("content-active");
    } else if (this.value == "permits") {
      contentList.map((content) => {
        content.classList.remove("content-active");
      });
      $("#permits")[0].classList.add("content-active");
    }
  });
});
