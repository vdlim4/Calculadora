const numeros = document.querySelector('.numeros')
const botoes = numeros.querySelectorAll('span')
const painel = document.querySelector('.painel')
const apagar = document.querySelector('.backspace')
const clear = document.querySelector('.clear')
const igual = document.querySelector('.igual')

function calcular() {
    try {
        const resultado = math.evaluate(painel.textContent)
        painel.innerHTML = resultado
    } catch {
        alert('[ERRO] Operação invalida')
        painel.innerHTML = ''
    }
}

function verificar() {
    if (painel.innerText.length > 20) {
        painel.style.fontSize = '1.5rem'
    } else if (painel.innerText.length > 15) {
        painel.style.fontSize = '1.9rem'
    } else {
        painel.style.fontSize = '2.5rem'
    }
}

botoes.forEach(botao => {
    botao.addEventListener('click', function() {
        const digito = this.textContent
        painel.innerHTML += digito

        const conteudo = painel.textContent.trim()
        if (painel.innerText.length > 26) {
            alert('[ERRO] Caracteres excessivos!')
            painel.innerHTML = ''
        } else {
            verificar()
        }
    })
    
    clear.addEventListener('click', function() {
        painel.innerHTML = ''
    })
})

apagar.addEventListener('click', function() {
    const texto = painel.innerText
    if (texto.length > 0) {
        painel.innerText = texto.substring(0, texto.length - 1)
    }
})

igual.addEventListener('click', function() {
    if (painel.innerText.length == 0) {
        painel.innerHTML = ''
    } else {
        calcular()
        verificar()
    } 
})






