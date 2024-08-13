
let vetor = [];

function adicionarValor() {
    const valor = Number(document.getElementById('valor').value);
    if (!isNaN(valor)) {
      vetor.push(valor);

      const valor = Number(document.getElementById('tabelaValores')).getElementByTagName('tbody')[0];
      const novalinha = tabela.insertrow();
      const celula = novalinha.insertCell(0);
      celula.textcontent = valor;

      document.getElementById('valor').value='';
      document.getElementById('valor').focus();
    }
}
