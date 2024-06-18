var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

});


function VerificarPositivoNegativo() 

    if (numero > 0){
      print("O número é positivo");
    }    else if (numero < 0) {
        print("O número é negativo");
    }    else if (numero< 0){
        print("O número é zero");
    }


  let primeiro_numero = Number (("primeiro_numero").value);

  var numero = 10;

  var resultado = VerificarPositivoNegativo(primeiro_numero);

  //Aqui vai escrever no input "resultado" valor q esta armazenaddo na variavel "resultado"
  document.getElementById("resultado").value = resultado;


}
