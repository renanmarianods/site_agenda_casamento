const form = document.getElementById('form-contatos');
const contatos = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha () {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('tel-contato');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`A atividade: ${inputNomeContato.value} já foi inserida`);
    } else {
    contatos.push(inputNomeContato.value);
    telefones.push(parseFloat(inputTelContato.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelContato.value}</td>`;
    linha += '</td>';

    linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}