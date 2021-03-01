$(document).ready(function () {
  // First pane to be open
  let firstContent = document.querySelectorAll(".single")[0];
  firstContent.classList.add("content-active");

  let contentList = Array.from(document.querySelectorAll(".single"));

  $("#purpose").on("change", function () {
    console.log($("#recruiting"));
    for (let i = 0; i < contentList.length; i++) {
      if (this.value == i + 1) {
        contentList.map((content) => {
          content.classList.remove("content-active");
        });
        contentList[i].classList.add("content-active");
      }
    }
  });
});
