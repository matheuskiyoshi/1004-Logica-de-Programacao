// ## Callback

// Exercício 1: Callback Básico
// Crie uma função chamada executarCallback que recebe uma função de callback como argumento e a executa.

// A função exemploCallBack passa uma função de callback como argumento, executa o primeiro console.log e depois chama a função de callback e executa ela em seguida.

function exemploCallBack(callback){
    setTimeout(() => {
        console.log('Tarefa finalizada.');
        callback();
    }, 2000);
}

function funcaoDeCallback(){
    console.log('CallBack sendo chamado.')
}

exemploCallBack(funcaoDeCallback);

// Exercício 2: Manipulação de Array
// Crie uma função chamada dobrarNumeros que recebe um array de números e uma função de callback. A função dobrarNumeros deve aplicar a função de callback a cada elemento do array e retornar um novo array com os elementos dobrados.

// A função pede um array de entrada e a função de callback que realizará a equação para dobrar cada elemento do array de entrada.

/**
 * Função para dobrar números através de uma função callback
 * @param {number[]} array - array de números para serem dobrados 
 * @param {function} callback - função de callback para dobrar os números
 * @returns {number[]} - array de números dobrados
 */
function dobrarNumeros(number, callback){
    const arrayDobrado = [];
    for(let i = 0; i < number.length; i++){
        const elementoDobrado = callback(number[i]);
        arrayDobrado.push(elementoDobrado);
    }
    return arrayDobrado;
}
function dobrar(number){
    return number*2;
}

console.log(dobrarNumeros([2,5,12,32],dobrar)); // Exemplo de uso

// Exercício 3: Filtragem com Callback
// Crie uma função chamada filtrarPalavras que recebe um array de palavras e uma função de callback. A função filtrarPalavras deve retornar um novo array contendo apenas as palavras que atendem ao critério da função de callback.

// A função recebe uma string de strings e chama a função de callback para executar uma função sobre cada elemento dessa string. A string callback verifica se a string recebida tem mais do que 4 caracteres
// se tiver ela retorna essa string com os caracteres invertidos.

/**
 * Função para receber um array de palavras e retornar as strings com os caracteres invertidos, apenas as strings de entrada que tenham mais do que 4 caracteres
 * @param {string[]} array - array de palavras 
 * @param {function} callback - a função de callback verifica se a string tem mais de 4 letras, se tiver ela inverte a string 
 * @returns 
 */
function filtrarPalavras(array, callback){
    const arrayFiltrado = [];

    for(let i = 0; i < array.length; i++){
        const resultado = callback(array[i]);
        if(resultado !== undefined){
            arrayFiltrado.push(resultado);
        }
    }
    return arrayFiltrado;
}
function inverterString(string){
    let stringInvertida;
    if(string.length > 4){
       stringInvertida = string.split('').reverse().join('');
    }
    return stringInvertida;
}

console.log(filtrarPalavras(['manga','banana','uva','abacaxi','maça','goiaba'],inverterString)); // Exemplo de uso

// Exercício 4: Ordenação com Callback
// Crie uma função chamada ordenarNumeros que recebe um array de números e uma função de callback para determinar a ordem de ordenação. A função ordenarNumeros deve retornar um novo array com os números ordenados de acordo com o critério da função de callback.

// A função recebe um array de números e uma função de callback. A função pede para retornar um sort do array e dentro do sort passa a função de callback que compara os elementos e assim os ordena. 

/**
 * Função para ordenar array de números em ordem crescente
 * @param {number[]} array - array com os números que devem ser ordenados em ordem crescente 
 * @param {function} callback  - função para comparar os números do array
 * @returns {number[]} - array de números em ordem crescente
 */
function ordernarNumeros(array, callback){

   return array.sort(callback);
}
function compararNumeros(a,b){
    return a - b;
}
console.log(ordernarNumeros([4,7,87,64,75,4,3,5,2], compararNumeros));

// Exercício 5: Timer com Callback
// Crie uma função chamada executarAposTempo que recebe uma função de callback e um tempo em milissegundos. A função executarAposTempo deve agendar a execução da função de callback após o tempo especificado.

// A função passa uma função de callback que retorna uma mensagem depois da quantidade de milissegundos que é colocado como um dos parâmetros.

/**
 * Função que chama uma função de callback de acordo com o número em milissegundos que foi pré determinado
 * @param {function} callback - uma função com uma string  
 * @param {number} tempoEmMilissegundos - tempo que o usuário deseja esperar até que a função de callback seja chamada
 */
function executarAposTempo(callback, tempoEmMilissegundos) {
    setTimeout(callback, tempoEmMilissegundos);
}
  
function minhaFuncao() {
    console.log('Esta função foi executada após um certo tempo.');
}
  
executarAposTempo(minhaFuncao, 2000); //Exemplo de uso

// ## Promise

// Exercício 1: Criando uma Promise Simples
// Crie uma Promise simples que retorna uma mensagem de sucesso após 2 segundos. Use a função setTimeout para simular um atraso.

// A função cria uma Promisse que recebe dois parâmetros, resolve e reject. Dentro da função passada para a promisse existe uma função setTimeout que está configurada para esperar 2000 milissegundos para ser executada
// quando executada ela chama o resolve com a mensagem de Sucesso. Feita a função, são utilizados os métodos then e catch para lidar com o resultado da Promise. No caso da Promise ser resolvida a função entra no método
// .then e retorna a mensagem do Resolve, caso contrário entra no catch e retorna a mensagem de erro do Reject. 

function promiseSimples(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('Sucesso!');
        },2000);
    });
}

promiseSimples()
    .then(function(mensagem){
        console.log(mensagem);
    })
    .catch(function(erro){
        console.error(erro);
    });

// Exercício 2: Tratamento de Erro em Promise
// Crie uma Promise que simula uma operação que pode falhar. Se a operação for bem-sucedida, resolva a Promise com uma mensagem de sucesso. Caso contrário, rejeite-a com uma mensagem de erro. (Lembre-se de usar o reject)

// A função recebe um parâmetro, simulação, e cria uma Promisse que recebe dois parâmetros, resolve e reject. Dentro da função passada para a promisse existe uma função setTimeout que está 
// configurada para esperar 2000 milissegundos para ser executada. Dentro da função setTimeout existe um laço condicional que recebe o valor do parâmetro incial recebido pela função, se o valor for 'true'
// o resolve do Promise envia mensagem de operação bem sucedida, se for 'false' a Promise entra com o reject e a mensagem de erro. Depois de feita a função com a Promise é utilizado o .then e .catch para 
// ver o comportamento da função recebendo os parâmetros 'true' e 'false'.

function promiseQueFalha(simulacao){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(simulacao){
                resolve('Operação bem-sucedida');
            }else{
                reject('Erro na Operação');
            }
        }, 2000);
    });
}

promiseQueFalha(true)
    .then(function(mensagem){
        console.log(mensagem);
    })
    .catch(function(erro){
        console.error(erro);
    });

promiseQueFalha(false)
    .then(function(mensagem){
        console.log(mensagem);
    })
    .catch(function(erro){
        console.error(erro);
    });

// Exercício 3: Encadeamento de Promises
// Crie um encadeamento de Promises que realiza uma sequência de operações assíncronas. Por exemplo, faça uma requisição a uma API, processe os dados e, em seguida, realize outra operação.

// Foram criadas 3 funções que retorna à Promises. Dentro das funções foram criadas mensagens que são passadas pelo console simulando o processo de requisição, processamento e outra operação com os dados
// No final é feito o encadeamento das chamadas assíncronas das funções.

function requisicaoApi(){
    console.log('Iniciando requisição da API...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dadosApi = {mensagem: 'Dados da API'};
            console.log('Requisição da API concluída.')
            resolve(dadosApi);
        },2000);
    });
}

function processarDados(dados){
    console.log('Processando os dados da API...')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dadosProcessados = {...dados, processado: true};
            console.log('Processamento finalizado.')
            resolve(dadosProcessados);
        }, 2000);
    });
}

function mensagemConcluida(dados){
    console.log('Iniciando outra operação...')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Outra operação concluída.')
            resolve('Operação concluída.');
        }, 1000);
    });
}

requisicaoApi()
    .then(processarDados)
    .then(mensagemConcluida)
    .then(resultado => {
        console.log('Todas as operações foram concluídas.');
    })
    .catch(erro => {
        console.error('Ocorreu o erro: ', erro);
    });

// Exercício 4: Promessa com Atraso Aleatório
// Crie uma função que retorna uma Promise que será resolvida após um tempo aleatório entre 1 e 5 segundos. Use a função setTimeout e Math.random() para criar esse atraso variável.

// A função cria uma variável com um valor aleatório entre 5000 e 1000 milissegundos, depois retorna a uma promisse que tras uma mensagem no resolve com o tempo de atraso que foi colocado no setTimeout()
// Por fim a função é chamada e passado os métodos then e catch.

function atrasoAleatório(){
    const tempoAleatorio = Math.floor(Math.random()*5000) + 1000;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise com atraso aleatório de ${tempoAleatorio/1000} segundos`);
        }, tempoAleatorio);
    });
}
atrasoAleatório()
    .then((mensagem) => {
        console.log(mensagem);
    })
    .catch((erro) => {
        console.error(erro);
    });

// Exercício 5: Rejeição de Promessa
// Crie uma função que retorna uma Promise que será rejeitada após um tempo aleatório entre 1 e 3 segundos.

// A função cria uma variável com um valor aleatório entre 3000 e 1000 milissegundos, depois retorna a uma promisse que tras uma mensagem no reject com o tempo de atraso que foi colocado no setTimeout()
// Por fim a função é chamada e passado os métodos then e catch.

function rejeicaoAleatoria(){
    const tempoAleatorio = Math.floor(Math.random()*3000) + 1000;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`Promise com atraso aleatório de ${tempoAleatorio/1000} segundos.`);
        }, tempoAleatorio);
    });
}
rejeicaoAleatoria()
    .then((mensagem) => {
        console.log(mensagem);
    })
    .catch((erro) => {
        console.error(erro);
    })

// ## async e await 

// Exercício 1: Função Assíncrona Simples
// Crie uma função assíncrona que retorna uma mensagem após um atraso de 2 segundos.

// Foi criada uma função assíncrona, dentro da função é utilizado um await para esperar até que a Promise seja resolvida. A promisse contém uma função setTimeout que espera 2 segundos até retornar uma mensagem.
// No final é chamada a função e utilizado o .then() para lidar com a mensagem que irá aparecer.

async function mensagemAssincrona() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return "Mensagem após 2 segundos de atraso";
  }
  
  mensagemAssincrona().then(mensagem => {
    console.log(mensagem); 
  });

// Exercício 2: Tratamento de Erros com async/await
// Crie uma função assíncrona que simula uma operação que pode falhar. Use try e catch para lidar com erros.

// A função assíncrona inicia com um try, primeiro aparece uma mensagem iniciando a operação, depois é utilizado um await para pausar a função assíncrona e esperar que a promisse seja resolvida, dentro da promisse
// existe uma função setTimeout com uma variável que pode retornar true ou false, se for true a operação usa um resolve para trazer que a mensagem foi bem sucedida, caso for false retorna um reject com a mensagem
// de erro. Depois do try é utilizado um catch para pegar qualquer erro que aconteça. Para chamar a função é utilizado o método then e catch.

async function operacaoQuePodeFalhar() {
    try {
      console.log('Iniciando operação...')  
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          const operacaoBemSucedida = Math.random() < 0.5;
          if (operacaoBemSucedida) {
            resolve("Operação bem-sucedida!");
          } else {
            reject(new Error("A operação falhou."));
          }
        }, 2000);
      });
      return "Operação concluída com sucesso!";

    } catch (error) {
      return `Erro: ${error.message}`;
    }
  }
  
  operacaoQuePodeFalhar()
    .then(resultado => {
      console.log(resultado);
    })
    .catch(erro => {
      console.error(erro);
    });

// Exercício 3: Encadeamento com async/await
// Crie uma série de funções assíncronas que dependem dos resultados anteriores.

// Foram criadas 3 funções assíncronas onde a primeira retorna a uma string, a segunda tem uma constante que espera a primeira função ser chamada e retorna uma string e o resultado da primeira e a terceira função
// tem uma constante que chama e espera a segunda função ser executada. No final são utilizados os métodos .then() e .catch();

async function mensagemUm() {
    return "Primeira função.";
}

async function mensagemDois() {
    const resultadoFuncaoUm = await mensagemUm();
    return `Resultado da Função Dois usando ${resultadoFuncaoUm}`;
}
  
async function funcaoAssincronaTres() {
    const resultadoFuncaoDois = await mensagemDois();
    return `Resultado da Função Três usando ${resultadoFuncaoDois}`;
}

funcaoAssincronaTres()
    .then(resultado => {
        console.log(resultado);
    }).catch(erro => {
        console.error(erro);
    });

// Exercício 4: Consumindo API com async/await
// Crie uma função que utiliza fetch com async e await para buscar dados de uma API.

// A função assíncrona passa a url como parâmetro, dentro da função tem um try com uma variável que pausa a função para fazer o fetch da url, se conseguir acessar a api e retornar com o dados ela mostra os dados
// recebidos, caso contrário ela traz o erro que encontrou. No final é criada uma variável com a url da Api que deve ser consumida e utilizados os métodos then e catch para executar a função assíncrona.

async function consumindoAPI(url) {
    try {
      const resposta = await fetch(url);
  
      if (!resposta.ok) {
        throw new Error(`Erro ao buscar dados da API. ${resposta.status}`);
      }
      const dados = await resposta.json();
      return dados;

    } catch (erro) {
      console.error("Ocorreu um erro: ", erro);
      throw erro; 
    }
  }
  const urlAPI = "https://api.adviceslip.com/advice"; // Exemplo de API
  consumindoAPI(urlAPI)
    .then(dados => {
      console.log("Dados da API: ", dados);
    })
    .catch(erro => {
      console.error("Erro ao buscar dados da API: ", erro);
    });