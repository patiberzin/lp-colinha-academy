document.addEventListener('DOMContentLoaded', () => {
    // Altera o texto do título principal após 5 segundos
    const tituloHeader = document.querySelector('.header-content h1');
    if (tituloHeader) {
        setTimeout(() => {
            tituloHeader.textContent = 'Seu futuro começa agora!';
        }, 5000);
    }

    // Scroll suave para todos os botões com href="#inscricao"
    const botoesScrollInscricao = document.querySelectorAll('a.btn[href="#inscricao"]');
    botoesScrollInscricao.forEach(botao => {
        botao.addEventListener('click', (evento) => {
            evento.preventDefault();
            const targetId = botao.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Expandir/colapsar respostas do FAQ
    const itensFaq = document.querySelectorAll('.faq-item h3');
    itensFaq.forEach(titulo => {
        titulo.addEventListener('click', () => {
            const resposta = titulo.nextElementSibling;
            if (resposta) {
                resposta.style.display = (resposta.style.display === 'block') ? 'none' : 'block';
            }
        });
    });

    // Validação e envio do formulário de cadastro
    const formularioCadastro = document.querySelector('.signup-form');
    if (formularioCadastro) {
        formularioCadastro.addEventListener('submit', async (evento) => {
            evento.preventDefault();

            const nome = formularioCadastro.querySelector('input[name="nome_completo"]').value;
            const email = formularioCadastro.querySelector('input[name="email"]').value;
            const whatsapp = formularioCadastro.querySelector('input[name="whatsapp"]').value;

            if (nome && email && whatsapp) {
                const formData = new FormData(formularioCadastro);

                try {
                    const response = await fetch(formularioCadastro.action, {
                        method: formularioCadastro.method,
                        body: formData,
                        headers: { 'Accept': 'application/json' }
                    });

                    if (response.ok) {
                        alert('Obrigado por se cadastrar! Em breve entraremos em contato.');
                        formularioCadastro.reset();
                    } else {
                        alert('Ocorreu um erro ao enviar. Tente novamente mais tarde.');
                    }
                } catch (error) {
                    alert('Erro de conexão. Verifique sua internet e tente novamente.');
                }
            } else {
                alert('Por favor, preencha todos os campos!');
            }
        });
    }

    // Dropdown de login
    const btnLogin = document.getElementById("btn-login");
    const dropdownLogin = document.querySelector(".dropdown-login");

    if (btnLogin && dropdownLogin) {
        btnLogin.addEventListener("click", (e) => {
            e.preventDefault();
            dropdownLogin.classList.toggle("hidden");
        });

        // Fecha o dropdown se clicar fora
        window.addEventListener("click", (e) => {
            if (!dropdownLogin.contains(e.target) && !btnLogin.contains(e.target)) {
                dropdownLogin.classList.add("hidden");
            }
        });
    }
});