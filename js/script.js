// Selecionar os elementos do diálogo e dos botões
const dialogo = document.getElementById('dialogo-consulta');
const botaoAbrir = document.getElementById('abrir-dialogo');
const botaoFechar = document.getElementById('fechar-dialogo');

// Função para abrir o diálogo
botaoAbrir.addEventListener('click', () => {
    dialogo.showModal(); // Abre o diálogo
});

// Função para fechar o diálogo
botaoFechar.addEventListener('click', () => {
    dialogo.close(); // Fecha o diálogo
});

// Fechar o diálogo ao submeter o formulário
document.getElementById('cadastro-consulta').addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    // Aqui você pode adicionar a lógica para salvar a consulta
    alert('Consulta cadastrada com sucesso!'); // Exemplo de feedback
    dialogo.close(); // Fecha o diálogo após o cadastro
});