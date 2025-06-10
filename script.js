document.addEventListener('DOMContentLoaded', () => {
    // Altera o texto do título principal após 5 segundos
    const tituloHeader = document.querySelector('.header-content h1');
    if (tituloHeader) {
        setTimeout(() => {
            tituloHeader.textContent = 'Seu futuro começa agora!';
        }, 5000);
    }

    // Funcionalidade para scroll suave para todos os botões com href="#inscricao"
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

    // Funcionalidade para expandir/colapsar respostas do FAQ
    const itensFaq = document.querySelectorAll('.faq-item h3');
    itensFaq.forEach(titulo => {
        titulo.addEventListener('click', () => {
            const resposta = titulo.nextElementSibling;
            if (resposta) {
                if (resposta.style.display === 'block') {
                    resposta.style.display = 'none';
                } else {
                    resposta.style.display = 'block';
                }
            }
        });
    });

    // Validação básica do formulário de cadastro
    const formularioCadastro = document.querySelector('.signup-form');
    if (formularioCadastro) {
        formularioCadastro.addEventListener('submit', (evento) => {
            evento.preventDefault();
            const nome = formularioCadastro.querySelector('input[name="nome_completo"]').value;
            const email = formularioCadastro.querySelector('input[name="email"]').value;
            const whatsapp = formularioCadastro.querySelector('input[name="whatsapp"]').value;

            if (nome && email && whatsapp) {
                console.log(`Cadastro enviado!`);
                console.log(`Nome: ${nome}`);
                console.log(`E-mail: ${email}`);
                console.log(`Whatsapp: ${whatsapp}`);
                
                alert('Obrigado por se cadastrar! Em breve entraremos em contato.');
                formularioCadastro.reset();
            } else {
                alert('Por favor, preencha todos os campos!');
            }
        });
    }
});