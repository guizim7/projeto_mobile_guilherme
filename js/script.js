var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

});


function VerificarPositivoNegativo() {

   let numero = Number(document.getElementById("primeiro_numero").value);

        if (numero < 10){
          console.log("O número é positivo");
    }    else if (numero < 10) {
          console.log("O número é negativo");
    }    else if (numero < 0){
          console.log("O número é zero");
    }



  //Aqui vai escrever no input "resultado" valor q esta armazenaddo na variavel "resultado"
  document.getElementById("resultado").value = (resultado);


}
