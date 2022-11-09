const form = document.getElementById('form')
const n1 = document.getElementById('n1')
const n2 = document.getElementById('n2')
const n3 = document.getElementById('n3')
const n4 = document.getElementById('n4')

form.addEventListener("submit", (e) => {
    e.preventDefault()

    checkInputs()
})  

function checkInputs() {
    const numberOneValue = numberOne1.value.trim()
    const numberTwoValue = numberTwo.value.trim()
    const numberThreeValue = numberThree.value.trim()
    const numberFourValue = numberFour.value.trim()

    if (numberOneValue === '') {
        // mostrar o erro
        // adicionar a classe error
        errorValidation(numberOneValue, 'Preencha esse campo')
    }else {
        // adicionar a classe success
    }
}

function errorValidation(input, message) {
    const formControl = input.parentElement;

    formControl.className = 'form-control error'
}
