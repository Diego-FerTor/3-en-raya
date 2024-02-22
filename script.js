let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;

boxes.forEach(e =>{
    e.classList.add("boxX");
    e.innerHTML = ""
    e.addEventListener("click", ()=>{
        if(!isGameOver && e.innerHTML === ""){
            e.innerHTML = turn;
            checkWin();
            checkDraw();
            changeTurn(e);  
        }
    })
})

function changeTurn(e){
    if(isGameOver===false){
        if(turn === "X"){
            turn = "O";
            document.querySelector(".bg").style.left = "85px";
            document.querySelector(".bg").style.backgroundColor ="#00c8dd";
            boxes.forEach(e =>{ 
                e.classList.remove("boxX");
                e.classList.add("boxO");
            });
                e.style.backgroundColor ="#f79100";            
        }
        else{
            turn = "X";
            document.querySelector(".bg").style.left = "0";
            document.querySelector(".bg").style.backgroundColor ="#f79100";
            boxes.forEach(e =>{ 
                e.classList.remove("boxO");
                e.classList.add("boxX");
            });
                e.style.backgroundColor ="#00c8dd";
        }
    }
    
}

function checkWin(){
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for(let i = 0; i<winConditions.length; i++){
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;

        if(v0 != "" && v0 === v1 && v0 === v2){
            isGameOver = true;
            document.querySelector("#results").innerHTML = turn + " wins";
            document.querySelector("#play-again").style.display = "inline"
            document.querySelector("#play-again").style.backgroundColor = "#98c541";

            for(j = 0; j<3; j++){
                boxes[winConditions[i][j]].style.backgroundColor = "#98c541"
               
            }
        }
    }
}

function checkDraw(){
    if(!isGameOver){
        let isDraw = true;
        boxes.forEach(e =>{
            if(e.innerHTML === "") isDraw = false;
        })

        if(isDraw){
            isGameOver = true;
            document.querySelector("#results").innerHTML = "Draw";
            document.querySelector("#play-again").style.display = "inline"
        }
    }
}

document.querySelector("#play-again").addEventListener("click", ()=>{
    isGameOver = false;
    turn = "X";
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";
    document.querySelector(".bg").style.backgroundColor ="#f79100";

    boxes.forEach(e =>{
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        
    })
})