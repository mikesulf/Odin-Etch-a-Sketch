const container = document.querySelector("#container");

let x = 16;

function gridCreate(){
    container.innerHTML = ""
    for (i = 0; i < x; i++){
        let divRows = document.createElement('div');
            divRows.classList.add("divRows");
            container.appendChild(divRows);
        for (y = 0; y < x; y++){
            let rowCells = document.createElement('div');
                rowCells.classList.add("rowCells");
                rowCells.id = "row" + i + "cell" + y;
                divRows.appendChild(rowCells);
        }
    };
};

gridCreate();

document.querySelector("body").addEventListener("mouseover", (e) => {
    e.preventDefault();
    let cellId = e.target.id
    console.log(cellId)
        if (e.target.classList.contains("rowCells")){
            e.target.setAttribute("style", "background-color:black")
        }

});

document.addEventListener("click", function(){
    x = Number(prompt("Please enter a number between 1 and 100."));
    if (x > 100 || x < 1) {
        x = Number(prompt("Your entry was invalid, please enter a number between 1 and 100."))
    };
    gridCreate();
});