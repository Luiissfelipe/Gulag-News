//Adiciona um evento de clique ao ícone do menu que alterna a visibilidade da lista de navegação.
function ativarMenu() {
    // Seleciona o elemento do ícone do menu (hambúrguer) e a lista de itens do menu.
    const menuIcon = document.querySelector('.cabecalho_container_opcoes_list');
    const menuLista = document.querySelector('.cabecalho_lista-menu');
    
    // Verifica se ambos os elementos existem na página para evitar erros.
    if (menuIcon && menuLista) {
        // Adiciona um ouvinte de evento de clique ao ícone do menu.
        menuIcon.addEventListener('click', () => {
            // A cada clique, alterna a classe menu--ativo na lista do menu.
            // Esta classe é responsável por exibir ou ocultar o menu.
            menuLista.classList.toggle('menu--ativo');
        });
    }
}

// Adiciona um efeito de hover (passar o mouse por cima) nos cards de notícias na página inicial.
function hoverNoticias() {
    // Seleciona todos os elementos que representam um card de notícia.
    const noticias = document.querySelectorAll(".principal_conteudo");

    // Se não houver nenhum card de notícia na página, a função é interrompida.
    if (!noticias || noticias.length === 0) {
        return;
    }

    // Se forem encontrados cards de notícia, percorre cada um deles.
    if (noticias.length > 0) {
        noticias.forEach(noticia => {
            // Adiciona um ouvinte para o evento 'mouseover' (quando o mouse entra no elemento).
            noticia.addEventListener("mouseover", () => {
                // Adiciona a classe 'noticia--hover' para aplicar o efeito visual de destaque.
                noticia.classList.add("noticia--hover");
            });

            // Adiciona um ouvinte para o evento 'mouseout' (quando o mouse sai do elemento).
            noticia.addEventListener("mouseout", () => {
                // Remove a classe 'noticia--hover' para reverter o efeito visual.
                noticia.classList.remove("noticia--hover");
            });
        })
    }
}


//Controla a validação do formulário de login.
function login() {
    // Seleciona o formulário de login.
    const form = document.querySelector(".principal_login_formulario");

    // Se o formulário não existir na página atual, a função é interrompida.
    if (!form) {
        return;
    }

    // Adiciona um ouvinte para o evento 'submit' do formulário.
    form.addEventListener("submit", (evento) => {
        // Previne o comportamento padrão do formulário, que é recarregar a página.
        evento.preventDefault();

        // Remove mensagens de erro de tentativas de login anteriores para evitar duplicatas.
        const erroEmail = document.querySelector(".principal_login_formulario_campo-email_erro");
        if (erroEmail) {
            erroEmail.remove();
        }

        const erroSenha = document.querySelector(".principal_login_formulario_campo-senha_erro");
        if (erroSenha) {
            erroSenha.remove();
        }

        // Obtém os valores inseridos nos campos de e-mail and senha.
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        // Validação do campo de e-mail.
        if (email === "" || !email.includes("@") || !email.includes(".")) {
            document.getElementById("email").value = ""; // Limpa o campo
            const campoEmail = document.querySelector(".principal_login_formulario_campo-email");
            const novoErroEmail = document.createElement("p"); // Cria um elemento de parágrafo para o erro.
            novoErroEmail.classList.add("principal_login_formulario_campo-email_erro"); // Adiciona a classe de estilo.
            novoErroEmail.textContent = "Insira um e-mail válido!"; // Define o texto da mensagem.
            campoEmail.appendChild(novoErroEmail); // Adiciona a mensagem de erro à página.
            return; // Interrompe a execução.
        } 

        // Validação do campo de senha.
        if (senha === "" || senha.length < 8) {
            document.getElementById("senha").value = ""; // Limpa o campo
            const campoSenha = document.querySelector(".principal_login_formulario_campo-senha");
            const novoErroSenha = document.createElement("p"); // Cria um elemento para o erro.
            novoErroSenha.classList.add("principal_login_formulario_campo-senha_erro"); // Adiciona a classe de estilo.
            novoErroSenha.textContent = "A senha deve conter no mínimo 8 caracteres!"; // Define o texto da mensagem.
            campoSenha.appendChild(novoErroSenha); // Adiciona a mensagem de erro à página.
            return; // Interrompe a execução.
        }

        // Se todas as validações passarem, exibe um alerta de sucesso.
        alert("Login realizado com sucesso!");
    });    
} 

// Executa as funções para inicializar as funcionalidades quando o script for carregado.
ativarMenu();
hoverNoticias();
login();