const containerDiv = document.getElementById("container");
const changeWidthBtn = document.getElementById("button");
const containerSizePixels = 960; // total grid size stays constant across resizes

function createDivs(gridWidth) {
   if (gridWidth > 100) gridWidth = 100;
   const availableSize = containerDiv.clientWidth;
   const squareSize = (availableSize / gridWidth);

   for (let i = 0; i < Math.pow(gridWidth, 2); i++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("container-item");
      newDiv.style.width = `${squareSize}px`;
      newDiv.style.height = `${squareSize}px`;
      newDiv.addEventListener("mouseover", (event) => {
         event.target.style.backgroundColor = "grey";
      });
      containerDiv.appendChild(newDiv);
   }
}

function promptWidth() {
   containerDiv.replaceChildren();
   let gridWidth = prompt("Enter grid width");
   if(gridWidth == null) return;
   gridWidth = Number(gridWidth);
   if(gridWidth > 100) {
      createDivs(100);
      return;
   }
   createDivs(gridWidth);
}


createDivs(16);

changeWidthBtn.addEventListener("click", promptWidth);