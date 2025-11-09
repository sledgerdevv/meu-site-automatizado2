// Mostrar posts automaticamente
const conteudoPosts = document.getElementById('conteudo-posts');

posts.forEach(post => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
    conteudoPosts.appendChild(div);
});

// Formulário de contato simples (simulado)
const form = document.getElementById('form-contato');
const resposta = document.getElementById('resposta');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Aqui você poderia integrar com um serviço de envio real, como EmailJS
    resposta.textContent = `Obrigado, ${nome}! Sua mensagem foi recebida.`;
    form.reset();
});
