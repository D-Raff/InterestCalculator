// function

// variable for the button
let btnCalc = document.querySelector('[data-calc]')

function Calculate() {
    // input variable
    let input = +document.querySelector('[data-amount]').value
    // interest variable
    let interest = +document.querySelector('[data-int]').value
    // output variable
    let output = document.querySelector('[data-res]')

    let result = input * (interest / 100)

    output.textContent = `R${result} is the interest total`
}

btnCalc.addEventListener('click', Calculate)