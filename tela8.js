
/* ==========================================
   ECOENERGIA - TELA 8
   CADA CONQUISTA CONTA!
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       ELEMENTOS DA TELA
    ====================================== */

    const cena = document.querySelector(".t8-cena");

    const botaoRecompensa = document.getElementById(
        "t8-conquistar-recompensa"
    );

    const modal = document.getElementById(
        "t8-modal"
    );

    const botaoFechar = document.getElementById(
        "t8-fechar-modal"
    );

    const botaoContinuar = document.getElementById(
        "t8-continuar"
    );

    let ultimoFoco = null;


    /* ======================================
       CRIAR PARTICULAS
    ====================================== */

    function criarParticulas() {

        if (!cena) return;

        const cores = [
            "#ffdf45",
            "#78ec54",
            "#ffffff",
            "#59d8ff",
            "#ffc270"
        ];

        for (let i = 0; i < 45; i++) {

            const particula = document.createElement("span");

            const tamanho = 6 + Math.random() * 9;

            particula.style.position = "absolute";

            particula.style.left = "50%";
            particula.style.top = "45%";

            particula.style.width = tamanho + "px";
            particula.style.height = tamanho + "px";

            particula.style.borderRadius =
                Math.random() > 0.5 ? "50%" : "3px";

            particula.style.backgroundColor =
                cores[Math.floor(Math.random() * cores.length)];

            particula.style.zIndex = "35";
            particula.style.pointerEvents = "none";

            cena.appendChild(particula);

            const movimentoX =
                (Math.random() - 0.5) * 650;

            const movimentoY =
                (Math.random() - 0.5) * 450;

            const rotacao =
                Math.random() * 720;

            const animacao = particula.animate(
                [
                    {
                        opacity: 1,
                        transform:
                            "translate(0, 0) rotate(0deg) scale(1)"
                    },

                    {
                        opacity: 1,
                        offset: 0.4,
                        transform:
                            `translate(${movimentoX * 0.5}px, ${movimentoY * 0.5}px) rotate(${rotacao * 0.5}deg) scale(1.2)`
                    },

                    {
                        opacity: 0,
                        transform:
                            `translate(${movimentoX}px, ${movimentoY}px) rotate(${rotacao}deg) scale(0)`
                    }
                ],
                {
                    duration: 1200 + Math.random() * 1000,
                    easing: "ease-out",
                    fill: "forwards"
                }
            );

            animacao.onfinish = () => {
                particula.remove();
            };
        }
    }


    /* ======================================
       DESTACAR PAINEIS
    ====================================== */

    function destacarPainel(seletor) {

        const painel = document.querySelector(seletor);

        if (!painel) return;

        painel.animate(
            [
                {
                    transform: "scale(1)",
                    filter: "brightness(1)"
                },

                {
                    transform: "scale(1.06)",
                    filter: "brightness(1.25)",
                    offset: 0.5
                },

                {
                    transform: "scale(1)",
                    filter: "brightness(1)"
                }
            ],
            {
                duration: 850,
                easing: "ease-in-out"
            }
        );
    }


    /* ======================================
       ABRIR RECOMPENSA
    ====================================== */

    function abrirRecompensa() {

        if (!modal || !modal.hidden) return;

        ultimoFoco = document.activeElement;

        // Efeito visual nos paineis
        destacarPainel(".t8-area-progresso");
        destacarPainel(".t8-area-ecomoedas");

        // Mostra o modal
        modal.hidden = false;

        // Particulas comemorativas
        criarParticulas();

        // Foco no botao do modal
        botaoFechar?.focus();

    }


    /* ======================================
       FECHAR RECOMPENSA
    ====================================== */

    function fecharRecompensa() {

        if (!modal) return;

        modal.hidden = true;

        if (ultimoFoco &&
            typeof ultimoFoco.focus === "function") {

            ultimoFoco.focus();
        }
    }


    /* ======================================
       EVENTOS DOS BOTOES
    ====================================== */

    if (botaoRecompensa) {

        botaoRecompensa.addEventListener(
            "click",
            abrirRecompensa
        );

    }

    if (botaoFechar) {

        botaoFechar.addEventListener(
            "click",
            fecharRecompensa
        );

    }


    /* ======================================
       TECLADO DENTRO DO MODAL
    ====================================== */

    document.addEventListener("keydown", (evento) => {

        if (!modal || modal.hidden) return;

        // Fecha com ESC
        if (evento.key === "Escape") {

            evento.preventDefault();

            fecharRecompensa();
        }

        // Impede Tab de sair do modal
        if (evento.key === "Tab") {

            evento.preventDefault();
            botaoFechar?.focus();
        }

    });


    /* ======================================
       BOTAO CONTINUAR
    ====================================== */

    if (botaoContinuar) {

        botaoContinuar.addEventListener(
            "click",
            () => {

                window.location.href = "tela9.html";

            }
        );

    }

});
