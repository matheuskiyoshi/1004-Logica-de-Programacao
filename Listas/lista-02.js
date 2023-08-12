// LISTA 2

// DICIONÁRIOS (OBJETOS)

// 1- Crie um objeto que represente um estudante com propriedades como nome, idade, curso e notas. Acesse e exiba essas propriedades.

// Foi utilizado o console.log para exibir todas as propriedades e atráves do 'for...in' é possível acessar as propriedades.

const estudante = {
  nome: "Matheus",
  idade: 31,
  curso: "Fron-End",
  nota: {
    estatico: 9.9,
    logica: 10,
  },
};

console.log(estudante);
for (const propriedades in estudante) {
  console.log(`${propriedades} : ${estudante[propriedades]}`);
}

// 2- Crie um dicionário que mapeie nomes de países a suas respectivas capitais. Crie uma função que receba o nome de um país e retorne a capital correspondente.

// Foi criado um objeto com alguns países dentro da função. A função inicia perguntando o nome do país que deseja encontrar a capital, se estiver na lista ele retorna no console a capital do país.
// o toLoweCase() é para não precisar escrever o nome do país exatamente igual está no objeto.

function qualACapital() {
  const paisesECapitais = {
    brasil: "Brasília",
    japão: "Tokyo",
    alemanha: "Berlin",
    portugal: "Lisboa",
    frança: "Paris",
    espanha: "Madrid",
    argentina: "Buenos Aires",
    uruguai: "Montevidéu",
    chile: "Santiago",
  };

  const pais = prompt("Digite o país que deseja saber a capital: ");
  const capital = paisesECapitais[pais.toLowerCase()];
  
  (capital) ? console.log(`A capital do(a) país ${pais} é ${capital}.`) : console.log('País não encontrado.');
}
qualACapital();

// 3- Crie um dicionário com nomes de frutas e seus preços. Escreva uma função que calcule o preço total de uma cesta de frutas.

// A função possui uma lista com algumas frutas e seus valores, dentro da função é passada uma estrutura de repetição para passar por todas as frutas e ir somando os valores
// e ao final trazer a soma da cesta completa.

function precoCestaDeFrutas(){
  let precoTotal = 0;
  const cestaFrutas = {
    laranja: 5.6,
    banana: 4.5,
    maca: 7,
    limao: 6.99,
    mamao: 5.2,
    uva: 7.8,
    morango: 9.99
  }
  for(const frutas in cestaFrutas){
    precoTotal += cestaFrutas[frutas];
  }
  console.log('O preço total da cesta de frutas é : R$'+ precoTotal.toFixed(2));
}
precoCestaDeFrutas();

// 4- Crie um objeto que represente um livro com propriedades como título, autor, ano de publicação, etc. Crie uma função que imprima as informações do livro em um formato legível.

// A função é um laço de repetição 'for in' que passa por todos os elementos de um objeto livro e traz todas as relações de 'chave:valor' no console.

const livro = {
  titulo: 'Código Limpo',
  autor: 'Robert C. Martin',
  edicao: 8,
  editora: 'Alta Books',
  ano: 2009,
  isbn: 978-85-508-1148-2,
}
function infoDoLivro(livro){
  for (const informacoes in livro){
    console.log(`${informacoes}: ${livro[informacoes]}`);
  }
}
infoDoLivro(livro);

// ### Map:

// 5- Dado um array de números, crie um novo array onde cada número seja elevado ao quadrado.

// Foi criado um array com algus números e depois criado um array onde pega o primeiro array e passa a função .map() nele, essa função map multiplica cada elemento por si mesmo 
// e retorna o número o final. Por fim é mostrado no console o array ao quadrado que foi gerado a partir do primeiro array junto com a função .map().

const arrayExercCinco = [2,5,6,9,14,12,4];
const arrayExercCincoAoQuadrado = arrayExercCinco.map((num) => {
  num *= num;
  return num;
});
console.log(arrayExercCincoAoQuadrado);

// 6- Dado um array de palavras, crie um novo array com a primeira letra de cada palavra em maiúscula.

// Foi criado um array com algumas palavras com a letra minúscula e outro array que pega esse primeiro array e utiliza a função .map() para passar uma regra para todos os elementos do array original
// Para colocar a primeira letra maiúsula foi utilizado o palavra[0], que pega primeiro elemento da string e utiliza o toUpperCase() para deixar maiúscula a primeira letra. Em seguida é utilizado o 
// + palavra.slice(1), para juntar ao resto da palavra, o slice(1) modifica a string original removendo os elementos desejados, nesse caso removeu só o primeiro elemento que foi o utilizado para ficar 
// maiúsculo. Por fim é apresentado o novo array no console.

const arrayDePalavras = ['uva','bola','carro','geladeira','mercado','rua','luz'];
const arrayDePalavrasComInicialMaiuscula = arrayDePalavras.map((palavra) => {
  return palavra[0].toUpperCase() + palavra.slice(1);
});
console.log(arrayDePalavrasComInicialMaiuscula);

// 7- Crie um array de objetos representando produtos com propriedades como nome, preço e quantidade. Use o método map() para calcular o valor total de cada produto (preço * quantidade).

// Foi criado um array de objetos com algunns produtos com nome, preço e quantidade e utilizado o .map() para multiplicar o preço pela quantidade e retornar o nome do produto e o valor total daquele produto. 

const produtos = [
  {nome: 'Pão', preco: 7.90, quantidade: 2},
  {nome: 'Leite', preco: 5.58, quantidade: 3},
  {nome: 'Frango', preco: 14.50, quantidade: 2},
  {nome: 'Sabonete', preco: 2.50, quantidade: 5},
  {nome: 'Creme dental', preco: 8.95, quantidade: 2},
];
const valorTotalDeCadaProduto = produtos.map((produto) => {
  const valorTotal = (produto.preco * produto.quantidade).toFixed(2);
  return {nome: produto.nome, valorTotal};
});
console.log(valorTotalDeCadaProduto);

// 8- Converta um array de temperaturas em graus Celsius para Fahrenheit usando a fórmula (C * 9/5) + 32.

// Foi criado um array com alguns valores de temperaturas em graus Celsius, em seguida é criado um novo array para obter as temperaturas em graus Fahrenheit. Para isso é utilizada a função .map()
// e passar a fórmula dada para encontrar a temperatura em Fahrenheit, por fim a função dentro do map retorna a um template string mostrando a comparação dos resultados. Por fim o console log chama
// essa constante que possui a função .map() e fez o cálculo das temperaturas.

const arrayTemperaturasCelsius = [10, 15, 20, 25, 30, 35, 40];
const resultadoDasTemperaturas = arrayTemperaturasCelsius.map((celsius) => {
  const fahrenheit = (celsius * 9/5) + 32;
  return `${celsius}° Celsius = ${fahrenheit}° Fahrenheit`;
});
console.log(resultadoDasTemperaturas);

// ### Reduce:

// 9- Dado um array de números, use o método reduce() para calcular a soma de todos os elementos.

// Foi criado um array com alguns números aleatórios e utilizada a função reduce de forma direta, dessa forma não foi utilizado o return. Por fim o console.log para mostrar o resultado no console.

const arrayNumeros = [1,23,41,21,8,4,96];
const somaNumeros = arrayNumeros.reduce((acumulador, elemento) => acumulador + elemento);
console.log(somaNumeros);

// 10- Crie um array de strings e use o método reduce() para concatenar todas as strings em uma única string.

// Basicamete da mesma forma que o exercício anterior só que com um array de strings. Nesta resolução foi utilizada a função .reduce() e no return foi feita a concatenação entre as palavras e um espaço 
// para que elas não ficassem coladas umas nas outras.

const arrayDeStrings = ['Uma', 'string', 'qualquer', 'como', 'exemplo'];
const arrayDeStringsConcatenado = arrayDeStrings.reduce((resultado, string) => {
  return resultado + ' ' + string;
})
console.log(arrayDeStringsConcatenado);

// 11- Dado um array de objetos representando despesas com propriedades como valor e categoria, use o método reduce() para calcular o total de despesas de uma categoria específica.

// Foi criado um array de objetos com as despesas e categorias. O programa pede ao usuário entrar com a categoria específica e retorna a soma dos valores da categoria específicada no console.

const arrayDespesas = [
  {valor: 89.90, categoria: 'internet'},
  {valor: 46.87, categoria: 'mercado'},
  {valor: 89.96, categoria: 'água'},
  {valor: 135.86, categoria: 'energia'},
  {valor: 16.52, categoria: 'transporte'},
  {valor: 86.45, categoria: 'mercado'},
  {valor: 23.49, categoria: 'transporte'},
]
const categoriaEspecifica = prompt('Entre com a categoria específica que deseja saber o total: ');
const totalDespesasCategoria = arrayDespesas.reduce((total, despesa) => {
  if(categoriaEspecifica === despesa.categoria){
    return total + despesa.valor;
  }
  return total;
}, 0);
console.log(`O total de despesas da categoria ${categoriaEspecifica} é ${totalDespesasCategoria}.`);

// 12- Dado um array de números, use o método reduce() para encontrar o maior número no array.

// Foi criado um array aleatório de números. Utilizando o método .reduce() para encontrar o maior número entre o array, o array inicia com maior = 0, a condição passada dentro do .reduce() 
// é a de comparação entre 'maior' e 'numeros', se 'numeros' for maior, então 'maior' será igual aquele 'numeros' assim ao fim o programa retorna ao maior, que será o maior número do array.

const arrayDeNumeros = [1,0,20,11,23,45,21,4];

const maiorNumero = arrayDeNumeros.reduce((maior, numeros) => {
  if(numeros > maior){
    maior = numeros;
  }
  return maior;
}, 0);
console.log(maiorNumero);

// ### Laços de Repetiçoes

// 13- Imprima os números de 1 a 10 utilizando um loop for.

// Um laço de repetição simples com o incremento iniciando em 1 e indo até 10 sendo incrementado de +1 unidade a cada repetição. E o console imprime o incremento a cada repetição.

for(let i = 1; i <= 10; i++){
  console.log(i);
}

// 14- Imprima os números pares de 1 a 20 utilizando um loop for.

// Para imprimir os valores pares de 1 a 20 basta iniciar o incremento com 2 e ir aumentando de 2 em 2 até 20;

for(let i = 2; i <= 20; i += 2){
  console.log(i);
}

// 15- Calcule a soma dos números de 1 a 50 utilizando um loop for.

// Uma constante soma inicia com o valor 0, ela vai acumular a soma de todos os elementos. O loop vai de 1 até 50 de 1 em 1 e vão se somando com a constante soma. No final temos a soma total.

let soma = 0;

for(let i = 1; i <= 50; i++){
  soma += i;
}
console.log(soma);

// 16- Imprima a tabuada do 7 utilizando um loop for.

// Foi utilizado o template string pra passar a equação de multiplicação e o incremento 'i' para ir aumentando de 1 em 1 e multiplicando por 7 até i = 10;

console.log('Tabuada do 7');
for(let i = 1; i <= 10; i++){
  console.log(`7 * ${i} = ${7*i}`);
}

// 17- Escreva um programa que solicite ao usuário um número e imprima a sequência de números de 1 até o número inserido, utilizando um loop for.

// É pedido inicialmente o número ao usuário, criado o laço de repetição iniciando o incremento em 1 e aumentando de 1 em 1 até o número que o usuário escolheu. Dentro do loop vai o console printando o incremento.

const numeroDoUsuario = parseInt(prompt('Digite um número: '));
for(let i = 1; i <= numeroDoUsuario; i++){
  console.log(i);
}

// 18- Escreva um programa que solicite ao usuário um número e verifique se ele é primo.

// O usuário insere um número, um laço condicioal já verifica se o número é menor ou igual a 1, se passar o número entra no loop onde é verificado se ele é divisível por algum número menor que ele que não seja 1,
// se for divisível ele retorna falso. E no final tem um laço condicional com o resultado de ele ser um número primo ou não.

const numeroDoUsuarioPrimo = parseInt(prompt('Digite um número: '));
let EPrimo = true;
if (numeroDoUsuarioPrimo <= 1){
    EPrimo = false;
}
for(let i = 2; i < numeroDoUsuarioPrimo; i++){
    if(numeroDoUsuarioPrimo % i === 0){
        EPrimo = false;
    }
}

if(EPrimo){
    console.log(`O número ${numeroDoUsuarioPrimo} é um número primo.`);
} else{
    console.log(`O número ${numeroDoUsuarioPrimo} não é um número primo.`);
}

// 19- Crie um programa que gere a sequência de Fibonacci até o décimo termo. (Dica: o próximo termo é a soma dos dois termos anteriores)

// A sequência de Fibonacci é iniciada com os dois primeiros valores por esse motivo o incremento dentro do loop vai de 0 até 7 para completar os 10 termos.
// Dentro do loop é passada a equação onde o proximoNumero é igual a soma dos dois anteriores, ou seja, pegando i0 e i1 teremos i2 que é a soma desses dois 0 + 1 que é igual a 1 que é o terceiro elemento
// após encontrar o elemento é utiliza da função .push() para colocar o elemento no array. Ao final é apresentado um array com os 10 termos.

let sequenciaDeFibonacci = [0,1];
for(let i = 0; i <= 7; i++){
  let proximoNumero = sequenciaDeFibonacci[i] + sequenciaDeFibonacci[i+1];
  sequenciaDeFibonacci.push(proximoNumero);
}
console.log(sequenciaDeFibonacci);

// 20- Crie um programa que solicite ao usuário um número e calcule o fatorial desse número.

// O programa faz o decremento do número dado pelo usuário diminuindo 1 unidade a cada iteração. Inicialmente o valor variável fatorial é iniciado em 1 para fazer a multiplicação pelo numeroUsuario e assim 
// ir decrescendo até 1 sempre fazendo a multiplicação em cada iteração. No final traz o número dado pelo usuário e o resultado do fatorial desse número.

const numeroUsuario = parseInt(prompt('Informe o número que deseja saber o fatorial: '));
let fatorial = 1;
for(let d = numeroUsuario; d >= 1; d--){
  fatorial *= d;
}
console.log(`O fatorial de ${numeroUsuario} é igual a ${fatorial}`);


// 21- Escreva um programa que imprima a seguinte série: 1, 3, 6, 10, 15, 21, ..., onde cada número é a soma dos números naturais consecutivos.

// O programa pede que o usuário entre com a quantidade de repetições que ele gostaria de ter e faz um loop com essa quantidade mostrando no console a sequência de valores dessa progressão aritmética.

const quantidadeDeElementos = parseInt(prompt('Entre com a quantidade de elementos dessa progressão aritmética: '));
let inicio = 1;

for (let i = 1; i < quantidadeDeElementos; i++) {
  console.log(inicio);
  inicio += i + 1;
}

// 22- Crie um programa que encontre e imprima todos os números perfeitos de 1 a 1000. Um número perfeito é aquele cuja soma de seus divisores (excluindo ele mesmo) é igual ao próprio número.

// Foi utilizado um array vazio para colocar os números perfeitos. Primeiro o programa inicia um loop com os valores de 1 a 1000 e com a somaDivisores igual a 0, esse primeiro loop gira por todo escopo,
// já o segundo loop pega cada número de 1 a 1000 e divide ele por todos os valores menores que ele e soma esse valor se for divísivel por ele. Fora do segundo loop existe a condicional onde compara
// a somaDivisores pelo elemento, se for igual ele joga esse valor no array que estava vazio. No final é apresentado o array com os números perfeitos.

let numerosPerfeitos = [];
for(let i = 1; i <= 1000; i++){
  let somaDivisores = 0;
  for(let j = 1; j < i; j++){
    if(i % j === 0){
      somaDivisores += j;
    }
  }
  if(i === somaDivisores){
    numerosPerfeitos.push(i);
  }
}
console.log(numerosPerfeitos);

// 23- Crie um jogo em que o computador escolhe um número aleatório entre 1 e 100, e o jogador deve adivinhar qual é esse número. O jogo deve fornecer dicas informando se o número a ser adivinhado é maior ou menor do que o palpite do jogador, e o jogo deve continuar até que o jogador acerte o número.

// O programa inicia com um contador de vidas setado em 0, são utilizados algumas funnções do Math para gerar o número aleatório e inteiro, e a variável chutes foi apresentada como undefined.
// O jogo pede que o usuário entre com um número e a resposta do usuário é comparada com o a respostaCerta já préviamente estabelecida. Com as duas respostas foi feita uma estrutura condicional comparando as duas
// se o chute for menor o programa printa no console dizendo que foi maior e apresenta o valor do chute, se for maior a mesma coisa e se acertar ele dá um parabéns, traz a quantidade de tentivas que foram
// necessárias e encerra o loop.

let vidas = 0;
const respostaCerta = Math.floor(Math.random() * 100) + 1;
let chutes = undefined;
do {
  vidas++;
  chutes = parseInt(prompt('Chute um número de 1 a 100: '));
  if(chutes === respostaCerta) {
    console.log(`O número ${chutes} é a resposta correta!! Parabéns você só precisou de ${vidas} tentativas para acertar!`);
  } else if( chutes < respostaCerta) {
    console.log(`O número ${chutes} é MENOR do que a resposta. Continue tentando!`);
  } else {
    console.log(`O número ${chutes} é MAIOR do que a resposta. Continue tentando!`);
  }
} while (chutes !== respostaCerta);

// 24- Crie um programa que gere a sequência de números de Fibonacci usando um loop while até que o próximo termo seja maior que 1000.

// A sequencia começa com os dois primeiros termos em um array. Em seguida foi declarado o incremento igual a 0 e o proximoTermo também igual a 0. Dentro do while como condição foi definido que o loop irá ocorrer
// até que o proximo termo seja menor ou igual a 1000, para evitar que seja colocado no array termos maiores que 1000 é passado uma condição de proximo Termo < 100. E a cada proximo termo o loop joga esse termo
// no array da sequência de Fibonacci e aumenta o incremento em + 1. No final do loop o array de sequência de Fibonacci é printado no console.

let sequenciaDeNumerosDeFibonacci = [0,1];
let i = 0;
let proximoTermo = 0;
while(proximoTermo <= 1000){

  proximoTermo = sequenciaDeNumerosDeFibonacci[i] + sequenciaDeNumerosDeFibonacci[i+1];
  if(proximoTermo <= 1000){
    sequenciaDeNumerosDeFibonacci.push(proximoTermo);
  }
  i++;
}

console.log(sequenciaDeNumerosDeFibonacci);

// 25- Escreva um programa que calcule a média de uma lista de números. O usuário deve fornecer quantos números deseja inserir, e em seguida, inserir os números.

// O programa inicia com a lista vazia e com a pergunta de quantos elementos deseja colocar na lista. Após essa informação é possível ajusta o loop para que a lista tenha a quantidade de números
// indicada pelo usuário. Dentro do loop vai a pergunta de qual número deve ser adicionado a lista e o elemento é enviado para a lista. Fora do loop foi utilizada a função .reduce() para 
// calcular a soma dos elementos do array e em seguida é divida a soma dos elementos pela quantidade de números informada pelo usuário. Por fim a lista e a média são apresentadas no console.

let listaDeNumeros = [];
const quantidadeDeNumeros = parseInt(prompt('Informe a quantidade de números que deseja na lista: '));
for(let i = 0; i < quantidadeDeNumeros; i++){
  let elemento = parseInt(prompt('Insira um número: '));
  listaDeNumeros.push(elemento);
}
const somaDaLista = (listaDeNumeros.reduce((soma, elemento) => soma + elemento));
const mediaDaLista = somaDaLista/quantidadeDeNumeros;
console.log(`A lista de números inserida foi: [${listaDeNumeros}] e a média dessa lista é: ${mediaDaLista}`);


// 26- Escreva um programa que peça ao usuário para adivinhar um número secreto entre 1 e 100. O programa deve fornecer dicas como "maior" ou "menor" até que o jogador adivinhe corretamente.

// Mesmo enunciado da questão 23. Na questão 23 foi resolvido o problema utilizando do while, nessa foi utilizado o for. Inicia a quantidade de vidas em 0 e é feita a escolha de um número aleatório.
// O loop de repetição é iniciado com chutes indefinido e o programa irá rodar enquanto o chute for diferente da resposta certa e a vida vai aumentando de 1 em 1 a cada repetição.
// Dentro do loop também tem os laços condicionais para caso acerte a resposta, ou se é menor ou maior à resposta.

let vidasQuest26 = 0;
const respostaCertaQuest26 = Math.floor(Math.random() * 100) + 1;

for (let chutes = undefined; chutes !== respostaCertaQuest26; vidasQuest26++) {
  chutes = parseInt(prompt('Chute um número de 1 a 100: '));
  
  if (chutes === respostaCertaQuest26) {
    console.log(`O número ${chutes} é a resposta correta!! Parabéns você só precisou de ${vidasQuest26 + 1} tentativas para acertar!`);
  } else if (chutes < respostaCertaQuest26) {
    console.log(`O número ${chutes} é MENOR do que a resposta. Continue tentando!`);
  } else {
    console.log(`O número ${chutes} é MAIOR do que a resposta. Continue tentando!`);
  }
}

// 27- Crie um programa que gere a sequência de números primos até um número fornecido pelo usuário.

// Foi criada uma função para saber se o número é primo ou não. Em seguida é pedido ao usuário para fornecer o número que ele deseja que a sequência de números primos pare. É criada uma lista onde os números
// primos vão ficar alocados. Por fim é apresentado o número fornecido pelo usuário e a lista de números primos.

function numeroPrimo(numero){
  if(numero <= 1){
    return false;
  }
  for(let i = 2; i < numero; i++){
    if(numero % i === 0){
      return false;
    }
  }
  return true;
}

const numeroFornecido = parseInt(prompt('Forneça o número onde a sequencia de primos deve parar: '));
let listaNumerosPrimos = [];

for(let i = 2; i <= numeroFornecido; i++){
  if(numeroPrimo(i)){
    listaNumerosPrimos.push(i);
  }
}
console.log(`Os números primos até ${numeroFornecido} são [${listaNumerosPrimos}]`);

// 28- Escreva um código JavaScript que utilize um laço de repetição while para imprimir os números pares de 0 a 10.

// Programa simples onde é criada uma variável que inicialmente tem o valor de 0. Enquanto o valor dessa variável for menor ou igual a 10 esse número é jogado à uma condição que checa se ele é positivo ou não.
// Se for positivo o programa printa no console o número e por fim aumenta o número em +1.

let num = 0;
while(num <= 10){
  if(num % 2 === 0){
    console.log(num);
  }
  num++;
}

// 29- Escreva um código JavaScript que solicite ao usuário um número e utilize um laço de repetição do-while para verificar se o número inserido é uma potência de 2.

// O programa inicia pedindo para o usuário informar um número que deseja saber se é potência de 2. Em seguida foi criada uma variável para pegar esse número informado para esse número ser dividido por 2 enquanto 
// ele for maior ou igual a 2. Foi criada uma outra variável para contar quantas vezes o programa irá rodar pelo loop para verificar em qual potência o 2 foi elevado. Após isso o programa chega se o número informado 
// foi 1, nesse caso seria 2 elevado à 0. Se não o programa segue. Ele pega o número informado e vai dividindo por 2 e contando quantas vezes o número foi dividido, quando o número for menor ou igual a 2 o número
// entra em um laço condicional, se o resto das multiplas divisões por 2 for igual a 1 significa que o número é uma potência de 2. Caso contrário o número não é uma potência de 2.

const numeroUser = parseInt(prompt('Informe o número que deseja saber se é potência de 2: '));
let numeroDivididoPorDois = numeroUser;
let potencia = 0;
if(numeroUser === 1){
  console.log(`O número ${numeroUser} é uma potência de 2 elevado a 0`);
} else{
  do{
  numeroDivididoPorDois /= 2;  
  potencia++;
  } while(numeroDivididoPorDois >= 2);

  if(numeroDivididoPorDois === 1){
    console.log(`O número ${numeroUser} é uma potência de 2 elevado a ${potencia}.`);
  }else{
    console.log(`O número ${numeroUser} não é uma potência de 2.`);
  }
}

// 30- Escreva um código JavaScript que utilize um laço de repetição while para calcular a soma dos números de 1 a 100 e exiba o resultado.

// O código inicia com um contador e a soma dos números iguais a 0. Enquanto o contador for menor do 100 ele vai aumentar 1 unidade e a soma dos números vai somando cada unidade do contador e guardando o valor nela
// No final o contador será 100 e a somaDosNumeros terá somado todos os números como apresentado no console.

let contador = 0;
let somaDosNumeros = 0;

while (contador <= 100) {
  somaDosNumeros += contador;
  contador++;
}

console.log(somaDosNumeros);

// ### Condicionais

// 31- Verificação de vogal ou consoante

// Peça ao usuário para digitar uma letra.
// Use uma estrutura condicional para verificar se a letra é uma vogal ou uma consoante.
// Exiba uma mensagem indicando se a letra é uma vogal ou consoante.

// O programa inicia pedindo ao usuário para digitar uma letra. Primeiro é verificado se o usuário inseriu apenas um caracter, se estiver correto ele parte para a verificação se é vogal ou consoante.
// Foi criado um array de vogais e uma variavel booleana para saber se é vogal ou não, ela inicia como falsa e caso a letra do usuário for igual a alguma letra do array de vogais, essa variável booleana
// passa a ser true. Após esse laço de repetição comparando o array com a entrada do usuário se a variável booleana passar a ser true significa que é uma vogal, caso contrário será uma consoante.

const letraDoUsuario = prompt('Digite uma letra: ');

if(letraDoUsuario.length !== 1){
  console.log('Por favor insira apenas uma letra.');
} else {
  let vogal = false;
  const vogais = ['a','e','i','o','u'];
  for(let i = 0; i < vogais.length; i++){
    if(letraDoUsuario === vogais[i]){
      vogal = true;
    }
  }
  if(vogal){
    console.log(`A letra '${letraDoUsuario}' é uma vogal.`);
  } else{
    console.log(`A letra '${letraDoUsuario}' é uma consoante.`);
  }
}

// 32- Calculadora simples

// Peça ao usuário para digitar dois números e uma operação matemática (+, -, *, /).
// Use uma estrutura condicional para realizar a operação selecionada nos números dados.
// Exiba o resultado da operação.

// O programa inicia pedindo o primeiro e segundo número ao usuário e em seguida o operador matemático que deseja. Em seguida é feito um laço condicional para identificar se o operador matemático foi colocado
// usando apenas um dos operadores, se sim o programa segue. Foi utilizado o switch nesse caso pela facilidade de representar as condições. Dentro de cada caso o switch realiza a operação utilizando os dois 
// valores que o usuário apresentou e printa no console a resposta do cálculo.

const primeiroNumero = parseFloat(prompt('Entre com o primeiro número: '));
const segundoNumero = parseFloat(prompt('Entre com o segundo número: '));
const operadorMatematico = prompt('Entre com um operador matemático (+ - * /): ');
let resultadoDaOperacao = undefined;

if(operadorMatematico.length !== 1){
  console.log('Por favor insira apenas um operador matemática: ');
} else{
  switch(operadorMatematico){
    case '+':
      resultadoDaOperacao = primeiroNumero + segundoNumero;
      console.log(`A adição do ${primeiroNumero} + ${segundoNumero} = ${resultadoDaOperacao}`);
      break;

    case '-':
      resultadoDaOperacao = primeiroNumero - segundoNumero;
      console.log(`A subtração do ${primeiroNumero} - ${segundoNumero} = ${resultadoDaOperacao}`);
      break;

    case '*':
      resultadoDaOperacao = primeiroNumero * segundoNumero;
      console.log(`A multiplicação do ${primeiroNumero} * ${segundoNumero} = ${resultadoDaOperacao}`);
      break;

    case '/':
      resultadoDaOperacao = primeiroNumero / segundoNumero;
      console.log(`A divisão do ${primeiroNumero} / ${segundoNumero} = ${resultadoDaOperacao}`);
      break;
  }
}

// 33- Verificação de número primo

// Peça ao usuário para digitar um número.
// Use uma estrutura condicional para verificar se o número é primo (divisível apenas por 1 e por ele mesmo).
// Exiba uma mensagem indicando se o número é primo ou não.

// O programa pede ao usuário um número e é definida uma variável booleana para saber se o número é primo ou não iniciando como 'true'. Primeiro é verificada a condição do número ser maior do que 1, caso contrário
// não será primo e assim a variável booleana passará a ser 'false'. Após essa primeira condição o número entra em um loop para saber se é divisível por algum número menor que ele, se for a variável booleana 
// passará a ser 'false'. Por fim é utilizado uma condicional para checar se a variável booleana mudou ou não, caso seja 'true' o número será primo, caso contrário não será primo.

const numeroFornecidoPrimo = parseInt(prompt('Forneça o número que deseja saber se é primo: '));
let seForPrimo = true;
  if(numeroFornecidoPrimo <= 1){
     seForPrimo = false;
  }
  for(let i = 2; i < numeroFornecidoPrimo; i++){
    if(numeroFornecidoPrimo % i === 0){
      seForPrimo =  false;
    }
  }
  if(seForPrimo){
    console.log(`O número ${numeroFornecidoPrimo} é um número primo.`);
  }else{
    console.log(`O número ${numeroFornecidoPrimo} não é primo.`);
  }

// 34- Conversão de temperatura

// Peça ao usuário para digitar uma temperatura em graus Celsius.
// Use uma estrutura condicional para converter a temperatura para Fahrenheit ou Kelvin, de acordo com a escolha do usuário.
// Exiba o resultado da conversão.

// O programa inicia pedindo a temperatura em Celsius. Depois pede para qual temperatura o usuário deseja transformar e assim digitar 'k' para Kelvin ou 'f' para Fahrenheit. Também foi criada uma variável
// temperaturaConvertida para obter o valor da temperatura convertida. A temperatura então é sujeita a um laço condicional onde se a letra digitada for 'k' é feita a conversão para Kelvin e se a letra
// digitada for 'f' é feita a conversão para Fahrenheit. Caso a letra digitada seja diferente o programa avisa que houve esse erro e pede para tentar novamente.

const temperaturaEmCelsius = parseFloat(prompt('Digite a temperatura em graus Celsius: '));
const fahrenheitOuKelvin = prompt(`Para qual temperatura deseja transformar? Digite 'k' para Kelvin ou 'f' para Fahrenheit: `);
let temperaturaConvertida = undefined;
if(fahrenheitOuKelvin.toLowerCase() === 'k'){
  temperaturaConvertida = temperaturaEmCelsius + 273;
  console.log(`A temperatura ${temperaturaEmCelsius}°C é igual a ${temperaturaConvertida}K`);
} else if(fahrenheitOuKelvin.toLowerCase() === 'f'){
  temperaturaConvertida = (temperaturaEmCelsius * 9/5) + 32;
  console.log(`A temperatura ${temperaturaEmCelsius}°C é igual a ${temperaturaConvertida}°F`);
} else{
  console.log(`A letra digitada não corresponde nem a 'f' nem a 'k', tente novamente.`);
}

// 35- Dia da semana por extenso

// Peça ao usuário para digitar um número de 1 a 7 representando um dia da semana.
// Use uma estrutura condicional switch para exibir o nome completo do dia da semana correspondente ao número digitado.

// O programa inicia pedindo para o usuário inserir um número de 1 à 7 e retorna o dia da semana referente à aquele número através de um switch. Se o usuário digitar mais de um número o programa avisa que isso
// aconteceu e pede para tentar novamente.

const diaDaSemana = prompt('Digite um número de 1 a 7. Esse número representa um dia da semana: ');
if(diaDaSemana.length !== 1){
  console.log('Você digitou mais de um número. Tente novamente.');
}else{
  switch(diaDaSemana){
    case '1':
      console.log(`O número ${diaDaSemana} corresponde a Domingo.`);
      break;
    case '2':
      console.log(`O número ${diaDaSemana} corresponde a Segunda-Feira.`);
      break;
    case '3':
      console.log(`O número ${diaDaSemana} corresponde a Terça-Feira.`);
      break;
    case '4':
      console.log(`O número ${diaDaSemana} corresponde a Quarta-Feira.`);
      break;
    case '5':
      console.log(`O número ${diaDaSemana} corresponde a Quinta-Feira.`);
      break;
    case '6':
      console.log(`O número ${diaDaSemana} corresponde a Sexta-Feira.`);
      break;
    case '7':
      console.log(`O número ${diaDaSemana} corresponde a Sábado.`);
      break;
  }
}


// 36- Verificação de ano bissexto

// Peça ao usuário para digitar um ano.
// Use uma estrutura condicional para verificar se o ano é bissexto (divisível por 4 e não por 100, exceto se for divisível por 400).
// Exiba uma mensagem indicando se o ano é bissexto ou não.

// O programa inicia perguntando ao usuário qual ano ele deseja analisar. Se o ano for divisível por 100 o programa verifica se o número também é divisível por 400 se for o ano é bissexto, caso contrário não.
// Após esse primeiro laço condicional, se o número não for divisível por 100 o programa confere se o ano é divisível por 4, se for o ano será bissexto.

const anoBissexto = prompt('Digite um ano para verificar se é bissexto: ');
if(anoBissexto % 100 === 0){
  (anoBissexto % 400 === 0) ? console.log(`O ano ${anoBissexto} é bissexto.`) : console.log(`O ano ${anoBissexto} não é bissexto.`);
} else if (anoBissexto % 4 === 0){
  console.log(`O ano ${anoBissexto} é bissexto.`);
} else {
  console.log(`O ano ${anoBissexto} não é bissexto.`);
}


// 37- Contador de vogais e consoantes

// Peça ao usuário para digitar uma palavra ou frase.
// Use uma estrutura condicional para contar o número de vogais e consoantes na entrada.
// Exiba os resultados separadamente.

// O programa inicia perguntando a frase ou palavra que o usuário deseja. Em seguida foi utilizada uma variável para remover os espaços entre as palavras se tiver. O número de vogais foi iniciado em 0 e foi criado
// uma variável com todas as possíveis vogais com acento ou não. O programa percorre um loop correspondente a frase ou palavra sem os espaços. Dentro do loop há uma condição que verifica se cada elemento
// da frase sem os espaços inclui alguma das vogais, se incluir o número de vogais aumenta em 1. No final do loop teremos toda a quantidade de vogais na frase sem espaços. Para saber a quantidade de consoantes
// basta fazer a subtração do tamanho da frase sem espaços pelo número de vogais encontrado. Por fim o programa printa no console a frase ou palavra digitada e a quantidade de vogais e consoantes.
// a parte (/\s/g, '') significa que para cada '\s' = espaço dentro da string deve ser colocado no lugar '' que é sem espaço, o 'g' significa que deve ser feito globalmente durante toda a string e não só na primeira
// aparição de espaço e o '/ /' é o delimitador da operação do que deve ser substituído.

const palavraOuFrase = prompt('Digite uma palavra ou frase: ');
const palavraSemEspacos = palavraOuFrase.replace(/\s/g, '');
let numeroVogais = 0;
const stringDeVogais = 'aeiouàáãâéèêíìîóòõôúùû';


for(let i = 0; i < palavraSemEspacos.length; i++){
  if(stringDeVogais.includes(palavraSemEspacos[i].toLowerCase())){
    numeroVogais++;
  }
}
const numeroDeConsoantes = palavraSemEspacos.length - numeroVogais;

console.log(`A string '${palavraOuFrase}' tem ${numeroVogais} vogais.`);
console.log(`A string '${palavraOuFrase}' tem ${numeroDeConsoantes} consoantes.`);

// 38- Verificação de número positivo, negativo ou zero

// Peça ao usuário para digitar um número.
// Use uma estrutura condicional para verificar se o número é positivo, negativo ou zero.
// Exiba uma mensagem indicando a natureza do número.

// Programa simples feito com um laço condicional onde a primeira condição é se o número é positivo (maior do que 0), a segunda é se o número é igual a 0 e caso não seja nenuma dessas condições o número será
// negativo.

const numUsuario = parseFloat(prompt('Digite um número: '));
if(numUsuario > 0){
  console.log(`O ${numUsuario} é um número positivo.`);
} else if(numUsuario === 0){
  console.log(`O número digitado é zero.`);
} else{
  console.log(`O ${numUsuario} é negativo.`);
}

// 39- Sistema de bilhete de cinema

// Peça ao usuário para digitar sua idade e se tem cartão de estudante (responda com "sim" ou "não").
// Use uma estrutura condicional para determinar o preço do bilhete de cinema de acordo com as regras: menores de 18 anos pagam $5, estudantes pagam $8 e os demais pagam $10.
// Exiba o preço do bilhete.

// O programa pede ao usuário para entrar com a sua idade e logo em seguida pergunta se ele possui cartão de estudante ou não. Como o valor do preço para menores de 18 anos é menor do que o para estudantes,
// foi delimitado na condição que no caso do usuário ser menor ele automaticamente paga $5 independente de estudante ou não. Já no caso da idade maior ou igual a 18 E com carteira de estudante ele pagaria
// $8 e no caso de idade maior ou igual a 18 e sem carteirinha o preço é $10.

const idadeUsuario = parseInt(prompt('Digite a sua idade: '));
const cartaoEstudantil = prompt('Você possui cartão de estudante? (sim ou não): ');
if(idadeUsuario < 18){
  console.log('O valor a ser pago pelo bilhete do cinema é: $5');
}else if(idadeUsuario >= 18 && (cartaoEstudantil.toLowerCase() === 'sim' || cartaoEstudantil.toLowerCase() === 's')){
  console.log('O preço a ser pago pelo bilhete do cinema é: $8');
} else{
  console.log('O preço a ser pago pelo bilhete do cinema é: $10');
}

// 40- Verificação de palíndromo

// Peça ao usuário para digitar uma palavra ou frase.
// Use uma estrutura condicional para verificar se a entrada é um palíndromo (lê-se igual de trás para frente e de frente para trás).
// Exiba uma mensagem indicando se a entrada é um palíndromo ou não.

// O programa inicia pedindo a string para o usuário, seja palavra ou frase. Em seguida é criada uma variável que vai colocar a primeira variável em letras minúsculas e eliminar os caractéres especiais
// e espaços em branco da frase se tiver. A terceira variável joga a primeira em um array inverte os caractéres dela e depois transforma novamente em uma string. Por fim é feito um laço condicional que
// onde se a segunda variável for igual a terceira, então a frase será um palíndromo, caso contrário não.

const palavraFrase = prompt('Digite uma palavra ou uma frase: ');
const palavraFraseMinusculoSemCaracteresEspeciais = palavraFrase.toLowerCase().replace(/[`´&-\/\\#,+()$~%.'":*?<>{}@_!|;^\[\]\s]/g,'');
const palavraFraseContraria = [...palavraFraseMinusculoSemCaracteresEspeciais].reverse().join('');

if(palavraFraseMinusculoSemCaracteresEspeciais === palavraFraseContraria){
  console.log(`A string: '${palavraFrase}' é um palíndromo`);
} else{
  console.log(`A string: '${palavraFrase}' não é um palíndromo`);
}