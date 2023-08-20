// 1- Crie uma função que calcule a soma de dois números

// Função simples para somar dois números e apresenta-los no console. Foi utilizado o template string para fazer a operação de soma dentro do console.

/**
 * Função criada para somar dois números
 * @param {number} numero1 - primeiro número a ser somado
 * @param {number} numero2 - segundo número a ser somado
 * @returns {number} - O resultado da soma dos parâmetros numero1 e numero2
 */
function soma(numero1, numero2){
    return numero1 + numero2;
}
console.log(soma(2,5)); //Exemplo de uso.

// 2- Escreva uma função que calcule o produto de três números

// Neste exemplo foi utiliza uma constante para passar a função. A função recebe 3 valores, realiza o produdo e retorna este valor.

/**
 * Função criada para obter o produto de três números
 * @param {number} numero1 - primeiro número do produto
 * @param {number} numero2 - segundo número do produto
 * @param {number} numero3 - terceiro número do produto
 * @returns {number} - resultado do produto dos três números
 */
const produtoTresNumeros = (numero1, numero2, numero3) => {
    const produto = numero1 * numero2 * numero3;
    return produto;
}
console.log(produtoTresNumeros(2,4,2)); //Exemplo de uso.

// 3- Crie uma função que verifique se um número é par ou ímpar

// Função que verifica o número que o usuário utiliza como entrada e retorna no console se o número é par ou ímpar.

/**
 * Função criada para verificar se um número é par ou ímpar
 * @param {number} numero - numero para verificar se é par ou ímpar 
 * @returns - resultado se é ímpar ou par no console
 */
function parOuImpar(numero){
    if(numero % 2 === 0){
        return console.log(`O ${numero} é par!`);
    } else {
        return console.log(`O ${numero} é ímpar!`);
    }
}

parOuImpar(3);  //Exemplos de uso;
parOuImpar(28); 

// 4- Escreva uma função que inverta uma string (por exemplo, "hello" se torna "olleh")

// A função recebe uma string, converte ela em um array, inverte os caracteres e transforma novamente em uma string.

/**
 * Função criada para inverter uma string
 * @param {string} string - string para ser invertida 
 * @returns - string invertida
 */
function inversaoString(string){
    return string.split('').reverse().join('');
}
console.log(inversaoString('hello')); // Exemplo de uso

// 5- Crie uma função que retorne o maior valor de um array de números

// A função recebe um array de números e retorna o maior valor entre eles. Ela compara os elementos do array entre si, comparando um elemento com o outro, se um for maior que o outro ele guarda esse valor e 
// retorna ele ao fim do reduce. No final da função ele retorna o elemento que é o maior.

/**
 * Função para encontrar o maior valor de um array de números
 * @param {number []} array - array de números
 * @returns {number} - maior valor do array
 */
function maiorValorNoArray(array){
    const maiorValor = array.reduce((maior, numeros) => {
        if(numeros > maior){
            maior = numeros;
        }
        return maior;
    }, 0)
    return maiorValor;
}
console.log(maiorValorNoArray([1,2,6,12,53])); // Exemplo de uso

// 6- Escreva uma função que calcule a média de um array de números

// A função utiliza o reduce para somar os elementos do array e depois divide esse valor pelo comprimento do array para encontrar a média do array.

/**
 * Função para calcular média de um array de números
 * @param {number []} array - array de números que deseja saber a média 
 * @returns {number} - média dos elementos do array
 */
function mediaDeArray(array){
    const somaDoArray = array.reduce((soma, elemento) => {
        return soma + elemento;
    });
    return somaDoArray/array.length;
}

console.log(mediaDeArray([4,5,7])); //Exemplo de uso

// 7- Crie uma função que verifique se uma palavra é um palíndromo (lê-se igual de trás para frente)

// A função recebe uma string, cria uma variável para colocar todas as letras da string em minúscula, cria uma outra variável para inverter a string minúscula e compara as duas.
// Se forem iguais apresenta uma string dizendo que a string apresentada é um palíndromo e caso contrário não é um palíndromo. 

/**
 * Função para verificar se uma palavra é um palíndromo ou não.
 * @param {string} string - Palavra que deve ser verificada se é uma palíndromo ou não
 * @returns {string} - Mensagem de verificação se a string é um palíndromo ou não.
 */
function palindromoOuNao(string){
    const stringMinuscula = string.toLowerCase();
    const stringInvesa = stringMinuscula.split('').reverse().join('');
    if(stringMinuscula === stringInvesa){
        return `A "${string}" é um palíndromo`;
    } else {
        return `A "${string}" não é um palíndromo`;
    }
}
console.log(palindromoOuNao('omo')); //Exemplo de uso

// 8- Escreva uma função que conte quantas vezes uma determinada letra aparece em uma string

// A função recebe uma string e uma letra, coloca ambas em minúsculo, cria uma variável contador para contar quantas vezes a letra aparece na string. É criado um laço de repetição para comparar a letra com todas
// as letras da string, se forem iguais o contador é aumentado. No final a função retorna uma string dizendo quantas vezes a letra apareceu na string.

/**
 * Função que apresenta quantas vezes uma letra apareceu em uma string
 * @param {string} string - string de entrada que deseja saber quantas vezes certa letra aparece nela
 * @param {character} letra - letra que deseja saber a quantidade na string de entrada
 * @returns 
 */
function quantasVezesALetraApareceNaString(string, letra){
    const stringMinuscula = string.toLowerCase();
    const letraMinuscula = letra.toLowerCase()
    let contador = 0;
    for(let i = 0; i < stringMinuscula.length; i++){
        if(letraMinuscula === stringMinuscula[i]){
            contador++;
        }
    }
    return `A string "${letra}" apareceu ${contador} ${(contador) === 1 ? "vez" : "vezes"} na string "${string}"`;
}
console.log(quantasVezesALetraApareceNaString("amarelinha","A")); // Exemplo de uso

// 9- Crie uma função que calcule o fatorial de um número

// O programa recebe um número, cria uma variável que inicia em um. É gerado um loop de repetição até que o incremento seja igual ao número de entrada, dentro do loop o multiplicador é multiplicado com o incremento
// assim teremos o fatorial do número de entrada. Por fim é retornado ao usuário o valor de entrada e o fatorial desse número.

/**
 * Função que calcula o fatorial de um número
 * @param {number} number - número inteiro de entrada que deseja saber o fatorial. 
 * @returns {number} - resultado do fatorial do número de entrada.
 */
function calcularFatorial(number){
    let multiplicador = 1;
    for(let i = 1; i <= number; i++){
        multiplicador *= i;
    }
    return `O fatorial do número "${number}" é "${multiplicador}"`;
}
console.log(calcularFatorial(10)); //Exemplo de uso

// 10- Escreva uma função que converta graus Celsius para Fahrenheit

// A função recebe um valor de temperatura em graus Celsius e transforma em graus Fahrenheit aplicando a equação. No final retorna uma string apresentando as duas temperaturas.

/**
 * Função de conversão entre graus Celsius para Fahrenheit
 * @param {number} celsius - valor da temperatura em graus Celsius que deseja ser convertida em graus Fahrenheit
 * @returns {number} - resultado da conversão de graus Celsius para Fahrenheit
 */
function celsiusParaFahrenheit(celsius){
    const farenheit = (celsius*9/5) + 32;
    return `${celsius}°C é igual a ${farenheit.toFixed(2)}°F`;
}
console.log(celsiusParaFahrenheit(30.6)); //Exemplo de uso

// 11- Crie uma função que encontre o valor mínimo e máximo em um array de números

// A função utiliza o reduce duas vezes para encontra o maior valor e o menor valor de um array através de um laço condicional onde são verificados todos os valores dentro do array.

/**
 * Função para encontrar o maior e o menor valor dentro de um array.
 * @param {number[]} array - array com os números que deseja saber o maior e o menor valor
 * @returns {number} - Retorna o maior e o menor valor do array 
 */
function valorMinimoEMaximo(array){
    const minimo = array.reduce((menor, numeros) => {
        if(numeros < menor){
        menor = numeros;
        }
        return menor;
    },0); 
    const maximo = array.reduce((maior, numeros) => {
        if(numeros > maior){
            maior = numeros;
        }
        return maior;
    },0);
    return `O valor máximo do array é "${maximo}" e o valor mínimo é "${minimo}"`;
}
console.log(valorMinimoEMaximo([1,2,-11,4,56,98,3,2,5,6])); //Exemplo de uso

// 12- Escreva uma função que calcule a sequência de Fibonacci até um determinado número de termos

// A função recebe um delimitador, dentro da função são criadas duas variáveis que são os termos iniciais da sequência. Um loop é criado para o próximo termo ser igual a soma dos dois anteriores
// até o delimitador informado na chamada da função.

/**
 * Função para calcular a sequência de Fibonacci até determinado número
 * @param {number} number - número até onde a sequência de Fibonacci irá
 * @returns {number} - todos os números da sequência de Fibonacci até o limitador 
 */
function sequenciaDeFibonacci(number){
    let termoAtual = 1;
    let proximoTermo = 1;
    while(termoAtual <= number){
        console.log(termoAtual);
        const temp = termoAtual + proximoTermo;
        termoAtual = proximoTermo;
        proximoTermo = temp;
    }
}

sequenciaDeFibonacci(200); //Exeplo de uso

// 13- Crie uma função que verifique se um número é primo

// A função recebe um número, é criada uma variável booleana para saber se o número é primo ou não. Primeiro checa se o número é positivo maior que 1 através de um laço condicional se não for a variável booleana
// fica falsa, após essa condição é feito um loop dividindo o número por todos os números menores que ele, se for divisível a variável booleana fica falsa, caso contrário o número será primo.

/**
 * Função para verificar se um número é primo
 * @param {number} number - número que o usuário deseja saber se é primo
 * @returns {boolean} - retorna se é verdade que o número é primo ou não 
 */
function numeroPrimo(number){
    let EPrimo = true;
    if (number <= 1){
        EPrimo = false;
    }
    for(let i = 2; i < number; i++){
        if(number % i === 0){
            EPrimo = false;
        }
    }
    
    if(EPrimo){
        console.log(`O número ${number} é um número primo.`);
    } else{
        console.log(`O número ${number} não é um número primo.`);
    }
}
numeroPrimo(66); //Exemplo de uso

// 14- Escreva uma função que remova os elementos duplicados de um array

// A função recebe um array de números, utiliza a função .reduce() para verificar todos os elementos do array e jogar aqueles que não são repetidos em um novo array.

/**
 * Função que recebe um array de números e retorna o array sem elementos repetidos.
 * @param {number[]} array - array de números  
 * @returns {number[]} - array de números sem elementos duplicados
 */
function removeDuplicados(array){
    return array.reduce((arraySemDuplicados, elemento) => {
        if(!arraySemDuplicados.includes(elemento)){
            arraySemDuplicados.push(elemento);
        }
        return arraySemDuplicados;
    }, []);
}
console.log(removeDuplicados([1,2,3,4,4,4,5,6,6,7])); // Exemplo de uso

// 15- Crie uma função que ordene um array de números em ordem crescente

// A função utiliza a função .sort() para ordenar os números em ordem cresce.

/**
 * Função para ordenar um array em ordem crescente
 * @param {number[]} array - array de números para ser ordenado em ordem crescente 
 * @returns {number[]} - retorna o array em ordem crescente
 */
function ordemCrescenteArray(array){
    return array.sort((a, b) => a - b);
}
console.log(ordemCrescenteArray([10,2,5,6,32,3,1,0,54])); //Exemplo de uso

// 16- Escreva uma função que retorne o número de dias entre duas datas

// A função recebe duas datas, cria uma variável para saber o valor de um dia em milisegundos, calcula a diferença em milisegundos entre as datas e retorna a divisão da diferença das datas em milisegundos 
// pela quantidade de milisegundos de um dia.

/**
 * Função para calcular a diferença de dias entre duas datas
 * @param {string} date1 - Primeira data a ser comparada
 * @param {string} date2 - Segunda data a ser comparada
 * @returns {number} - Diferença entre a primeira e a segunda data
 */
function calcularDiferençaDeDias(date1, date2){

    const umDiaEmMilisegundos = 24 * 60 * 60 * 1000; 
    const diferencaEmMilisegundos = Math.abs(date2 - date1);

    return Math.floor(diferencaEmMilisegundos / umDiaEmMilisegundos);
}

const primeiraData = new Date('2021-02-21'); // Exemplo de data
const segundaData = new Date('2021-02-24'); // Exemplo de data

console.log(calcularDiferençaDeDias(primeiraData, segundaData)); // Exemplo de uso

// 17- Crie uma função que calcule o raio de um círculo com base em sua área

// A função recebe a área do círculo e através da fórmula aritmética da área da circunferência retorna ao valor do raio.

/**
 * Função para calcular o raio de um círculo tendo a área desse círculo como entrada
 * @param {number} number - área do círculo em que o usuário deseja saber o valaor do raio.
 * @returns {number} - raio do círculo
 */
function calcularRaioCirculo(number){
    return Math.sqrt(number/Math.PI).toFixed(2);
}

console.log(calcularRaioCirculo(1256.64)); //Exemplo de uso.

// 18- Escreva uma função que encontre o segundo maior valor em um array de números

// A função recebe o array de números, utiliza a função sort() para ordenar os números e retorna o segundo maior valor.

/**
 * Função para encontrar o segundo maior valor em um array de números
 * @param {number[]} array - array com os valores 
 * @returns {number} - segundo maior valor dentro do array
 */
function segundoMaior(array){
    const arraySort = array.sort((a,b) => a - b);
    return arraySort[arraySort.length-2];
}
console.log(segundoMaior([10,2,5,6,32,3,1,0,53,54])); //Exemplo de uso

// 19- Crie uma função que converta um valor em dólares para outra moeda com base em uma taxa de câmbio

// A função recebe a quantidade de dólares e o valor da taxa de câmbio. Se forem menores que 0 a função retorna uma mensagem, caso contrário retorna o valor convertido.

/**
 * Função para converter um valor em dólares com base na taxa de câmbio de outra moeda
 * @param {number} dolar - valor em dólares à ser convertido 
 * @param {number} taxa - taxa de câmbio em que os dólares devem ser convertidos
 * @returns {number} - Valor total dólares convertidos com a taxa de câmbio informada
 */
function cambioDolar(dolar, taxa){
    if(dolar <= 0 || taxa <= 0){
        return 'A taxa ou o valor em dólares está incorreto.'
    }
    return dolar*taxa;
}
console.log(cambioDolar(100, 4.97)); // Exemplo de uso

// 20- Escreva uma função que verifique se duas strings são anagramas (contêm as mesmas letras, mas em ordens diferentes)

// A função recebe duas strings, primeiro faz a comparação se elas são iguais, caso seja retorna que não são anagramas. Caso não sejam iguais, são criadas duas variáveis
// que pega cada uma das strings colocam todas as letras em minúsculas, coloca essa string em um array, ordena esse array em ordem alfabética e transforma esse array em 
// uma string novamente. Após isso é feita a comparação entre as strings, se elas forem iguais significa que são anagramas, caso contrário não.

/**
 * Função para verificar se duas strings são anagramas ou não
 * @param {string} string1 - primeira palavra que deseja comparar
 * @param {string} string2 - segunda palavra que deseja comparar
 * @returns {string} - resposta se as strings são anagramas ou não
 */
function anagrama(string1, string2){
    if(string1.toLowerCase() === string2.toLowerCase()){
        return 'Não é um anagrama, as strings são iguais.'
    }
    const stringUmSort = string1.toLowerCase().split('').sort().join('');
    const stringDoisSort = string2.toLowerCase().split('').sort().join('');
    if(stringUmSort === stringDoisSort){
        return 'As strings são anagramas'
    } else{
        return 'As strings não são anagramas'
    }
}
console.log(anagrama('carro','corar')); // Exemplo de uso