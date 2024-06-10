const listMap = {
  cassia: [
    {
      name: "Ha Giang",
      ta: "",
      op: "",
      ht: "",
      id: "name1",
    },
    {
      name: "Lao Cai",
      ta: "",
      op: "",
      ht: "",
      id: "name2",
    },
    {
      name: "Yen Bai",
      ta: "",
      op: "",
      ht: "",
      id: "name3",
    },
    {
      name: "Thanh Hoa",
      ta: "",
      op: "",
      ht: "",
      id: "name4",
    },
    {
      name: "Quang Nam",
      ta: "",
      op: "",
      ht: "",
      id: "name5",
    },
    {
      name: "Tuyen Quang",
      ta: "",
      op: "",
      ht: "",
      id: "name6",
    },
    {
      name: "Phu Tho",
      ta: "",
      op: "",
      ht: "",
      id: "name7",
    },
    {
      name: "Hoa Binh",
      ta: "",
      op: "",
      ht: "",
      id: "name8",
    },
    {
      name: "Quang Ngai",
      ta: "",
      op: "",
      ht: "",
      id: "name9",
    },
  ],
  cassiaAndStar: [
    {
      name: "Bac Kan",
      ta: "",
      op: "",
      ht: "",
      id: "name1",
    },
    {
      name: "",
      ta: "",
      op: "",
      ht: "",
      id: "name2",
    },
    {
      name: "",
      ta: "",
      op: "",
      ht: "",
      id: "name3",
    },
    {
      name: "",
      ta: "",
      op: "",
      ht: "",
      id: "name4",
    },
    {
      name: "",
      ta: "",
      op: "",
      ht: "",
      id: "name5",
    },
    {
      name: "Lang Son",
      ta: "",
      op: "",
      ht: "",
      id: "name6",
    },
    {
      name: "Quang Ninh",
      ta: "",
      op: "",
      ht: "",
      id: "name7",
    },
    {
      name: "",
      ta: "",
      op: "",
      ht: "",
      id: "name8",
    },
    {
      name: "",
      ta: "",
      op: "",
      ht: "",
      id: "name9",
    },
  ],
  pepper: [
    {
      name: "Quang Tri",
      ta: "2,000/1,600",
      op: "2,000",
      ht: "March",
      id: "name1",
    },
    {
      name: "Dak Nong",
      ta: "31,200/28,200",
      op: "68,200",
      ht: "January - March",
      id: "name2",
    },
    {
      name: "Binh Phuoc",
      ta: "13,538/12,050",
      op: "13,300",
      ht: "January - March",
      id: "name5",
    },
    {
      name: "Dong Nai",
      ta: "8,900/8,010",
      op: "14,300",
      ht: "March",
      id: "name4",
    },
    {
      name: "Other Areas",
      ta: "10,800/9,200",
      op: "14,300",
      ht: "March",
      id: "name3",
    },
    {
      name: "Gia Lai",
      ta: "10,800/9,200",
      op: "14,300",
      ht: "March",
      id: "name6",
    },
    {
      name: "Dak Lak",
      ta: "30,800/26,300",
      op: "59,650",
      ht: "March",
      id: "name7",
    },
    {
      name: "Ba Ria - Vung Tau",
      ta: "8,020/7,200",
      op: "7,920",
      ht: "March",
      id: "name8",
    },
  ],
  star: [
    {
      name: "",
      ta: "",
      op: "",
      ht: "",
      id: "name1",
    },
    {
      name: "",
      ta: "",
      op: "",
      ht: "",
      id: "name2",
    },
    {
      name: "",
      ta: "",
      op: "",
      ht: "",
      id: "name3",
    },
    {
      name: "",
      ta: "",
      op: "",
      ht: "",
      id: "name4",
    },
    {
      name: "",
      ta: "",
      op: "",
      ht: "",
      id: "name5",
    },
    {
      name: "",
      ta: "",
      op: "",
      ht: "",
      id: "name6",
    },
    {
      name: "",
      ta: "",
      op: "",
      ht: "",
      id: "name7",
    },
    {
      name: "Lang Son",
      ta: "",
      op: "",
      ht: "",
      id: "name8",
    },
    {
      name: "",
      ta: "",
      op: "",
      ht: "",
      id: "name9",
    },
  ],
};

$(document).ready(function () {
  let tabsListItem = document.querySelectorAll(
    ".section-raw-material-map .tab-maps .tabs-list li"
  );
  let itemSites = document.querySelectorAll(
    ".section-raw-material-map .tab-maps .map-img .item-site"
  );

  let cassiaMap = document.querySelector(
    ".section-raw-material-map .tab-maps .tabs-list li[data='cassia']"
  );

  let cassiaAndStarMap = document.querySelector(
    ".section-raw-material-map .tab-maps .tabs-list li[data='cassiaAndStar']"
  );

  let pepperMap = document.querySelector(
    ".section-raw-material-map .tab-maps .tabs-list li[data='pepper']"
  );

  let starMap = document.querySelector(
    ".section-raw-material-map .tab-maps .tabs-list li[data='star']"
  );

  let mapImg = document.querySelector(".section-raw-material-map .map-img");

  function returnHTML(id, item) {
    if (
      id === "name1" ||
      id === "name2" ||
      id === "name3" ||
      id === "name4" ||
      id === "name5"
    ) {
      return `<div class="position-relative">
        <div class="site">
          <p class="name">${item?.name}</p>
          <p class="ta">Total Area/harvested (ha): ${item?.ta}</p>
          <p class="op">Output (tons): ${item?.op}</p>
          <p class="ht">Harvest time: ${item?.ht}</p>
        </div>
        <div class="line after right"></div>
      </div>`;
    } else {
      return `<div class="position-relative">
    <div class="site">
      <p class="name">${item.name}</p>
      <p class="ta">Total Area/harvested (ha): ${item.ta}</p>
      <p class="op">Output (tons): ${item.op}</p>
      <p class="ht">Harvest time: ${item.ht}</p>
    </div>
    <div class="line before left"></div>
  </div>`;
    }
  }

  function checkActive() {
    let tabsListItemActive = document.querySelectorAll(
      ".section-raw-material-map .tab-maps .tabs-list li.active"
    );
    if (window.innerWidth > 900) {
      // TH Khi tất cả đều active
      if (tabsListItemActive.length > 1) {
        itemSites.forEach((item) => {
          item.classList.add("d-none");
        });
        mapImg.setAttribute("mapData", "");
      }
      // TH Khi chỉ có cassia active
      else if (
        tabsListItemActive.length === 1 &&
        cassiaMap.classList.contains("active")
      ) {
        mapImg.setAttribute("mapData", "cassia");
        itemSites.forEach((item) => {
          item.classList.add("d-none");
        });
        listMap.cassia.forEach((item) => {
          // Tìm các thẻ có ID liên quan và gắn nội dung HTML
          let divId = document.getElementById(item.id);
          if (item.name) {
            divId.innerHTML = returnHTML(item.id, item);
            divId.classList.remove("d-none");
          } else {
            divId.classList.add("d-none");
          }
        });
      }
      // TH Khi chỉ có cassiaAndStar active
      else if (
        tabsListItemActive.length === 1 &&
        cassiaAndStarMap.classList.contains("active")
      ) {
        mapImg.setAttribute("mapData", "cassiaAndStar");
        itemSites.forEach((item) => {
          item.classList.add("d-none");
        });
        listMap.cassiaAndStar.forEach((item) => {
          // Tìm các thẻ có ID liên quan và gắn nội dung HTML
          let divId = document.getElementById(item.id);
          if (item.name) {
            divId.innerHTML = returnHTML(item.id, item);
            divId.classList.remove("d-none");
          } else {
            divId.classList.add("d-none");
          }
        });
      }
      // TH Khi chỉ có pepper active
      else if (
        tabsListItemActive.length === 1 &&
        pepperMap.classList.contains("active")
      ) {
        mapImg.setAttribute("mapData", "pepper");
        itemSites.forEach((item) => {
          item.classList.add("d-none");
        });
        listMap.pepper.forEach((item) => {
          // Tìm các thẻ có ID liên quan và gắn nội dung HTML
          let divId = document.getElementById(item.id);
          if (item.name) {
            divId.innerHTML = returnHTML(item.id, item);
            divId.classList.remove("d-none");
          } else {
            divId.classList.add("d-none");
          }
        });
      }
      // TH Khi chỉ có star active
      else if (
        tabsListItemActive.length === 1 &&
        starMap.classList.contains("active")
      ) {
        mapImg.setAttribute("mapData", "star");
        itemSites.forEach((item) => {
          item.classList.add("d-none");
        });
        listMap.star.forEach((item) => {
          // Tìm các thẻ có ID liên quan và gắn nội dung HTML
          let divId = document.getElementById(item.id);
          if (item.name) {
            divId.innerHTML = returnHTML(item.id, item);
            divId.classList.remove("d-none");
          } else {
            divId.classList.add("d-none");
          }
        });
      }
    } else {
      if (tabsListItemActive.length > 1) {
        mapImg.querySelector("img").src =
          "./../assets/img/sourcing-page/map.png";
      }
      // TH Khi chỉ có cassia active
      else if (
        tabsListItemActive.length === 1 &&
        cassiaMap.classList.contains("active")
      ) {
        mapImg.querySelector("img").src =
          "./../assets/img/sourcing-page/cassia-map.png";
      }
      // TH Khi chỉ có cassiaAndStar active
      else if (
        tabsListItemActive.length === 1 &&
        cassiaAndStarMap.classList.contains("active")
      ) {
        mapImg.querySelector("img").src =
          "./../assets/img/sourcing-page/cassia-and-star-map.png";
      } // TH Khi chỉ có pepper active
      else if (
        tabsListItemActive.length === 1 &&
        pepperMap.classList.contains("active")
      ) {
        mapImg.querySelector("img").src =
          "./../assets/img/sourcing-page/pepper.png";
      } else {
        mapImg.querySelector("img").src =
          "./../assets/img/sourcing-page/star-map.png";
      }
    }
  }
  checkActive();

  // Nghe hành động click
  tabsListItem.forEach((item) => {
    item.addEventListener("click", function (e) {
      let tabsListItemActive = document.querySelectorAll(
        ".section-raw-material-map .tab-maps .tabs-list li.active"
      );

      // TH bản thân nó có active & tabsListItemActive chỉ có 1 active
      if (
        e.currentTarget.classList.contains("active") &&
        tabsListItemActive.length === 1
      ) {
        tabsListItem.forEach((item) => {
          item.classList.add("active");
        });
      }
      // TH bản thân ko có active & tabsListItemActive > 1 => đang false
      else if (tabsListItemActive.length >= 1) {
        tabsListItemActive.forEach((item) => {
          if (item !== e.currentTarget) {
            item.classList.remove("active");
          }
        });
        e.currentTarget.classList.add("active");
      }

      // Check all
      checkActive();
    });
  });
});
