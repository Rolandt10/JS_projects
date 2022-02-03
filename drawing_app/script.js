const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeElement = document.getElementById("size");
const colorElement = document.getElementById("color");
const eraserBtn = document.getElementById("eraser");
const clearElement = document.getElementById("clear");
const ctx = canvas.getContext("2d");

let size = 10;
let isPressed = false;
let isEraserEnabled = false;
let color = "black";
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
    drawCircle(x, y);
});

canvas.addEventListener("mouseup", (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true);
    ctx.fillStyle = isEraserEnabled ? "#f5f5f5" : color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = isEraserEnabled ? "#f5f5f5" : color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

function updateSizeOnScreen() {
    sizeElement.innerText = size;
}

increaseBtn.addEventListener("click", () => {
    size += 5;
    if (size > 50) {
        size = 50;
    }
    updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
    size -= 5;
    if (size < 5) {
        size = 5;
    }
    updateSizeOnScreen();
});

clearElement.addEventListener("click", () => ctx.clearRect(0, 0, canvas.width, canvas.height));

eraserBtn.addEventListener("click", () => {
    if (isEraserEnabled) {
        isEraserEnabled = false;
        eraserBtn.style.backgroundColor = "#fff";
    } else {
        isEraserEnabled = true;
        eraserBtn.style.backgroundColor = "green";
    }
});

colorElement.addEventListener("change", (e) => {
    color = e.target.value;
});