
let vetor = [];

function adicionarValor() {
    const valor = Number(document.getElementById('valor').value);

    if (!isNaN(valor)) {

      vetor.push(valor);

      const tabela = document.getElementById('tabelaValores').getElementsByTagName('tbody')[0];

      const novalinha = tabela.insertRow();
      const celula = novalinha.insertCell(0);
      celula.textContent = valor;

      document.getElementById('valor').value = '';
      document.getElementById('valor').focus();


    }

function multiplicar() {
  const tabela = document.getElementById('tabelaNumeros').getElementsByTagName('tbody')[0];

    vetor.forEach(valor => {
        if (valor % 2 === i) {
          const novalinha = tabela.insertRow();
          const celula = novalinha.insertCell(0);
          celula.textContent = valor;
        }
    });

  }
 }
