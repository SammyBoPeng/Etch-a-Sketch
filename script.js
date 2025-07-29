const grid_container = document.querySelector(".grid_container"); // find container as parent node

// rebuild button
const button = document.createElement("button");
button.textContent = "Rebuild Grid";
button.classList.add("button");
button.addEventListener("click",() => {
    const userInput = prompt("Please enter the number of squares per side for the new grid, between 1 and 100");
    if (userInput === null) {
        return; // if user cancels, do nothing
    }

    const grid_length = parseFloat(userInput);

    if (isNaN(grid_length) || !Number.isInteger(grid_length) || grid_length < 1 || grid_length > 100) {
        alert("Please enter an Integer between 1 and 100");
        return;
    }

    clear_grid();
    create_grid(grid_length);
})

document.querySelector(".wrapper").insertBefore(button, grid_container);


// create and clear grid
function create_grid(length) {
    for (let i=0; i<length; i++) {
        const grid_row = document.createElement("div"); //create row
        grid_row.classList.add("grid_row"); // add class to row
        for (let j=0; j<length; j++) {
            const grid_square = document.createElement("div");// create square
            grid_square.classList.add("grid_square"); // add class to square
            grid_row.appendChild(grid_square);// append square to row
        }
        grid_container.appendChild(grid_row); // append row to container
    }

}

function clear_grid() {
    while (grid_container.firstChild) {
        grid_container.removeChild(grid_container.firstChild);
    }
}


// first load
create_grid(4);