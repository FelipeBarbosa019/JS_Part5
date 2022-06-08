const btn = document.querySelector ('#submit')
const text = document.querySelector ('h3')
let check

btn.addEventListener ("click", function(e) {
    e.preventDefault()
    const num = parseFloat(document.getElementById ('num').value.replace(',','.'))
    check = Number. isInteger(num)

    if ((isNaN(num) || check===false) || ((num<0) || (num>10))) {
        alert (`Insira um número inteiro de 0 a 10.`)
    }
    else {
        switch (num){
            case 0:
                text.textContent = 'O número digitado foi zero.'
                break
            case 1:
                text.textContent = 'O número digitado foi um.'
                break
            case 2:
                text.textContent = 'O número digitado foi dois.'
                break
            case 3:
                text.textContent = 'O numúmero digitado foi três.'
                break
            case 4:
                text.textContent = 'O número digitado foi quatro.'
                break
            case 5:
                text.textContent = 'O número digitado foi cinco.'
                break
            case 6:
                text.textContent = 'O número digitado foi seis.'
                break
            case 7:
                text.textContent = 'O número digitado foi sete.'
                break
            case 8:
                text.textContent = 'O número digitado foi oito.'
                break
            case 9:
                text.textContent = 'O número digitado foi nove.'
                break
            case 10:
                text.textContent = 'O número digitado foi dez.'
        }
    }
});
