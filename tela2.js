
// ==============================
// ECOENERGIA - TELA 2
// ==============================

// INFORMACOES DOS PROBLEMAS
const informacoes = {

    ar: {
        titulo: "Poluição do ar",

        texto:
            "A fumaça de indústrias e veículos pode " +
            "liberar substâncias que prejudicam a " +
            "qualidade do ar e a saúde das pessoas.",

        dica:
            "🌱 O que ajuda? Economizar energia, " +
            "utilizar transporte coletivo e apoiar " +
            "fontes de energia mais limpas."
    },

    agua: {
        titulo: "Poluição da água",

        texto:
            "O lixo e o esgoto despejados sem " +
            "tratamento contaminam rios, lagos e mares, " +
            "prejudicando os animais, as plantas e as pessoas.",

        dica:
            "💧 O que ajuda? Descartar resíduos " +
            "corretamente, não jogar óleo na pia " +
            "e economizar água."
    },

    lixo: {
        titulo: "Excesso de lixo",

        texto:
            "Quando descartamos os resíduos no lugar " +
            "errado, o lixo pode contaminar o solo, " +
            "entupir bueiros e acabar nos rios.",

        dica:
            "♻️ O que ajuda? Reduzir, reutilizar, " +
            "separar materiais recicláveis e " +
            "descartar o restante corretamente."
    },

    energia: {
        titulo: "Desperdício de energia",

        texto:
            "Deixar lâmpadas e aparelhos ligados " +
            "sem necessidade aumenta o consumo e " +
            "exige mais geração de eletricidade.",

        dica:
            "⚡ O que ajuda? Apagar luzes, usar " +
            "iluminação natural e desligar equipamentos " +
            "quando não forem necessários."
    }

};

// ==============================
// ELEMENTOS DO HTML
// ==============================

const modal = document.getElementById("t2-modal");

const titulo = document.getElementById("t2-modal-titulo");

const texto = document.getElementById("t2-modal-texto");

const dica = document.getElementById("t2-dica");

const etiqueta = document.getElementById("t2-modal-etiqueta");

const contador = document.getElementById("t2-contagem");

const explorados = new Set();

let focoAnterior = null;

// ==============================
// ABRIR PAINEL
// ==============================

function abrirPainel(info, rotulo = "ALERTA AMBIENTAL") {

    focoAnterior = document.activeElement;

    titulo.textContent = info.titulo;

    texto.textContent = info.texto;

    dica.textContent = info.dica;

    dica.hidden = !info.dica;

    etiqueta.textContent = rotulo;

    modal.hidden = false;

    document.getElementById("t2-fechar").focus();
}

// ==============================
// FECHAR PAINEL
// ==============================

function fecharPainel() {

    if (modal.hidden) {
        return;
    }

    modal.hidden = true;

    if (focoAnterior) {
        focoAnterior.focus();
    }
}

// ==============================
// CLIQUE NOS ALERTAS
// ==============================

document.querySelectorAll("[data-problema]").forEach((botao) => {

    botao.addEventListener("click", () => {

        const chave = botao.dataset.problema;

        const info = informacoes[chave];

        if (!info) {
            return;
        }

        // Marca como explorado
        explorados.add(chave);

        // Atualiza o contador
        contador.textContent =
            `${explorados.size} de 4 explorados`;

        // Marca o botao visualmente
        botao.classList.add("visitado");

        // Exibe a explicacao
        abrirPainel(info);

    });

});

// ==============================
// FECHAR COM OS BOTOES
// ==============================

document.getElementById("t2-fechar")
    .addEventListener("click", fecharPainel);

document.getElementById("t2-entendi")
    .addEventListener("click", fecharPainel);

// FECHAR CLICANDO FORA DO PAINEL
modal.addEventListener("click", (evento) => {

    if (evento.target === modal) {
        fecharPainel();
    }

});

// FECHAR COM ESC
document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {
        fecharPainel();
    }

});

// ==============================
// BOTAO CONTINUAR
// ==============================

document.getElementById("t2-continuar")
    .addEventListener("click", () => {

        if (explorados.size < 4) {

            abrirPainel({

                titulo: "Ainda temos mais para explorar!",

                texto:
                    `Você conheceu ${explorados.size} de 4 problemas. ` +
                    "Clique nos alertas restantes para " +
                    "entender melhor nosso planeta.",

                dica:
                    "🔍 Os alertas explorados ficam " +
                    "marcados com um ✓."

            }, "MISSÃO DA LUMI");

        } else {

            window.location.href = "tela3.html";

        }


    });
