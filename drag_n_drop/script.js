const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");
console.log(fill);

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}

function dragStart(event) {
    //this.className += " hold";
    console.log("asdads");
    event.dataTransfer.setData("text/plain", null);
}

function dragEnd() {
    
}

function dragOver() {
    
}

function dragEnter() {
    
}

function dragLeave() {
    
}

function dragStart() {
    
}

function dragDrop() {
    
}