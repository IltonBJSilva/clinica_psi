import { criarAgendamento } from "./services/agendamentoService.js";

const btnTopo = document.querySelector("#btn-topo");
const btnHero = document.querySelector("#btn-hero");
const secaoAgendamento = document.querySelector("#agendamento");
const form = document.querySelector("#form-agendamento");

function abrirFormulario() {
    if (!secaoAgendamento) return;

    secaoAgendamento.classList.remove("hidden");
    secaoAgendamento.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

if (btnTopo) {
    btnTopo.addEventListener("click", abrirFormulario);
}

if (btnHero) {
    btnHero.addEventListener("click", abrirFormulario);
}

if (form) {
    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const dados = {
            nome: document.querySelector("#nome").value.trim(),
            email: document.querySelector("#email").value.trim(),
            telefone: document.querySelector("#telefone").value.trim(),
            dataHora: document.querySelector("#dataHora").value,
            observacoes: document.querySelector("#observacoes").value.trim()
        };

        try {
            await criarAgendamento(dados);
            alert("Agendamento realizado com sucesso!");
            form.reset();
            secaoAgendamento.classList.add("hidden");
        } catch (error) {
            console.error("Erro ao agendar:", error);
            alert("Erro ao realizar agendamento. Verifique a API.");
        }
    });
}