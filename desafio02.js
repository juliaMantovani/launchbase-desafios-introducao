// Criar um programa para calcular a aposentadoria de uma pessoa.
// Tempo mínimo de contribuição para homens é de 35 anos.
// A soma da idade com o tempo de contribuição para homens é de no mínimo 95 anos.
// Tempo mínimo de contribuição para mulheres é de 30 anos.
// A soma da idade com o tempo de contribuição para mulheres é de no mínimo 85 anos.

const name = ' Flávio ';
const sex = ' H ';
const age = 22;
const contribuição01= 6;
const nome = ' Neusa ';
const sexo = ' F ';
const idade = 55;
const contribuição02 = 20;
const hcontri = 35;
const mcontri = 30;
const contrim = 85;
const contrih = 95;

const calculo = idade + contribuição02;
const soma = age + contribuição01;

if ((contribuição02 >= 30) || ( calculo >= 85 )) {
    console.log(' Neusa você pode se aposentar!')
}

if ((contribuição02 < 30) || ( calculo < 85 )) {
    console.log('Neusa você não pode se aposentar ainda!')
}

if ((contribuição01 >= 35) || ( soma >= 95 )) {
    console.log( 'Flávio você pode se aposentar!')
}

if ((contribuição01 < 35) || ( soma < 95 )) {
    console.log('Flávio você não pode se aposentar ainda!')
}