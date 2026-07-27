const container = document.querySelector("#container");
let x = 16;

for (i = 0; i < x; i++){
    let divRows = document.createElement('div')
        divRows.classList.add("divRows")
        container.appendChild(divRows)
    for (y = 0; y < x; y++){
        let rowCells = document.createElement('div')
            rowCells.classList.add("rowCells")
            divRows.appendChild(rowCells)
    }
}

// // credit to https://stackoverflow.com/questions/3198540/appending-elements-to-dom-in-a-loop-structure
// let rows = document.getElementsByClassName('divRows');

// for (i = 0; len = rows.len; i<len; i++){
//     let rowCells = document.createElement('div')
//         rowCells.classList.add("rowCells")
//         divRows.appendChild(rowCells)
// }