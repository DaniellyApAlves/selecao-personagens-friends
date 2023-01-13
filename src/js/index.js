const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {

        const idSelecionado = personagem.attributes.id.value;

        const personagemSelecionado = document.querySelector(".selecionado");
        personagemSelecionado.classList.remove("selecionado");

        personagem.classList.add("selecionado");

        const imagemPersonagem1 = document.getElementById('personagem-friends-1');
        imagemPersonagem1.src = `./src/image/${idSelecionado}.png`;

        const nomePersonagem1 = document.getElementById('nome-friends-1');
        const nomeSelecionado = personagem.getAttribute('data-name');

        nomePersonagem1.innerHTML = nomeSelecionado;
    });
});