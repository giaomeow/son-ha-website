$(document).ready(function () {
  // Banner Carousel
  $(".banner-carousel").slick({
    //   setting-name: setting-value
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><img src='./assets/icons/slider-arrow-left.png'/></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-left'><img src='./assets/icons/slider-arrow-right.png'/></button>",
  });
  // Traceable Carousel
  $(".traceable-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".traceable-carousel",
  });
  $(".traceable-carousel").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".traceable-for",
    centerPadding: 0,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          vertical: false,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          vertical: false,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 1000,
          slidesToScroll: 1,
          vertical: false,
        },
      },
    ],
  });

  //Certifications Carousel
  $(".certifications-carousel").slick({
    //   setting-name: setting-value
    autoplay: true,
    autoplaySpeed: 0,
    arrows: true,
    slidesToShow: 6,
    centerMode: true,
    centerPadding: "60px",
    slidesToScroll: 1,
    speed: 3000,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          autoplaySpeed: 1000,
          slidesToScroll: 1,
          vertical: false,
        },
      },
    ],
  });

  // Scroll to Product
  let aScrollMore = document.querySelectorAll(
    ".scroll-more,.banner-item .disc p"
  );
  let listProduct = document.getElementById("list-product");
  let header = document.querySelector("header");
  let getPosition = (ele) => {
    return ele.getBoundingClientRect().top + window.scrollY;
  };
  aScrollMore.forEach((item, index) => {
    item.addEventListener("click", () => {
      window.scrollTo(0, getPosition(listProduct) - header.offsetHeight);
    });
  });

  //  Hiệu ứng thay đổi font weight chữ cho card-title
  let listProductType = document.querySelectorAll(
    "#list-product .product-type-item"
  );
  listProductType.forEach((child) => {
    child.addEventListener("mouseover", () => {
      // Khi con chuột hover vào, đổi font-weight thành 400
      child.querySelector(".card-title").style.fontWeight = "400";
    });
  });
});

window.onload = () => {
  let div = document.createElement("div");
  div.classList.add("active_bar");
  let content = document.querySelector(".traceable-carousel .slick-list");
  // lấy chiều cao phần tử
  let heightFa = content.offsetHeight;
  console.log(heightFa);
  let child = document.querySelectorAll(
    ".traceable-carousel .slick-list .slick-track .slick-slide"
  );
  div.style.height = heightFa / child.length + "px";
  content.appendChild(div);

  document.addEventListener("click", (e) => {
    let index = Number(
      document
        .querySelector(
          ".traceable-carousel .slick-list .slick-track .slick-current"
        )
        .getAttribute("data-slick-index")
    );
    console.log(index * (heightFa / child.length));
    let topItem = index * (heightFa / child.length);
    div.style.top = topItem + "px";
  });
};

$(document).ready(function () {
  function fixedHeader() {
    // Global variables
    var offset = 25;

    // Scroll function
    $(window).scroll(function () {
      // Where the magic happens
      if (window.pageYOffset > offset) {
        $("header").addClass(" fixed");
        $(".content").addClass(" content-top");
      }
    });
  }
  fixedHeader();
});
