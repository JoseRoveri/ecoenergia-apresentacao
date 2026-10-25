
/* ==========================================
   ECOENERGIA
   NAVEGACAO GLOBAL PELO TECLADO

   APRESENTACAO COMPLETA - 10 TELAS
========================================== */

document.addEventListener("keydown", (evento) => {

    /* ======================================
       EVITAR REPETICOES
    ====================================== */

    if (evento.repeat) return;

    if (
        evento.ctrlKey ||
        evento.altKey ||
        evento.metaKey
    ) {
        return;
    }


    /* ======================================
       NAO NAVEGAR COM MODAL ABERTO
    ====================================== */

    const modal = document.getElementById(
        "t8-modal"
    );

    if (modal && !modal.hidden) {
        return;
    }


    /* ======================================
       IGNORAR CAMPOS DE DIGITACAO
    ====================================== */

    const elemento = document.activeElement;

    if (
        elemento &&
        (
            elemento.tagName === "INPUT" ||
            elemento.tagName === "TEXTAREA" ||
            elemento.tagName === "SELECT" ||
            elemento.isContentEditable
        )
    ) {
        return;
    }


    /* ======================================
       IDENTIFICAR PAGINA ATUAL
    ====================================== */

    const pagina = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase() || "index.html";


    /* ======================================
       ORDEM COMPLETA DA APRESENTACAO
    ====================================== */

    const telas = [
        "index.html",
        "tela2.html",
        "tela3.html",
        "tela4.html",
        "tela5.html",
        "tela6.html",
        "tela7.html",
        "tela8.html",
        "tela9.html",
        "tela10.html"
    ];

    const atual = telas.indexOf(pagina);

    if (atual === -1) return;


    /* ======================================
       SETA DIREITA - PROXIMA TELA
    ====================================== */

    if (evento.key === "ArrowRight") {

        evento.preventDefault();

        if (atual < telas.length - 1) {

            window.location.href = telas[atual + 1];

        }

        // Na Tela 10, a seta direita nao faz nada.
        // O reinicio acontece somente pelo botao.

    }


    /* ======================================
       SETA ESQUERDA - TELA ANTERIOR
    ====================================== */

    if (evento.key === "ArrowLeft") {

        evento.preventDefault();

        if (atual > 0) {

            window.location.href = telas[atual - 1];

        }

    }

});
