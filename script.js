const numeros = document.querySelector('.numeros')
const botoes = numeros.querySelectorAll('button')
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

botoes.forEach(botao => {
    botao.addEventListener('click', function() {
        const digito = this.textContent
        painel.innerHTML += digito

        const conteudo = painel.textContent.trim()

        if (conteudo.length > 15) {
            alert('[ERRO] Caracteres excessívos!')
            painel.innerHTML = ''
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
    calcular()
})






