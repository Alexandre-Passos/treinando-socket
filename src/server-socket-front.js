import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";

const socket = io();

const mensagensRecebidas = document.getElementById("messages"); //Mensagens recebidas
const inputDeMensagens = document.getElementById("messageInput"); //Escrever mensagens
const botaoEnviar = document.getElementById("sendButton"); //Enviar mensagem


botaoEnviar.addEventListener("click", (evento) => {
    evento.preventDefault();

    const textoDaMensagem = inputDeMensagens.value;

    if (textoDaMensagem) {

        socket.emit("enviar_mensagem", textoDaMensagem);
        inputDeMensagens.value = "";
    }
});


socket.on("mensagem_recebida", (texto) => {
    const mensagem = `<p>${texto}</p>`;
    mensagensRecebidas.textContent += mensagem;
});