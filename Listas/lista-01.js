// LISTA 1

// 1-  Escreva um programa que calcule a área de um retângulo com base no comprimento e largura fornecidos pelo usuário.

// A área de um retângulo é calculada pela fórmula: área = comprimento da base x comprimento da largura. O usuário precisa informar essas duas 
// informações, sendo assim:

const base = parseFloat(prompt("Informe o comprimento da base do retângulo em centímetros: "));
const altura = parseFloat(prompt("Informe o comprimento da altura do retângulo em centímetros: "));

const areaRentangulo = base*altura;
console.log(`A área do rertângulo informado é de ${areaRentangulo.toFixed(2)} centímetros quadrados.`);

// 2 - Crie um programa que determine se um número é par ou ímpar utilizando o operador de módulo (%). 

// O operador módulo (%) faz a divisão do número da esqueda pelo da direita n vezes e retorna o resto da divisão.
// Para saber se um número é par ou ímpar basta dividir por 2 e se o resto for 0 o número será par.

const numero = parseInt(prompt('Informe um número inteiro para saber se ele é par ou ímpar: '));
if(numero % 2 === 0){   
    console.log(`o número ${numero} é par!`);
} else {
    console.log(`O número ${numero} é ímpar!`);
}

// 3 - Escreva uma função que verifique se uma string fornecida pelo usuário contém a palavra "JavaScript".

// O JavaScript possui a função 'includes()' que pode ser utilizada nesse caso. Na função apresentada a palavra 'JavaScript' tem que ser escrita
// da forma como foi pedida na questão sendo case sensitive, mas isso poderia ser mudado.

function incluiStringJavaScript(){
    const stringFornecida = prompt('Informe uma string: ');

    if(stringFornecida.includes('JavaScript')){
        console.log(`A string fornecida contém a palavra 'JavaScript'.`);
    } else {
        console.log(`A string fornecida não contém a palavra 'JavaScript'.`);
    }
}
incluiStringJavaScript();

// 4 - Implemente um programa que compare duas strings e determine se elas são iguais, ignorando maiúsculas e minúsculas.

// Para comparar se duas strings são iguais basta usar o operador de igualdade (===) e para ignorar se são maiúsculas ou minúsculas eu usarei 
// a função toLowerCase() que transforma os caractéres da string em minúsculas.

function compararStrings(){
    const primeiraString = prompt('Informe a primeira string: ');
    const primeiraStringMinuscula = primeiraString.toLowerCase();

    const segundaString = prompt('Informe a segunda string: ');
    const segundaStringMinuscula = segundaString.toLowerCase();

    if(primeiraStringMinuscula === segundaStringMinuscula){
        console.log('As strings são iguais!');
    } else {
        console.log('As strings são diferentes!');
    }
}
compararStrings();

// 5 - Crie uma função que concatene duas listas (arrays) e retorne a lista resultante.

// A função precisa ser chamada e precisa receber os valores do primeiroArray e do segundoArray. Exemplo: concatenarArrays([1,2,3],[4,5,6]);

function concatenarArrays(primeiroArray, segundoArray) {
    let arrayConcatenado = primeiroArray.concat(segundoArray);
    console.log(`A concatenação dos dois arrays é igual à: ${arrayConcatenado}`);
}


// 6 - Escreva um programa que calcule a média dos valores em um array utilizando a função reduce() e length.

// A função precisa ser chamada e precisa receber os valores do array. Exemplo: calcularMediaComReduce([10,20,30])

function calcularMediaComReduce(array) {
    const somaDoArray = array.reduce((somaDosElementos, elementoDoArray) => somaDosElementos + elementoDoArray);
    const media = somaDoArray/array.length;

    console.log(`A média do array é: ${media}`);
}

// 7 - Crie uma função que retorne a data e hora atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo".

// Função para fornecer a data e hora no momento em que a função é chamada e no formato especificado.

function dataEHora(){
    const agora = new Date();

    const ano = agora.getFullYear();
    const mes = agora.getMonth()+1;
    const dia = agora.getDate();
    const hora = agora.getHours();
    const minuto = agora.getMinutes();
    const segundo = agora.getSeconds();
    
    const dataEHora = `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
    //return dataEHora;
    console.log(dataEHora);
}
dataEHora();

// 8 - Implemente um programa que encontre o maior valor em um array usando a função Math.max().

// Basta utilizar a função Math.max(), onde o array vai dentro dos parenteses. Exemplo de array para ser usado: maximoValorNoArray([1,2,2,10]);

function maximoValorNoArray(array){
    const maximoValor = Math.max(...array);
    console.log(maximoValor);
}

// 9 - Escreva uma função que gere um número inteiro aleatório entre dois valores dados como argumentos.

// Para esse exercício foi utilizado as funções Math.random que escolhe um número aleatório, Math.ceil que arredonda o número para cima e Math.floor que arredonda o número para baixo. 
//Não foi utilizando o Math.round pq no caso de os números serem 5.5 e 7.8 ele arredondaria o intervalo para 6 e 8 podendo cair 8 que é maior do que o intervalo designado.

function numeroAleatorioNoIntervalo(menorNumero, maiorNumero){

    const menorNum = Math.ceil(menorNumero);
    const maiorNum = Math.floor(maiorNumero);

    const numeroAleatorio = Math.round(Math.random() * (maiorNum - menorNum) + menorNum);
    console.log(numeroAleatorio);
}

// 10 - Crie um programa que verifique se um número dado pelo usuário é um número primo usando uma função.

//Um número primo é um número maior do que 1 e é divisível apenas por 1 e por ele mesmo. O programa pergunta o usuário um número e no final mostra no console se é primo ou não.

function numeroPrimo(){
    const numeroUsuario = parseInt(prompt(`Informe o número que deseja saber se é primo ou não: `));
    let EPrimo = true;

    if (numeroUsuario <= 1){
        EPrimo = false;
    }
    for(let i = 2; i < numeroUsuario; i++){
        if(numeroUsuario % i === 0){
            EPrimo = false;
        }
    }

    if(EPrimo){
        console.log(`O número ${numeroUsuario} é um número primo.`);
    } else{
        console.log(`O número ${numeroUsuario} não é um número primo.`);
    }
}
numeroPrimo();

// 11 - Declare uma variável com valor "5" (string) e outra variável com valor 2 (número). Multiplique as duas variáveis e explique o resultado.

// O resultado é 10. Isso acontece porque o JavaScript converte a string para número, quando é possível, antes de realizar a operação aritmética.
// Isso é um caso particular do JavaScript e acontece na divisão (/) e na subtração (-) também. No caso da adição (+) é o mesmo sinal para concatenar, 
// então o resultado seria 52 e transformaria em uma string.

const stringCinco = '5';
const numeroDois = 2;
const multiplicacaoStringNumero = stringCinco*numeroDois;
console.log(multiplicacaoStringNumero);

// 12 - Converta a string "123" em um número inteiro e armazene-o em uma variável.

// Para realizar o exercício basta utilizar a função nativa do JavaScript parseInt();

const string123 = '123';
const numero123 = parseInt(string123);
console.log(numero123);
console.log(typeof(numero123));

// 13 - Escreva um programa que adicione um número e uma string. 

// Acredito que seja isso. No caso o simbolo de adição (+) quando uma das variáveis é uma string, o JavaScript concatena as variáveis e transforma
// o resultado em string. 

const idade13 = 13;
const stringAnos = ' Anos';
const quantosAnos = idade13 + stringAnos;
console.log(quantosAnos);
console.log(typeof(quantosAnos));

// 14 - Explique o resultado e discuta a coerção que ocorre.

// O JavaScript faz uma coerção implícita do número e o transforma em uma string e faz a concatenação. Assim o resultado final vai ser uma string também.


// 15 - Declare uma variável com o valor null e outra variável com o valor undefined. Verifique se são iguais em valor e tipo.

// Os valores de coerção de TIPO (==) foram considerados iguais, isso se dá porque ambos os valores são considerados vazios pelo JavaScript.
// Já na comparação de VALORES (===) dos dois elementos, eles são considerados diferentes, isso se dá porque o valor 'null' é um valor declarado
// nulo explicitamente, já o valor 'undefined' não é considerado um valor atribuído.

const nula = null;
const indefinido = undefined;

if(nula == indefinido){
    console.log('Os tipos null e undefined são iguais');
}else{
    console.log('Os tipos null e undefined são diferentes');
}
if(nula === indefinido){
    console.log('Os valores null e undefined são iguais');
}else{
    console.log('Os valores null e undefined são diferentes');
}

// 16 - Crie um programa que determine se uma variável é do tipo função usando o operador typeof.

// Utilização de typeof() para saber se a variável é uma função ou não. Utilizer o operador ternário para facilitar a escrita.

function eFuncaoOuNao(variavel){
   typeof(variavel) === 'function' ? console.log('É uma função!') : console.log('Não é uma função');
}

// Exemplos de funções e não função.
const souFuncao = function(){};
const tambemSouFuncao = () => {};
const naoSouFuncao = '';

eFuncaoOuNao(souFuncao);
eFuncaoOuNao(tambemSouFuncao);
eFuncaoOuNao(naoSouFuncao);

// 17 ou 18 - Escreva um programa que calcule o resultado da expressão: (10 + 5) * 3 / 20.

// Basta colocar essa expressão matemática igual a uma variável. O JavaScript irá fazer o cálculo do que está entre parênteses primeiro e depois seguir pela multiplicação e divisão
// e depois resolver a parte de adição ou subtração se a expressão tiver.

let calculoExpressao = (10 + 5) * 3 / 20;
console.log(calculoExpressao);

// 19 - Crie uma função que verifique se um número é positivo e ímpar ao mesmo tempo.

// A função pega um valor informado pelo usuário e retorna no console utilizando o operador ternário, se ele é positivo e ímpar ou não. 

function positivoEImpar(){
    const numeroUser = parseInt(prompt('Digite o número que deseja verificar se é positivo e ímpar ao mesmo tempo: '));

    (numeroUser > 0) && (numeroUser % 2 !== 0) ? 
    console.log(`O número ${numeroUser} é positivo e ímpar`) : 
    console.log(`O número ${numeroUser} ou não é positivo ou não é ímpar.`);
}
positivoEImpar();

// 20 - Implemente um programa que determine se um ano fornecido pelo usuário é bissexto ou não, considerando as regras: 
// (a) Anos divisíveis por 4 são bissextos; (b) Anos divisíveis por 100 não são bissextos, a menos que também sejam divisíveis por 400.     

// A função pede um ano ao usuário, ao informar a função verifica se é um ano divisível por 100, se for a função verifica se é divisível por 400 também.
// Após essa primeira parte todos os anos terminados em 00 e que poderiam ser múltiplos de 4 são analisados, assim sobram apenas os bissextos múltiplos de 4 e os que não são bissextos.

function anoBissexto(){
    const anoDesejado = parseInt(prompt('Digite o ano que deseja verificar se é bissexto: '));

    if(anoDesejado % 100 === 0){
        (anoDesejado % 400 === 0) ? console.log(`O ano ${anoDesejado} é bissexto.`) : console.log(`O ano ${anoDesejado} não é bissexto.`);
    } else if (anoDesejado % 4 === 0){
        console.log(`O ano ${anoDesejado} é bissexto.`);
    } else {
        console.log(`O ano ${anoDesejado} não é bissexto.`);
    }
}
anoBissexto();

// 21 - Escreva uma função que determine se uma pessoa tem permissão para entrar em um clube: idade mínima de 18 anos e não estar na lista de membros banidos (use operadores lógicos).

// A função inicia perguntando o nome e a idade da pessoa, se a idade for maior ou igual à 18 anos e o nome não estiver na listaBanidos uma mensagem dizendo que a pessoa tem permissão para entrar aparece no console
// caso contrário a pessoa não terá permissão. A lista de membros 

function temPermissao(){
    const nomePessoa = prompt('Insira o nome da pessoa: ');
    const idadePessoa = parseInt(prompt('Insira a idade da pessoa: '));

    const listaBanidos = ['Matheus', 'Lucas', 'Samuel', 'Vitor', 'Hugo', 'João']; // Exemplo de lista de membros banidos
    let pessoaBanida = false;

    for(let i = 0; i < listaBanidos.length; i++){
        if(listaBanidos[i].toLowerCase() === nomePessoa.toLowerCase()){
            pessoaBanida = true;
        }    
    }

    if(idadePessoa < 18 || pessoaBanida){
        console.log(`${nomePessoa} não tem permissão para entrar.`);
    } else {
        console.log(`${nomePessoa} tem permissão para entrar.`);
    }
}
temPermissao();

// 22 - Crie um programa que simule um sistema de login. Peça ao usuário um nome de usuário e uma senha, e verifique se correspondem aos valores esperados.

// A função é bem simples e compara dois valores pedidos para o usuário com dois valores já determinados e retorna no console se eles são iguais ou não.

function simulacaoLogin(){
    const usuarioEsperado = 'joaozinho123';
    const senhaEsperada = 'Random126';

    const nomeUsuario = prompt('Entre com o usuário: ');
    const senhaUsuario = prompt('Entrre com a senha: ');

    (usuarioEsperado === nomeUsuario) && (senhaEsperada === senhaUsuario) ? console.log(`${nomeUsuario} login bem sucedido!`) : console.log(`Usuário ou senha incorretos. Tente novamente.`);
}

simulacaoLogin();