
/* ==========================================
   ECOENERGIA - TELA 5
   APRENDER BRINCANDO
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const botaoContinuar = document.getElementById("t5-continuar");

    const painelRecompensas = document.querySelector(
        ".t5-area-recompensas"
    );

    const capi = document.querySelector(".t5-capi");

    /* ======================================
       EFEITO DE COMEMORACAO
    ====================================== */

    function criarParticulas() {

        const cores = [
            "#ffe45c",
            "#7aef54",
            "#ffffff",
            "#55d9ff"
        ];

        for (let i = 0; i < 24; i++) {

            const particula = document.createElement("span");

            particula.style.position = "absolute";
            particula.style.width = "8px";
            particula.style.height = "8px";
            particula.style.borderRadius = "50%";

            particula.style.backgroundColor =
                cores[Math.floor(Math.random() * cores.length)];

            particula.style.left =
                (65 + Math.random() * 30) + "%";

            particula.style.top =
                (25 + Math.random() * 35) + "%";

            particula.style.zIndex = "9";
            particula.style.pointerEvents = "none";

            document.querySelector(".t5-cena")
                .appendChild(particula);

            const deslocamentoX =
                (Math.random() - 0.5) * 180;

            const deslocamentoY =
                -60 - Math.random() * 160;

            const animacao = particula.animate([
                {
                    opacity: 1,
                    transform: "translate(0, 0) scale(1)"
                },
                {
                    opacity: 0,
                    transform:
                        `translate(${deslocamentoX}px, ${deslocamentoY}px) scale(0)`
                }
            ], {
                duration: 1200 + Math.random() * 700,
                easing: "ease-out",
                fill: "forwards"
            });

            animacao.onfinish = () => particula.remove();
        }
    }

    /* ======================================
       COMEMORACAO AO ENTRAR
    ====================================== */

    if (painelRecompensas && capi) {

        // Aguarda a animacao inicial das recompensas
        painelRecompensas.addEventListener(
            "animationend",
            (evento) => {

                if (
                    evento.animationName ===
                    "t5-entrada-recompensas"
                ) {
                    criarParticulas();
                }
            }
        );
    }

    /* ======================================
       BOTAO CONTINUAR
    ====================================== */

    if (botaoContinuar) {

        botaoContinuar.addEventListener("click", () => {

            // A Tela 6 sera criada em seguida.
            // Por enquanto, evita abrir uma pagina inexistente.

            alert(
                "Missão concluída! 🌱🏆\n\n" +
                "Agora vamos conhecer a próxima parte do EcoEnergia!"
            );

            // Quando a Tela 6 estiver pronta,
            // substituiremos o alert por:
            //
            // window.location.href = "tela6.html";

        });
    }

    /* ======================================
       NAVEGACAO PELO TECLADO
    ====================================== */

    document.addEventListener("keydown", (evento) => {

        if (evento.key === "ArrowLeft") {
            window.location.href = "tela4.html";
        }

        if (evento.key === "ArrowRight") {
            botaoContinuar?.click();
        }

    });

});
