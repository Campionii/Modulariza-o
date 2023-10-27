// Módulo de entrada de dados
const readline = require('readline');
let validarIdade = require('./idade')
let validarEstado = require('./estado')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function obterDados() {
  rl.question("Digite seu nome: ", (nome) => {
    rl.question("Digite sua idade: ", (idade) => {
      rl.question("Digite seu estado em siglas (ex: SP) : ", (estado) => {
        validarIdadeEEstado(nome, idade, estado);
        rl.close();
      });
    });
  });
}


function validarIdadeEEstado(nome, idade, estado) {
  console.log("Nome: " + nome);

  novoEstado = estado.toUpperCase()

console.log(validarIdade(idade))
console.log(validarEstado(novoEstado))

}


obterDados();
