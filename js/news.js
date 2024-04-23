let preBtn = document.querySelector(".btnPre");
let nextBtn = document.querySelector(".btnNext");
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
  infinite: false,
});
$(".slider-nav").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  arrows: true,
  infinite: false,
  prevArrow: preBtn,
  nextArrow: nextBtn,
});
