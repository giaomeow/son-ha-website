let navLinks = document.querySelectorAll(".section-table-crop .nav-link");
console.log(navLinks);
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    let type = navLink.getAttribute("crop-type");
    let img = document.querySelector(".section-table-crop .tab-pane img");
    switch (type) {
      case "cassia":
        img.src = "./assets/img/sourcing-page/crop-1.jpeg";
        break;
      case "pepper":
        img.src = "./assets/img/sourcing-page/crop-2.jpeg";
        break;
      case "anise":
        img.src = "./assets/img/sourcing-page/crop-3.jpeg";
        break;
      default:
        img.src = "./assets/img/sourcing-page/crop-1.jpeg";
        break;
    }
  });
});
