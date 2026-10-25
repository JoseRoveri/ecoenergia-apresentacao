
/* ==========================================
   ECOENERGIA - TELA 9
   MUITO ALEM DE UM JOGO

   ANIMACOES E NAVEGACAO
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       ELEMENTOS
    ====================================== */

    const botaoContinuar = document.getElementById(
        "t9-continuar"
    );

    const conexoes = document.querySelectorAll(
        ".t9-linha"
    );

    const blocos = document.querySelectorAll(
        ".t9-bloco"
    );

    const movimentoReduzido = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    /* ======================================
       ANIMAR CONEXOES DA ARQUITETURA
    ====================================== */

    function animarConexoes() {

        if (movimentoReduzido) return;

        conexoes.forEach((conexao, indice) => {

            conexao.animate(
                [
                    {
                        opacity: 0,
                        transform: "scaleX(0)"
                    },
                    {
                        opacity: 1,
                        transform: "scaleX(1)"
                    }
                ],
                {
                    duration: 750,
                    delay: 1100 + indice * 400,
                    easing: "ease-out",
                    fill: "backwards"
                }
            );

        });
    }


    /* ======================================
       DESTACAR COMPONENTES TECNOLOGICOS
    ====================================== */

    function animarArquitetura() {

        if (movimentoReduzido) return;

        blocos.forEach((bloco, indice) => {

            bloco.animate(
                [
                    {
                        boxShadow:
                            "0 0 0 rgba(0, 220, 210, 0)"
                    },
                    {
                        boxShadow:
                            "0 0 30px rgba(0, 220, 210, 0.40)"
                    },
                    {
                        boxShadow:
                            "0 0 0 rgba(0, 220, 210, 0)"
                    }
                ],
                {
                    duration: 1200,
                    delay: 1300 + indice * 400,
                    easing: "ease-in-out"
                }
            );

        });
    }


    /* ======================================
       INICIAR ANIMACOES
    ====================================== */

    animarConexoes();
    animarArquitetura();


    /* ======================================
       BOTAO CONTINUAR
    ====================================== */

    if (botaoContinuar) {

        botaoContinuar.addEventListener(
            "click",
            () => {

                window.location.href = "tela10.html";

            }
        );

    }

});
