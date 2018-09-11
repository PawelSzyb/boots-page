$("#slick-slider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  appendDots: $(".slider-container_dots")
});

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slick-slider");
  window.onscroll = () => {
    const currPosition = window.pageYOffset;
    slider.style.opacity = 1 - currPosition / 1000;
  };
});
