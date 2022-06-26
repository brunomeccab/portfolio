const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active') /*qdo button da classe 
    'btn' clicado, input da classe 'search' recebe classe 'active'
    toggle: se não tem adiciona, se tem remove*/
input.focus()
})