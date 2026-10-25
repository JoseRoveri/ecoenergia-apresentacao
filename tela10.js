
/* ==========================================
   ECOENERGIA - TELA 10
   ENCERRAMENTO CINEMATOGRAFICO
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       ELEMENTOS DA TELA
    ====================================== */

    const cena = document.querySelector(".t10-cena");

    const containerParticulas = document.getElementById(
        "t10-particulas"
    );

    const botaoReiniciar = document.getElementById(
        "t10-reiniciar"
    );

    const logo = document.querySelector(".t10-logo");

    const movimentoReduzido = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    const animacoes = [];


    /* ======================================
       PARTICULAS LUMINOSAS

       Pequenos brilhos dourados e verdes
       flutuando sobre o cenario
    ====================================== */

    function criarParticulas() {

        if (!containerParticulas || movimentoReduzido) {
            return;
        }

        const cores = [
            "rgba(255, 238, 157, 0.85)",
            "rgba(255, 255, 210, 0.8)",
            "rgba(171, 255, 161, 0.8)",
            "rgba(255, 210, 126, 0.75)"
        ];

        const quantidade = 26;

        for (let i = 0; i < quantidade; i++) {

            const particula = document.createElement("span");

            particula.classList.add("t10-particula");

            /* POSICAO ALEATORIA */

            const posicaoX = Math.random() * 100;
            const posicaoY = Math.random() * 100;

            /* TAMANHO */

            const tamanho = 3 + Math.random() * 5;

            /* COR */

            const cor = cores[
                Math.floor(Math.random() * cores.length)
            ];

            particula.style.left = posicaoX + "%";
            particula.style.top = posicaoY + "%";

            particula.style.width = tamanho + "px";
            particula.style.height = tamanho + "px";

            particula.style.background = cor;

            particula.style.opacity = "0";

            containerParticulas.appendChild(particula);


            /* ==================================
               MOVIMENTO CINEMATOGRAFICO
            ================================== */

            const deslocamentoX =
                (Math.random() - 0.5) * 110;

            const deslocamentoY =
                60 + Math.random() * 130;

            const duracao =
                5000 + Math.random() * 5500;

            const atraso =
                Math.random() * -9000;

            const animacao = particula.animate(
                [
                    {
                        opacity: 0.08,
                        transform:
                            "translate(0, 0) scale(0.6)"
                    },

                    {
                        opacity: 0.8,
                        offset: 0.5,
                        transform:
                            `translate(${deslocamentoX / 2}px, ${-deslocamentoY / 2}px) scale(1.2)`
                    },

                    {
                        opacity: 0.08,
                        transform:
                            `translate(${deslocamentoX}px, ${-deslocamentoY}px) scale(0.6)`
                    }
                ],
                {
                    duration: duracao,
                    delay: atraso,
                    iterations: Infinity,
                    direction: "alternate",
                    easing: "ease-in-out"
                }
            );

            animacoes.push(animacao);

        }

    }


    /* ======================================
       BRILHO DE REVELACAO DO LOGO
    ====================================== */

    function revelarLogo() {

        if (!logo || movimentoReduzido) {
            return;
        }

        logo.animate(
            [
                {
                    filter:
                        "drop-shadow(0 0 0px rgba(255,255,255,0))"
                },

                {
                    filter:
                        "drop-shadow(0 0 32px rgba(208,255,167,0.8))"
                },

                {
                    filter:
                        "drop-shadow(0 4px 8px rgba(255,255,255,0.15))"
                }
            ],
            {
                duration: 1800,
                delay: 1800,
                easing: "ease-in-out"
            }
        );

    }


    /* ======================================
       PAUSAR ANIMACOES QUANDO A ABA
       NAO ESTIVER VISIVEL
    ====================================== */

    document.addEventListener("visibilitychange", () => {

        animacoes.forEach((animacao) => {

            if (document.hidden) {
                animacao.pause();
            } else {
                animacao.play();
            }

        });

    });


    /* ======================================
       REINICIAR APRESENTACAO
    ====================================== */

    function reiniciarApresentacao() {

        window.location.href = "index.html";

    }

    if (botaoReiniciar) {

        botaoReiniciar.addEventListener(
            "click",
            reiniciarApresentacao
        );

    }


    /* ======================================
       INICIAR EFEITOS
    ====================================== */

    if (cena) {

        criarParticulas();

        revelarLogo();

    }

});
