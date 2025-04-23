let boxes = document.querySelectorAll(".box")
let msgcontainer = document.querySelector(".msgcontainer")
let msg = document.querySelector("#msg")
let btn1 = document.querySelector("#btn1")
let btn = document.querySelector("#btn2");
let turnO = true;
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 7],
  [6, 7, 8]
]
const count = 0;
const nowinner = () =>{}

const resetgame = () =>{
  turnO = true;
  enbl();
  msgcontainer.classList.add("hide")
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("button was clicked")
    if (turnO) {
      box.innerText = "O"
      turnO = false;
    }
    else {
      box.innerText = "X"
      turnO = true;
    }
    
    winner();
       
  })
})

const dis = () =>{
  for(let box of boxes){
    box.disabled = true;

  }
}

const enbl = () =>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";

  }
}

const showwinner = (win) => {
  msg.innerText = `congratulations,winner is ${win}`;
  msgcontainer.classList.remove("hide")
  dis();
}

const winner = () => {
  for (let pattern of winpattern) {
    let posval1 = boxes[pattern[0]].innerText;
    let posval2 = boxes[pattern[1]].innerText;
    let posval3 = boxes[pattern[2]].innerText;
    if (posval1 != "" && posval2 != "" && posval3 != "") {
      if (posval1 === posval2 && posval2 === posval3) {
        console.log("winner is" + posval1)
        showwinner(posval1);
      }
    }
  }
}

btn1.addEventListener("click",resetgame)
btn.addEventListener("click",resetgame)

