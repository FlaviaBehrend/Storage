document.getElementById("formcadastro").addEventListener("submit", function(event)/*quando clicar o botao, o event é um objeto com informação de eventos que é enviado pelo navegador*/{/*Submeter dados e não carregar outra pág */ 
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    //Atribui dadosn de nome e idade paea um objeto aluno
    var aluno = {nome:nome, idade:idade}
    var lista_alunos = JSON.parse(localStorage.getItem('relacaoalunos'/*nome do arquivo do navegador */))||[]//converte  o que esta no arquivo em uma lista
})
