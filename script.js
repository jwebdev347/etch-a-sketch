const divContainer = document.querySelector(".container");
const btnGridLen = document.querySelector(".btn-grid-number");

let gridLen = 16;

function createNewGrid(gridLen) {
    let child = divContainer.lastElementChild;
    while (child) {
        divContainer.removeChild(child);
        child = divContainer.lastElementChild;
    }

    const squareSize = 960 / gridLen;
    const squareSizeStr = `${squareSize}px`;

    for (let y = 0; y < gridLen; y++) {
        const divFlexRect = document.createElement("div");
    
        divFlexRect.style.display = "flex";
    
        for (let x = 0; x < gridLen; x++) {
            const divSquare = document.createElement("div");
    
            divSquare.style.border = "1px solid black";
            divSquare.style.backgroundColor = "pink";
            divSquare.style.width = squareSizeStr;
            divSquare.style.height = squareSizeStr;
    
            divSquare.addEventListener("mouseenter", (e) => {
                divSquare.style.backgroundColor = "blue";
            })
    
            divSquare.addEventListener("mouseleave", () => {
                divSquare.style.backgroundColor = "pink";
            } )
    
            divFlexRect.appendChild(divSquare);
        }
        
        divContainer.appendChild(divFlexRect);
    }
}

createNewGrid(gridLen);

function userCreateNewGrid(e) {
    let inputVal = prompt("Enter the new grid size:");

    if (inputVal > 100) {
        inputVal = 100;
    }

    createNewGrid(inputVal);
}

btnGridLen.addEventListener("click", userCreateNewGrid)