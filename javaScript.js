const container = document.querySelector("#container");
let x = 16;



for (i = 0; i < x; i++){
    let divRows = document.createElement('div')
        divRows.classList.add("divRows")
        container.appendChild(divRows)
    for (y = 0; y < x; y++){
        let rowCells = document.createElement('div')
            rowCells.classList.add("rowCells")
            rowCells.id = "row" + i + "cell" + y
            divRows.appendChild(rowCells)
    }
};



//credit for help figuring out how to add attributes to a listen event --> https://stackoverflow.com/questions/8318591/javascript-addeventlistener-using-to-create-a-mouseover-effect

document.querySelector("body").addEventListener("mouseover", (e) => {
    e.preventDefault();

    e.target.setAttribute("data-toggle-id", true);
    let cellId = e.target.id
    console.log(cellId)
})