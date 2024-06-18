const buttons = document.querySelectorAll("#filterButtons");

const fetchData = async () => {
  try {
    const response = await fetch("./dat.json");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    data.forEach((entry) => console.log(entry));
  } catch (error) {
    console.log("Error fetching JSON:", error);
  }
};

fetchData();

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active__button"));

    button.classList.add("active__button");
  });
});
