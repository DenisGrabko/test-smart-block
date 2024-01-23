const fetchFigures = async () => {
  try {
    const response = await fetch("./list.json");
    const data = await response.json();
    return data.figures;
  } catch (error) {
    console.error("Error fetching figures:", error);
    return [];
  }
};

const figuresList = document.getElementById("list");

window.addEventListener("DOMContentLoaded", async (event) => {
  event.preventDefault();

  try {
    const figures = await fetchFigures();
    console.log(figures);
    if (figures.length === 0) {
      console.log("Array is empty");
    } else {
      displayArray(figures);
    }
  } catch (error) {
    console.error("Error display figures:", error);
  }
});

function displayArray(figures) {
  console.log(figures);
  figures.forEach((figure) => {
    const displayFigure = document.createElement("li");
    displayFigure.className = "figureItem";
    displayFigure.style.width = figure.width + "px";
    displayFigure.style.height = figure.height + "px";

    if (figuresList) {
      figuresList.appendChild(displayFigure);
    } else {
      console.error("Error: figuresList is null");
    }
  });
}
