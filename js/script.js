

document.getElementById("one").addEventListener("click",calculator);

function calculator() {
    
    clear()

    var primeirovalor = parseInt(prompt('Digite o primeiro valor: '))
    var operacao = prompt("Digite a operação: +, -, /, *, ^, ^-1")
    
    if (operacao == "^-1"){
        var resultado = Math.sqrt(primeirovalor)
        var equation = document.querySelector(".equation")
        equation.insertAdjacentHTML("afterbegin",`√ ${primeirovalor} =`)
        var result = document.querySelector(".result")
        result.insertAdjacentHTML("afterbegin", resultado)
        }

        else if (operacao == "/"){
            var segundovalor = parseInt(prompt('Digite o segundo valor: '))
            var resultado = primeirovalor / segundovalor
            var equation = document.querySelector(".equation")
            equation.insertAdjacentHTML("afterbegin",`${primeirovalor} ÷ ${segundovalor} =`)
            var result = document.querySelector(".result")
            result.insertAdjacentHTML("afterbegin", resultado)
            }

        else if (operacao == "*"){
            var segundovalor = parseInt(prompt('Digite o segundo valor: '))
            var resultado = primeirovalor * segundovalor
            var equation = document.querySelector(".equation")
            equation.insertAdjacentHTML("afterbegin",`${primeirovalor} x ${segundovalor} =`)
            var result = document.querySelector(".result")
            result.insertAdjacentHTML("afterbegin", resultado)
            }

        else if (operacao == "+"){
            var segundovalor = parseInt(prompt('Digite o segundo valor: '))
            var resultado = primeirovalor + segundovalor 
            var equation = document.querySelector(".equation")
            equation.insertAdjacentHTML("afterbegin",`${primeirovalor} + ${segundovalor} =`)
            var result = document.querySelector(".result")
            result.insertAdjacentHTML("afterbegin", resultado)
            }

        else if (operacao == "-"){
            var segundovalor = parseInt(prompt('Digite o segundo valor: '))
            var resultado = primeirovalor - segundovalor
            var equation = document.querySelector(".equation")
            equation.insertAdjacentHTML("afterbegin",`${primeirovalor} - ${segundovalor} =`)
            var result = document.querySelector(".result")
            result.insertAdjacentHTML("afterbegin", resultado)
            }

        else if (operacao == "^"){
            var segundovalor = parseInt(prompt('Digite o segundo valor: '))
            var resultado = Math.pow(primeirovalor, segundovalor)
            var equation = document.querySelector(".equation")
            equation.insertAdjacentHTML("afterbegin",`${primeirovalor} ^ ${segundovalor} =`)
            var result = document.querySelector(".result")
            result.insertAdjacentHTML("afterbegin", resultado)
            }

        else {
        var result = document.querySelector(".result")
        result.insertAdjacentHTML("afterbegin", "3RR0R")
        }
}

document.getElementById("five").addEventListener("click",clear);
function clear () {
    var equation = document.querySelector(".equation")
    equation.innerText = ""
    var result = document.querySelector(".result")
    result.innerText = ""

}