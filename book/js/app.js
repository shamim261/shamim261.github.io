window.addEventListener("scroll", function () {
  var header = document.querySelector(".header_area");
  header.classList.toggle("sticky", scrollY > 0);
});
