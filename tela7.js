
/* ==========================================
   ECOENERGIA - TELA 7
   PEQUENAS ACOES, GRANDES MUDANCAS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       ELEMENTOS DA TELA
    ====================================== */

    const botaoAgua = document.getElementById(
        "t7-fechar-torneira"
    );

    const botaoEnergia = document.getElementById(
        "t7-apagar-luz"
    );

    const painelParabens = document.getElementById(
        "t7-parabens"
    );

    const textoParabens = document.getElementById(
        "t7-texto-parabens"
    );

    const botaoContinuar = document.getElementById(
        "t7-continuar"
    );

    let aguaConcluida = false;
    let energiaConcluida = false;


    /* ======================================
       MOSTRAR MENSAGEM DE PARABENS
    ====================================== */

    function mostrarParabens(mensagem) {

        if (!painelParabens || !textoParabens) {
            return;
        }

        textoParabens.textContent = mensagem;

        painelParabens.hidden = false;

        // Reinicia a animacao da mensagem
        painelParabens.animate([
            {
                opacity: 0,
                transform: "scale(0.7)"
            },
            {
                opacity: 1,
                transform: "scale(1.08)",
                offset: 0.7
            },
            {
                opacity: 1,
                transform: "scale(1)"
            }
        ], {
            duration: 600,
            easing: "ease-out"
        });
    }


    /* ======================================
       EFEITO DE PARTICULAS
    ====================================== */

    function criarParticulas(elemento) {

        const cena = document.querySelector(".t7-cena");

        if (!cena || !elemento) return;

        const area = cena.getBoundingClientRect();
        const botao = elemento.getBoundingClientRect();

        const centroX =
            botao.left - area.left + botao.width / 2;

        const centroY =
            botao.top - area.top + botao.height / 2;

        const cores = [
            "#ffe44d",
            "#8fff69",
            "#ffffff",
            "#5cdeff"
        ];

        for (let i = 0; i < 20; i++) {

            const particula = document.createElement("span");

            particula.style.position = "absolute";
            particula.style.left = centroX + "px";
            particula.style.top = centroY + "px";

            particula.style.width = "9px";
            particula.style.height = "9px";
            particula.style.borderRadius = "50%";

            particula.style.backgroundColor =
                cores[Math.floor(Math.random() * cores.length)];

            particula.style.zIndex = "11";
            particula.style.pointerEvents = "none";

            cena.appendChild(particula);

            const movimentoX =
                (Math.random() - 0.5) * 200;

            const movimentoY =
                (Math.random() - 0.5) * 180;

            const animacao = particula.animate([
                {
                    opacity: 1,
                    transform: "translate(0, 0) scale(1)"
                },
                {
                    opacity: 0,
                    transform:
                        `translate(${movimentoX}px, ${movimentoY}px) scale(0)`
                }
            ], {
                duration: 800 + Math.random() * 500,
                easing: "ease-out",
                fill: "forwards"
            });

            animacao.onfinish = () => {
                particula.remove();
            };
        }
    }


    /* ======================================
       VERIFICAR OS DOIS DESAFIOS
    ====================================== */

    function verificarConclusao() {

        if (aguaConcluida && energiaConcluida) {

            mostrarParabens(
                "Você concluiu os dois desafios! " +
                "Pequenas atitudes fazem a diferença!"
            );

        }
    }


    /* ======================================
       DESAFIO 1 - ECONOMIZAR AGUA
    ====================================== */

    if (botaoAgua) {

        botaoAgua.addEventListener("click", () => {

            if (aguaConcluida) return;

            aguaConcluida = true;

            botaoAgua.classList.add("concluido");

            botaoAgua.querySelector(
                ".t7-desafio-icone"
            ).textContent = "✅";

            botaoAgua.setAttribute(
                "aria-label",
                "Desafio de economizar água concluído"
            );

            criarParticulas(botaoAgua);

            mostrarParabens(
                "Muito bem! Fechar a torneira " +
                "ajuda a economizar água!"
            );

            verificarConclusao();

        });
    }


    /* ======================================
       DESAFIO 2 - ECONOMIZAR ENERGIA
    ====================================== */

    if (botaoEnergia) {

        botaoEnergia.addEventListener("click", () => {

            if (energiaConcluida) return;

            energiaConcluida = true;

            botaoEnergia.classList.add("concluido");

            botaoEnergia.querySelector(
                ".t7-desafio-icone"
            ).textContent = "✅";

            botaoEnergia.setAttribute(
                "aria-label",
                "Desafio de economizar energia concluído"
            );

            criarParticulas(botaoEnergia);

            mostrarParabens(
                "Muito bem! Apagar as luzes " +
                "desnecessárias economiza energia!"
            );

            verificarConclusao();

        });
    }


    /* ======================================
       BOTAO CONTINUAR
    ====================================== */

    if (botaoContinuar) {

        botaoContinuar.addEventListener("click", () => {

            window.location.href = "tela8.html";

            
        });
    }

});
