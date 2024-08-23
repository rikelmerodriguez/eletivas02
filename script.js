document.getElementById('inscricao-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const turma = document.getElementById('turma').value;
    const eletiva = document.getElementById('eletiva').value;

    const tabelaInscricoes = document.getElementById('lista-inscricoes');

    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${turma}</td>
        <td>${eletiva}</td>
    `;

    tabelaInscricoes.appendChild(novaLinha);

    // Limpar formulário
    document.getElementById('inscricao-form').reset();
});
