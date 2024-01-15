"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts

  // Open filter in mobile
  const mobFilter = document.querySelector(".mob-selectfilter");
  const contentFilter = document.querySelector(".content-filter");

  mobFilter.addEventListener("click", () => {
    mobFilter.classList.toggle("open");
    contentFilter.classList.toggle("active");
  });

  //! End Scripts
});
