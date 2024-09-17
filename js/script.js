
// Mapeamento de nomes de páginas para os arquivos HTML correspondentes
 const pages = {
    // páginas de cliente
    'cadastrar cliente': 'html/Cliente/cadastrar-cliente.html',
    'alterar cliente': 'html/cliente/alterar-cliente.html',
    'listar cliente': 'html/cliente/listar-cliente.html',
    'excluir cliente': 'html/cliente/excluir-cliente.html',

    // páginas de filmes
    'cadastrar filme': 'html/filme/cadastrar-filme.html',
    'alterar filme': 'html/filme/alterar-filme.html',
    'listar filme': 'html/filme/listar-filme.html',
    'excluir filme': 'html/filme/excluir-filme.html',

     // páginas de pedido
    'cadastrar pedido': 'html/pedido/cadastrar-pedido.html',
    'alterar pedido': 'html/pedido/alterar-pedido.html',
    'listar pedido': 'html/pedido/listar-pedido.html',
    'excluir pedido': 'html/pedido/excluir-pedido.html'
};

// Capturando o formulário e adicionando um evento de submissão
document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o recarregamento da página ao enviar o formulário

    // Capturando o valor do campo de pesquisa
    const searchValue = document.getElementById('searchInput').value.toLowerCase();

    // Verifica se a página existe no mapeamento
    if (pages[searchValue]) {
        // Redireciona o usuário para a página correspondente
        window.location.href = pages[searchValue];
    } else {
        // Exibe uma mensagem de erro se a página não for encontrada
        alert('Página não encontrada. Tente alguma da opçõe abaixo. \n Cliente: \n "cadastrar cliente", "alterar cliente,"aa');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('sidebar');
    var isSidebarVisible = false;
    var sidebarTimeout;

    // Função para mostrar a sidebar
    function showSidebar() {
        sidebar.classList.add('visible');
        isSidebarVisible = true;
        if (sidebarTimeout) {
            clearTimeout(sidebarTimeout);
        }
    }

    // Função para ocultar a sidebar
    function hideSidebar() {
        sidebar.classList.remove('visible');
        isSidebarVisible = false;
    }

    // Adiciona evento para mostrar a sidebar quando o mouse entra no canto esquerdo
    document.addEventListener('mousemove', function(event) {
        var x = event.clientX;

        // Verifica se o mouse está no canto esquerdo da tela
        if (x < 50) { // A margem de 50px pode ser ajustada conforme necessário
            showSidebar();
        } else if (!isSidebarVisible) {
            hideSidebar();
        }
    });

    // Adiciona eventos para manter a sidebar visível quando o mouse está sobre ela
    sidebar.addEventListener('mouseenter', function() {
        showSidebar();
    });

    sidebar.addEventListener('mouseleave', function() {
        sidebarTimeout = setTimeout(hideSidebar, 300); // Tempo para esperar antes de ocultar a sidebar
    });
});