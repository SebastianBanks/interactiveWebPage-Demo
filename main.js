let count = 0
const counterText = document.querySelector("#counter")
const buttons = document.querySelectorAll(".theme-buttons")

const increase = () => {
    count += 1
    counterText.textContent = count
    console.log(count)
}

const decrease = () => {
    count -= 1
    counterText.textContent = count
    console.log(count)
}

const reset = () => {
    count = 0
    counterText.textContent = count
    console.log(count)
}

const selectTheme = (evt) => {
    const theme = evt.target.textContent

    const body = document.querySelector('body')
    const main = document.querySelector('main')

    main.className = theme
    body.className = theme

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", selectTheme)
}

const plusButton = document.querySelector("#plus-btn")
const minusButton = document.querySelector("#minus-btn")
// getElementById does the same thing but since it's getting
// it by it's id you don't have to include the #
const resetButton = document.getElementById("reset-btn")

// make sure it's not invoked
plusButton.addEventListener("click", increase)
minusButton.addEventListener("click", decrease)
resetButton.addEventListener("click", reset)



