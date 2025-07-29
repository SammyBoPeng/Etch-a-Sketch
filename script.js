const grid_container = document.querySelector(".grid_container"); // find container as parent node

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

create_grid(4);