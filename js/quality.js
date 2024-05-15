$(document).ready(function () {
  // Laboratory Carousel
  $(".section-laboratory-carousel").slick({
    dots: false,
    infinite: false,
    speed: 500,
    fade: true,
    cssEase: "ease",
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'><rect x='29.5' y='29.5' width='29' height='29' rx='14.5' transform='rotate(-180 29.5 29.5)' stroke='white'/><path d='M9.6002 16.1998L9.6002 14.3998L22.2002 14.3998L22.2002 16.1998L9.6002 16.1998Z' fill='white'/><path d='M7.8002 15.223L13.2613 9.7619L14.4748 10.9754L10.2271 15.223L14.4748 19.4706L13.2613 20.6841L7.8002 15.223Z' fill='white'/></svg></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-left'><svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'><rect x='0.5' y='0.5' width='29' height='29' rx='14.5' stroke='white'/><path d='M20.3998 13.8002V15.6002H7.7998V13.8002H20.3998Z' fill='white'/><path d='M22.1998 14.777L16.7387 20.2381L15.5252 19.0246L19.7729 14.777L15.5252 10.5294L16.7387 9.31592L22.1998 14.777Z' fill='white'/></svg></button>",
  });
});