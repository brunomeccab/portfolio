const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle') /*como há mais de um, este comando vai selecionar todos em uma lista de nós, simliar a um array*/

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    if(currentActive > circles.length){
        currentActive = circles.length   
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--
    if(currentActive < 1){
        currentActive = 1
    }
  update()
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length -1)/(circles.length-1)*100 + '%'

    if(currentActive === 1){
        prev.disabled = true
    } else if(currentActive === circles.length){
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
