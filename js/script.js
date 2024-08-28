
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
}

function multiplicar(){
  const tabelaValor = document.getElementById('tabelaMultiplica').getElementsByTagName('tbody')[0];

  for (let i = 0; i < vetor.length; i++){
    const valor = vetor[i];
      const novaLinha = tabelaValor.insertRow();
      const celula = novaLinha.insertCell(0);
      celula.textContent = valor * 2;

  }
 }
