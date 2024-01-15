"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts

  const body = document.body; // переменная body

  // Запрет перетаскивания ссылок и картинок
  document.querySelectorAll("img, a").forEach((element) => {
    element.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });
  });

  // /* ------------------- btnScrollTop -------------------- */
  const btnScrollTop = document.getElementById("btnScrollTop");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      btnScrollTop.classList.add("show");
    } else {
      btnScrollTop.classList.remove("show");
    }
  }

  btnScrollTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  //!Плавный скролл по якорным ссылкам
  // const anchors = document.querySelectorAll('a[href*="#"]');
  // anchors.forEach((anchor) => {
  //   anchor.addEventListener("click", (event) => {
  //     event.preventDefault();

  //     const blockID = anchor.getAttribute("href").substring(1);

  //     document.getElementById(blockID).scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   });
  // });

  //  Submenu Open
  const itemSubmenu = document.querySelectorAll(".item-submenu");

  itemSubmenu.forEach((item) => {
    const submenu = item.querySelector(".submenu");
    const submenuLinks = item.querySelectorAll(".menu__link");

    item.addEventListener("click", () => {
      if (submenu.classList.contains("active")) {
        submenu.style.maxHeight = "0";
        submenu.classList.remove("active");
        submenuLinks.forEach((link) => link.classList.remove("active"));
      } else {
        const height = submenu.scrollHeight + "px";
        submenu.style.maxHeight = height;
        submenu.classList.add("active");
        submenuLinks.forEach((link) => link.classList.add("active"));
      }
    });
  });

  /* ------------------- Panel Nav -------------------- */
  const pageBody = document.querySelector(".page__body");
  const btnBurger = document.querySelector(".header__burger");
  const nav = document.querySelector(".panel-nav");
  const navOverlay = document.querySelector(".panel-nav__overlay");

  function toggleLockScroll() {
    pageBody.classList.toggle("lock-scroll");
  }

  if (nav && btnBurger) {
    btnBurger.addEventListener("click", () => {
      btnBurger.classList.toggle("active");
      nav.classList.toggle("active");
      navOverlay.classList.toggle("active");
      toggleLockScroll();
    });

    navOverlay.addEventListener("click", () => {
      toggleLockScroll();
      nav.classList.remove("active");
      btnBurger.classList.remove("active");
      navOverlay.classList.remove("active");
    });

    window.addEventListener("click", (e) => {
      const target = e.target;
      if (
        !target.closest(".panel-nav") &&
        !target.closest(".header__burger") &&
        !target.closest(".nav-overlay") &&
        nav.classList.contains("active")
      ) {
        toggleLockScroll();
        nav.classList.remove("active");
        btnBurger.classList.remove("active");
        navOverlay.classList.remove("active");
      }
    });
  }

  /* ------------------- Close system-message -------------------- */
  const closeMessage = document.querySelectorAll(".system-message__close");

  // Для каждого крестика закрытия назначаем обработчик события на клик
  closeMessage.forEach((button) => {
    button.addEventListener("click", function () {
      const parentMessage = button.closest(".system-message");
      parentMessage.style.display = "none";
    });
  });

  /* ------------------- Вывод текущей даты -------------------- */
  $(document).ready(function () {
    const currentDate = new Date();
    const time = currentDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString("en-US", { month: "long" });

    const formattedDate = `${time}, ${day} ${month}`;

    $(".today-date__info").text(formattedDate);
  });

  /* ------------------- AirDatepicker -------------------- */
  $(document).ready(function () {
    const inputDate = $(".input-date");

    if (!inputDate.val()) {
      let currentDate = new Date().toISOString().slice(0, 10);
      inputDate.attr("placeholder", currentDate);
    }

    inputDate.datepicker({
      language: "en",
      autoClose: true,
      minDate: new Date(),
      dateFormat: "yyyy-mm-dd",
      onSelect: function (fd, date) {},
    });
  });

  /* ------------------- Select Item -------------------- */
  const checkboxesItem = document.querySelectorAll(".check__input");
  const selectAllCheckbox = document.querySelector(".check.select-all input");
  const checkboxesItemSelect = document.querySelectorAll(
    ".select-item .check__input"
  );

  checkboxesItem.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const photoItem = this.closest(".select-item");
      if (this.checked) {
        photoItem.style.border = "3px solid #2BAEEB";
      } else {
        photoItem.style.border = "none";
      }
    });
  });

  selectAllCheckbox.addEventListener("change", function () {
    checkboxesItemSelect.forEach((checkbox) => {
      checkbox.checked = this.checked;
      const photoItem = checkbox.closest(".select-item");
      if (this.checked) {
        photoItem.style.border = "3px solid #2BAEEB";
      } else {
        photoItem.style.border = "none"; // Убираем рамку, если чекбокс не выбран
      }
    });
  });

  checkboxesItemSelect.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (!this.checked) {
        selectAllCheckbox.checked = false;
      }
    });
  });

  //! End Scripts
});
