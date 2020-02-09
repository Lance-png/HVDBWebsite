document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, { duration: 100 });
});

var instance = M.Carousel.init({
  fullWidth: true
});
