const mensagensRecebidas = document.getElementById("messages"); //Mensagens recebidas
const inputDeMensagens = document.getElementById("messageInput"); //Escrever mensagens
const botaoEnviar = document.getElementById("sendButton"); //Enviar mensagem

botaoEnviar.addEventListener("click", (mensagemDeTexto) => {
    mensagemDeTexto.defaultPrevented();

});

export { mensagensRecebidas, inputDeMensagens, botaoEnviar };