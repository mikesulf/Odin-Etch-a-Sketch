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




document.querySelector("body").addEventListener("mouseover", (e) => {
    e.preventDefault();
    let cellId = e.target.id
    console.log(cellId)
    e.target.setAttribute("style", "background-color:black")
})