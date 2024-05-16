(function ($bs) {
  const CLASS_NAME = "has-child-dropdown-show";
  $bs.Dropdown.prototype.toggle = (function (_orginal) {
    return function () {
      document.querySelectorAll("." + CLASS_NAME).forEach(function (e) {
        e.classList.remove(CLASS_NAME);
      });
      let dd = this._element
        .closest(".dropdown")
        .parentNode.closest(".dropdown");
      for (; dd && dd !== document; dd = dd.parentNode.closest(".dropdown")) {
        dd.classList.add(CLASS_NAME);
      }
      return _orginal.call(this);
    };
  })($bs.Dropdown.prototype.toggle);

  document.querySelectorAll(".dropdown").forEach(function (dd) {
    dd.addEventListener("hide.bs.dropdown", function (e) {
      if (this.classList.contains(CLASS_NAME)) {
        this.classList.remove(CLASS_NAME);
        e.preventDefault();
      }
      if (
        e.clickEvent &&
        e.clickEvent
          .composedPath()
          .some(
            (el) => el.classList && el.classList.contains("dropdown-toggle")
          )
      ) {
        e.preventDefault();
      }
      e.stopPropagation(); // do not need pop in multi level mode
    });
  });

  // for hover
  function getDropdown(element) {
    return $bs.Dropdown.getInstance(element) || new $bs.Dropdown(element);
  }

  document
    .querySelectorAll(".dropdown-hover, .dropdown-hover-all .dropdown")
    .forEach(function (dd) {
      dd.addEventListener("mouseenter", function (e) {
        let toggle = e.target.querySelector(
          ':scope>[data-bs-toggle="dropdown"]'
        );
        if (!toggle.classList.contains("show")) {
          getDropdown(toggle).toggle();
        }
      });
      dd.addEventListener("mouseleave", function (e) {
        let toggle = e.target.querySelector(
          ':scope>[data-bs-toggle="dropdown"]'
        );
        if (toggle.classList.contains("show")) {
          getDropdown(toggle).toggle();
        }
      });
    });
})(bootstrap);

document.addEventListener("DOMContentLoaded", function () {
  function toggleNavbarMethod() {
    if (window.innerWidth >= 1200) {
      document
        .querySelectorAll(".navbar .dropdown")
        .forEach(function (dropdown) {
          dropdown.addEventListener("mouseover", function () {
            let dropdownToggle = this.querySelector(".dropdown-toggle");
            let dropdownInstance = new bootstrap.Dropdown(dropdownToggle);
            dropdownInstance.show();
          });
          dropdown.addEventListener("mouseout", function () {
            let dropdownToggle = this.querySelector(".dropdown-toggle");
            let dropdownInstance = new bootstrap.Dropdown(dropdownToggle);
            dropdownInstance.hide();
          });
        });
    } else {
      document
        .querySelectorAll(".navbar .dropdown")
        .forEach(function (dropdown) {
          dropdown.removeEventListener("mouseover", function () {
            let dropdownToggle = this.querySelector(".dropdown-toggle");
            let dropdownInstance = new bootstrap.Dropdown(dropdownToggle);
            dropdownInstance.show();
          });
          dropdown.removeEventListener("mouseout", function () {
            let dropdownToggle = this.querySelector(".dropdown-toggle");
            let dropdownInstance = new bootstrap.Dropdown(dropdownToggle);
            dropdownInstance.hide();
          });
        });
    }
  }
  toggleNavbarMethod();
  window.addEventListener("resize", toggleNavbarMethod);
});
