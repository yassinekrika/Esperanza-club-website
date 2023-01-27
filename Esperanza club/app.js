const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

document.querySelector("h1").addEventListener('click', effect)

function effect(e) {
    let iterations = 0
    const interval = setInterval(() => {
        e.target.innerText = e.target.innerText.split("")
        .map((letter, index) => {
            if (index < iterations){
                return e.target.dataset.value[index]
            }
            return letters[Math.floor(Math.random() * 26)]
        }).join("")

        if (iterations >= e.target.dataset.value.length) clearInterval(interval)
        
        iterations += 1 / 3
    }, 30)
   
}

window.onload = (event) => {
    document.querySelector("h1").click()
}