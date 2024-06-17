const buttons = document.querySelectorAll("#filterButtons");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active__button"));

    button.classList.add("active__button");
  });
});
