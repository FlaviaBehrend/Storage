document.getElementById("formcadastro").addEventListener("submit", function(event)/*quando clicar o botao, o event é um objeto com informação de eventos que é enviado pelo navegador*/{/*Submeter dados e não carregar outra pág */ 
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
})
