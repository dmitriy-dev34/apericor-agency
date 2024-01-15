document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts

  /* ------------------- Custom Select -------------------- */
  const customSelects = document.querySelectorAll(".select");

  customSelects.forEach((select) => {
    const selectTrigger = select.querySelector(".select__trigger");
    const optionsList = select.querySelector(".select__options");
    const options = optionsList.querySelectorAll(".select__option");
    const selected = select.querySelector(".select__selected");

    selectTrigger.addEventListener("click", () => {
      select.classList.toggle("open");
    });

    document.addEventListener("click", (event) => {
      if (!select.contains(event.target)) {
        select.classList.remove("open");
      }
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        selected.textContent = option.textContent;
        options.forEach((otherOption) => {
          otherOption.classList.remove("selected");
        });
        option.classList.add("selected");
        select.classList.remove("open");
      });
    });
  });

  /* ------------------- Password Show -------------------- */
  const inputsPassword = document.querySelectorAll(".input-password");
  const passwordIcons = document.querySelectorAll(".password-icon");

  passwordIcons.forEach((icon, index) => {
    icon.addEventListener("click", function () {
      inputsPassword[index].type =
        inputsPassword[index].type === "password" ? "text" : "password";
      icon.classList.toggle("password-show");
    });
  });

  //!! End Scripts
});
