const btnProjeto = document.getElementById("btn-projeto");
const btnPersonagens = document.getElementById("btn-personagens");
const btnEntrar = document.getElementById("btn-entrar");
const fecharPainel = document.getElementById("fechar-painel");

const painel = document.getElementById("painel");
const painelTitulo = document.getElementById("painel-titulo");
const painelTexto = document.getElementById("painel-texto");

const telaAbertura = document.getElementById("tela-abertura");
const fundo = document.querySelector(".fundo");
const lumi = document.getElementById("lumi");
const capi = document.getElementById("capi");
const transicao = document.getElementById("transicao");

/* PAINEL DE INFORMAÇÃO */
function abrirPainel(titulo, texto) {
    painelTitulo.textContent = titulo;
    painelTexto.textContent = texto;
    painel.classList.add("ativo");
}

function fecharPainelInfo() {
    painel.classList.remove("ativo");
}

btnProjeto.addEventListener("click", () => {
    abrirPainel(
        "Sobre o EcoEnergia",
        "O EcoEnergia é uma proposta educativa interativa que ensina sustentabilidade de forma divertida, usando personagens, desafios, gamificação e atividades visuais para estimular hábitos conscientes."
    );
});

btnPersonagens.addEventListener("click", () => {
    abrirPainel(
        "Lumi e Capi",
        "Lumi é a tutora que guia o aprendizado sobre sustentabilidade. Capi é a companheira da aventura, ajudando a transformar o aprendizado em uma jornada divertida e envolvente."
    );
});

fecharPainel.addEventListener("click", fecharPainelInfo);

/* TRANSIÇÃO DO BOTÃO PRINCIPAL */
btnEntrar.addEventListener("click", () => {
    transicao.classList.add("ativa");

    setTimeout(() => {
        window.location.href = "tela2.html";
    }, 1500);
});

/* LEVE EFEITO DE MOVIMENTO COM O MOUSE */
telaAbertura.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 18;
    const y = (event.clientY / window.innerHeight - 0.5) * 12;

    fundo.style.transform = `scale(1.03) translate(${x * -0.35}px, ${y * -0.35}px)`;
    lumi.style.transform = `translate(${x * 0.35}px, ${y * 0.25}px)`;
    capi.style.transform = `translate(${x * 0.45}px, ${y * 0.25}px)`;
});

telaAbertura.addEventListener("mouseleave", () => {
    fundo.style.transform = `scale(1.03) translate(0, 0)`;
    lumi.style.transform = `translate(0, 0)`;
    capi.style.transform = `translate(0, 0)`;
});