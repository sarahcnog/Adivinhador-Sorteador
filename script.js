// informacoes de entrada

var numeroSecreto = parseInt(Math.random() * 11);

// --------------------------------------

// programa referente ao Adivinhador

function Resetar() {
  numeroSecreto = parseInt(Math.random() * 11);
  var elementoResultado = document.getElementById("resultadoMentalista");
  elementoResultado.innerHTML = "";
}

function Chutar() {
  var elementoResultado = document.getElementById("resultadoMentalista");
  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Escolha um número entre 0 e 10";
  } else {
    if (chute > numeroSecreto) {
      elementoResultado.innerHTML =
        "Você errou. O número secreto é menor do que " +
        chute +
        "! Tente de novo.";
    } else {
      elementoResultado.innerHTML =
        "Você errou. O número secreto é maior do que " +
        chute +
        "! Tente de novo.";
    }
  }
}
// --------------------------------------

// programas referente ao Sorteador

function Sortear() {
  var elementoNumber1 = document.getElementById("resultadoSorteador");
  var intervalo1 = parseInt(document.getElementById("number1").value);
  var intervalo2 = parseInt(document.getElementById("number2").value);

  var numeroSorteado =
    Math.floor(Math.random() * (intervalo2 - intervalo1 + 1)) + intervalo1;

  var elementoResultado = document.getElementById("resultadoSorteador");
  elementoResultado.innerHTML = "O número sorteado é " + numeroSorteado + "!";
}