const colorOpts = document.querySelectorAll(".color-opt")
const ranColorBox = document.querySelector(".randomcol-box")
const statusDisplay = document.querySelector(".status-display")
const scoreDisplay = document.querySelector(".score-display")
const resetBtn = document.querySelector(".reset-btn")
let score = 0;
let colors = [];

resetBtn.addEventListener("click", () => {
    score = 0
    scoreDisplay.textContent = score
    statusDisplay.textContent = ""
    reset()
})
generateColorOptions()
assignColors()
checkColor()

function generateColorOptions() {
    for (let i = 0; i < colorOpts.length; i++) {
        let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
        let hexno = "#";
        for (let i = 0; i < 6; i++) {
            newhex = hex[Math.floor(Math.random() * hex.length)]
            hexno += newhex
        }
        colors.push(hexno)
    }
    console.log(colors)
}
function assignColors() {
    colors.forEach((color, index) => {
        colorOpts[index].style.backgroundColor = color;
        colorOpts[index].setAttribute("data-color", color)
    })
}
function generateRandomColorBox() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    ranColorBox.style.backgroundColor = randomColor
    return randomColor
}
function checkColor() {
    colorOpts.forEach((colorOpt) => {
        colorOpt.addEventListener("click", (e) => {
            if (e.target.dataset.color === pickedColor) {
                let newscore = score += 1
                scoreDisplay.textContent = newscore
                statusDisplay.textContent = "Correct Match!"
                statusDisplay.style.color = "green"
                reset()
            } else {
                statusDisplay.textContent = "Wrong Match, Try Again"
                statusDisplay.style.color = "red"
                statusDisplay.classList.add("fade")
                e.target.classList.add("fade")
            }
        })
    })
}
let pickedColor = generateRandomColorBox()
function reset() {
    statusDisplay.classList.remove("fade")
    colorOpts.forEach(colorOpt => colorOpt.classList.remove("fade"))
    colors = []
    generateColorOptions()
    assignColors()
    pickedColor = generateRandomColorBox()
    checkColor
}