
/* ==========================================
   ECOENERGIA - TELA 6
   CRIE SEU COMPANHEIRO
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const botaoContinuar = document.getElementById(
        "t6-continuar"
    );

    if (botaoContinuar) {

        botaoContinuar.addEventListener("click", () => {

            window.location.href = "tela7.html";

        });

    }

});
