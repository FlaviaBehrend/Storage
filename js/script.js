document.getElementById("formcadastro").addEventListener("submit", function(event)/*quando clicar o botao, o event é um objeto com informação de eventos que é enviado pelo navegador*/{/*Submeter dados e não carregar outra pág */ 
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    //Atribui dadosn de nome e idade paea um objeto aluno
    var aluno = {nome:nome, idade:idade}
    var lista_alunos = JSON.parse(localStorage.getItem('relacaoalunos'/*nome do arquivo do navegador */))||[]//converte  o que esta no arquivo em uma lista ou cria uma lista vazia. Vai do campo de texto para um objeto e para a lista
    //insere os dados digitados na caixa de texto no objeto aluno e na sequencia joga para a lista de alunos
    lista_alunos.push(aluno)
    /*Para salvar nop localStorage o novo aluno digitado */
    localStorage.setItem('lista_alunos', JSON.stringify(lista_alunos))
    document.getElementById('formcadastro').reset()
    exibir_alunos()
})
function exibir_alunos()
{//tenta carregar dados do aquivo, caso não haja alunos cadastrados, cria uma lista vazia
    var lista_alunos = JSON.parse(localStorage.getItem('relacaoaluno')) || []
    //define onde os dadsos de alunos seraão exibidos
    var output = document.getElementById('output')
    //limpa o output para atualizar a lisrafem de alunos a serem exibidos
    output.innerHTML = ''
    for(let i = 0; i<lista_alunos.length;i++){
        let li = document.createElement('li')
        //imprime o nome dos alunos
        li.textContent='Nome: '+lista_alunos[i].nome + 'Idade: '+lista_alunos.idade
        output.appendChild(li)
    }
}