import API_BASE_URL, { getHeaders } from "../api.js";

export async function criarAgendamento(dados) {
    const response = await fetch(`${API_BASE_URL}/agendamentos`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(dados)
    });

    if (!response.ok) {
        const erroTexto = await response.text();
        throw new Error(erroTexto || "Erro ao criar agendamento");
    }

    return await response.json();
}