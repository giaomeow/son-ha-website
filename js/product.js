$(document).ready(function () {
  // ============= RANGE OF PRODUCTS CAROUSEL =============
  $(".list-product-range").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 766.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><svg width='15' height='30' viewBox='0 0 15 30' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12.8714 0.00386792C13.3679 0.0028914 13.849 0.17688 14.2313 0.495632C14.4465 0.675125 14.6243 0.895569 14.7547 1.14433C14.8851 1.3931 14.9654 1.66529 14.991 1.94534C15.0167 2.22538 14.9872 2.50776 14.9042 2.77632C14.8213 3.04487 14.6865 3.29432 14.5075 3.51038L4.98811 14.9707L14.1676 26.4524C14.3441 26.6711 14.4759 26.9227 14.5554 27.1928C14.6349 27.463 14.6606 27.7462 14.631 28.0264C14.6014 28.3066 14.5171 28.5781 14.3828 28.8253C14.2486 29.0725 14.0671 29.2907 13.8488 29.4671C13.629 29.6617 13.3715 29.8086 13.0926 29.8983C12.8137 29.9881 12.5193 30.0189 12.228 29.9888C11.9367 29.9587 11.6548 29.8683 11.3998 29.7233C11.1449 29.5784 10.9224 29.3819 10.7465 29.1464L0.483382 16.3177C0.170853 15.9351 3.1787e-07 15.4552 3.61165e-07 14.96C4.04461e-07 14.4647 0.170853 13.9849 0.483383 13.6023L11.1077 0.77359C11.3209 0.514841 11.5917 0.310301 11.8981 0.176563C12.2045 0.0428274 12.538 -0.0163386 12.8714 0.00386792Z' fill='#D9D9D9'/></svg></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-left'><svg width='15' height='30' viewBox='0 0 15 30' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2.12861 29.9961C1.63213 29.9971 1.15098 29.8231 0.768693 29.5044C0.553532 29.3249 0.375677 29.1044 0.245311 28.8557C0.114946 28.6069 0.0346339 28.3347 0.00897424 28.0547C-0.0166854 27.7746 0.0128121 27.4922 0.0957766 27.2237C0.178741 26.9551 0.313541 26.7057 0.49246 26.4896L10.0119 15.0293L0.832441 3.54764C0.655936 3.32894 0.524127 3.07729 0.444589 2.80716C0.365052 2.53703 0.339354 2.25375 0.368973 1.9736C0.398592 1.69344 0.482942 1.42194 0.617179 1.1747C0.751415 0.927454 0.93289 0.709341 1.15117 0.532898C1.37102 0.338252 1.62848 0.191433 1.9074 0.101655C2.18632 0.0118778 2.48066 -0.018919 2.77197 0.0111961C3.06327 0.0413113 3.34525 0.131689 3.6002 0.276657C3.85514 0.421625 4.07756 0.618054 4.25348 0.853616L14.5166 13.6823C14.8291 14.0649 15 14.5448 15 15.04C15 15.5353 14.8291 16.0151 14.5166 16.3977L3.89226 29.2264C3.67909 29.4852 3.40831 29.6897 3.10189 29.8234C2.79546 29.9572 2.46202 30.0163 2.12861 29.9961Z' fill='#D9D9D9'/></svg></button>",
  });
  let productRangeItems = document.querySelectorAll(
    ".list-product-range .item"
  );
  var width = window.innerWidth;
  // ============= Animation cho  ".list-product-range .item" =============
  productRangeItems.length > 0 &&
    productRangeItems.forEach((item) => {
      let pTxt = item.querySelector("p.item-disc");
      let pTitle = item.querySelector("p.card-title");
      let pTxtHeigth = 0;
      let down = 0;
      const reset = () => {
        if (pTxt) {
          pTxtHeigth = pTxt.offsetHeight;
          down = pTxtHeigth + 6 + 24;
          pTxt.style.bottom = -pTxtHeigth + "px";
          pTxt.style.opacity = 0;
          pTitle.style.bottom = "24px";
        }
      };
      reset();
      if (width > 1024) {
        // Khi hover thì đoạn text mô tả (pTxt) sẽ trồi lên & opacity = 1
        item.addEventListener("mouseover", () => {
          pTxtHeigth = pTxt.offsetHeight;
          down = pTxtHeigth + 6 + 24;
          pTitle.style.bottom = down + "px";
          pTxt.style.opacity = 1;
          pTxt.style.bottom = "24px";
        });

        // Khi không hover thì đoạn text mô tả (pTxt) sẽ trôi xuống lên & opacity = 0
        item.addEventListener("mouseleave", () => {
          reset();
        });
      } else {
        pTxtHeigth = pTxt.offsetHeight;
        down = pTxtHeigth + 6 + 24;
        pTitle.style.bottom = down + "px";
        pTxt.style.opacity = 1;
        pTxt.style.bottom = "24px";
      }
    });

  // ============= LIST PRODUCT TYPE CAROUSEL =============
  $(".list-product-type").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><svg width='31' height='15' viewBox='0 0 31 15' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.65685 14.4351L0.29289 8.07118C-0.097634 7.68065 -0.097634 7.04749 0.29289 6.65696L6.65685 0.293C7.04738 -0.0975245 7.68054 -0.0975245 8.07106 0.293C8.46159 0.683525 8.46159 1.31669 8.07106 1.70721L3.41421 6.36407L31 6.36407L31 8.36407L3.41421 8.36407L8.07107 13.0209C8.46159 13.4114 8.46159 14.0446 8.07107 14.4351C7.68054 14.8257 7.04738 14.8257 6.65685 14.4351Z' fill='#444444'/></svg></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-left'><svg width='31' height='15' viewBox='0 0 31 15' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M24.3431 0.292893L30.7071 6.65686C31.0976 7.04738 31.0976 7.68054 30.7071 8.07107L24.3431 14.435C23.9526 14.8256 23.3195 14.8256 22.9289 14.435C22.5384 14.0445 22.5384 13.4113 22.9289 13.0208L27.5858 8.36396L0 8.36396V6.36396L27.5858 6.36396L22.9289 1.70711C22.5384 1.31658 22.5384 0.683417 22.9289 0.292893C23.3195 -0.097631 23.9526 -0.097631 24.3431 0.292893Z' fill='#444444'/></svg></button>",
  });
  const slickPrev = document.querySelector(".list-product .slick-prev");
  const slickNext = document.querySelector(".list-product .slick-next");
  const listDotsWidth = document.querySelector(
    ".list-product .slick-dots"
  ).offsetWidth;
  const slickSliderWidth = document.querySelector(
    ".list-product .slick-slider"
  ).offsetWidth;
  let widthPrev = slickSliderWidth / 2 - listDotsWidth / 2 - 24 * 2.2;
  let widthNext = slickSliderWidth / 2 + listDotsWidth / 2 + 24 * 1.2;
  slickPrev.style.left = widthPrev + `px`;
  slickNext.style.left = widthNext + `px`;

  // ============= Banner Page Content Carousel =============
  $(".content-slide").slick({
    dots: false,
    infinite: false,
    speed: 500,
    fade: true,
    cssEase: "ease",
    prevArrow:
      "<button type='button' class='slick-prev content-slide'><svg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2.6002 7.2003L2.6002 5.4003L15.2002 5.4003L15.2002 7.2003L2.6002 7.2003Z' fill='#b3b2b3'/><path d='M0.800195 6.22348L6.26129 0.762388L7.47475 1.97585L3.22712 6.22348L7.47475 10.4711L6.26129 11.6846L0.800195 6.22348Z' fill='#b3b2b3'/></svg></button>",
    nextArrow:
      "<button type='button' class='slick-next content-slide'><svg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13.3998 4.7997V6.5997L0.799805 6.5997L0.799805 4.7997L13.3998 4.7997Z' fill='#b3b2b3'/><path d='M15.1998 5.77652L9.73871 11.2376L8.52525 10.0241L12.7729 5.77652L8.52525 1.52889L9.73871 0.31543L15.1998 5.77652Z' fill='#b3b2b3'/></svg></button>",
  });
});
