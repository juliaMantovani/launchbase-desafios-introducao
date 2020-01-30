//criar um programa para calcular o IMC e nível de obesidade de uma pessoa.

const name =' Julia '
const peso = 80 
const altura = 1.70
const IMC = peso/(altura*altura)


if (IMC >= 90){
    console.log('Julia está acima do peso')
}

if (IMC < 50) {
    console.log('Julia está abaixo do peso')
}

if (IMC == 80) {
    console.log('Julia está no peso ideal')
}



////////////////////////////////////////////////

function calcularImc(nome, peso, altura) {
    const imc = peso / (altura * altura);

    if (imc >= 90){
        console.log(nome + ' está acima do peso' + ' imc ' + imc)
    }
    
    if (imc < 50) {
        console.log(nome + ' está abaixo do peso' + ' imc ' + imc)
    }
    
    if (imc == 80) {
        console.log(nome + ' está no peso ideal' + ' imc ' + imc)
    }
}

calcularImc(name, peso, altura);
calcularImc('Flávio', 70, 1.84);
