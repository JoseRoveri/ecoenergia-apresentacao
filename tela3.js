
// ==========================================
// ECOENERGIA - TELA 3
// CONHECA NOSSA SOLUCAO
// ==========================================

// INFORMACOES DOS TRES RECURSOS

const recursos = {

    aprender: {
        icone: "📖",
        titulo: "Aprender",

        texto:
            "No EcoEnergia, as crianças aprendem " +
            "sobre o consumo consciente de água e " +
            "energia por meio de explicações simples, " +
            "atividades educativas e exemplos do " +
            "dia a dia. A Lumi acompanha o aprendizado " +
            "e ajuda a entender cada conceito.",

        destaque:
            "💧 Exemplo: descobrir como economizar " +
            "água ao escovar os dentes e como evitar " +
            "o desperdício de eletricidade em casa."
    },

    jogar: {
        icone: "🎮",
        titulo: "Jogar",

        texto:
            "O aprendizado se transforma em uma " +
            "aventura! As crianças participam de " +
            "quizzes, desafios e atividades interativas " +
            "que testam seus conhecimentos de maneira " +
            "divertida e estimulam a prática de " +
            "hábitos sustentáveis.",

        destaque:
            "⭐ Exemplo: responder a um quiz sobre " +
            "economia de energia e receber um " +
            "feedback imediato de cada resposta."
    },

    evoluir: {
        icone: "🏆",
        titulo: "Evoluir",

        texto:
            "Conforme completa atividades e desafios, " +
            "a criança pode ganhar XP e EcoMoedas, " +
            "avançar de nível, desbloquear conquistas " +
            "e obter recompensas para personalizar " +
            "seu companheiro virtual.",

        destaque:
            "🌱 O objetivo é incentivar a continuidade " +
            "do aprendizado, mostrando o progresso " +
            "da criança ao longo da jornada."
    }

};

// ==========================================
// ELEMENTOS DO HTML
// ==========================================

const modal = document.getElementById("t3-modal");

const modalTitulo =
    document.getElementById("t3-modal-titulo");

const modalTexto =
    document.getElementById("t3-modal-texto");

const modalIcone =
    document.getElementById("t3-modal-icone");

const modalDestaque =
    document.getElementById("t3-modal-destaque");

const botaoFechar =
    document.getElementById("t3-fechar");

const botaoEntendi =
    document.getElementById("t3-entendi");

const botaoContinuar =
    document.getElementById("t3-continuar");

const cards =
    document.querySelectorAll("[data-recurso]");

// RECURSOS JA VISITADOS

const recursosExplorados = new Set();

let focoAnterior = null;

// ==========================================
// ABRIR O PAINEL
// ==========================================

function abrirPainel(recurso) {

    focoAnterior = document.activeElement;

    modalIcone.textContent = recurso.icone;

    modalTitulo.textContent = recurso.titulo;

    modalTexto.textContent = recurso.texto;

    modalDestaque.textContent = recurso.destaque;

    modal.hidden = false;

    botaoFechar.focus();

}

// ==========================================
// FECHAR O PAINEL
// ==========================================

function fecharPainel() {

    if (modal.hidden) {
        return;
    }

    modal.hidden = true;

    if (focoAnterior) {
        focoAnterior.focus();
    }

}

// ==========================================
// INTERACAO COM OS CARDS
// ==========================================

cards.forEach((card) => {

    card.addEventListener("click", () => {

        const chave = card.dataset.recurso;

        const recurso = recursos[chave];

        if (!recurso) {
            return;
        }

        // REGISTRA O RECURSO EXPLORADO

        recursosExplorados.add(chave);

        // MARCA O CARD VISUALMENTE

        card.classList.add("t3-visitado");

        // ABRE O PAINEL EXPLICATIVO

        abrirPainel(recurso);

    });

});

// ==========================================
// BOTOES DO PAINEL
// ==========================================

botaoFechar.addEventListener(
    "click",
    fecharPainel
);

botaoEntendi.addEventListener(
    "click",
    fecharPainel
);

// FECHA CLICANDO FORA DO PAINEL

modal.addEventListener("click", (evento) => {

    if (evento.target === modal) {
        fecharPainel();
    }

});

// FECHA COM ESC

document.addEventListener("keydown", (evento) => {

    if (modal.hidden) {
        return;
    }

    if (evento.key === "Escape") {
        fecharPainel();
    }

    // MANTEM O FOCO DENTRO DO PAINEL

    if (evento.key === "Tab") {

        const primeiro = botaoFechar;
        const ultimo = botaoEntendi;

        if (
            evento.shiftKey &&
            document.activeElement === primeiro
        ) {
            evento.preventDefault();
            ultimo.focus();
        }

        else if (
            !evento.shiftKey &&
            document.activeElement === ultimo
        ) {
            evento.preventDefault();
            primeiro.focus();
        }

    }

});

// ==========================================
// BOTAO CONTINUAR
// ==========================================

botaoContinuar.addEventListener("click", () => {
    window.location.href = "tela4.html";
});