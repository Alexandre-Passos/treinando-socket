import io from "../server.js";

const socket = io();

socket.on("connect", () => {
    console.log("Conectado ao servidor");
    socket.emit("receber_mensagem", (mensagem) => {
        const recebendoMensagem = verificarMensagem(mensagem);
    })
});