const buttons = document.querySelectorAll("#filterButtons");

const fetchData = async () => {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching JSON:", error);
  }
};

const filterDataOnClick = (data, filter) => {
  const filteredData = data.map(({ title, timeframes }) => ({
    title,
    current: timeframes[filter].current,
    previous: timeframes[filter].previous,
  }));

  return filteredData;
};

buttons.forEach((button) => {
  button.addEventListener("click", async () => {
    const data = await fetchData();
    const filter = button.getAttribute("data-filter");

    const filteredData = filterDataOnClick(data, filter);
    console.log(filteredData);

    buttons.forEach((btn) => btn.classList.remove("active__button"));

    button.classList.add("active__button");
  });
});
