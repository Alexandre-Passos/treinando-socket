import dadosServidor from './connectDB.js';
import { verificarMensagem } from './funcao-socket.js';

function registrarEventosSocket(io) {
    io.on("connect", (socket) => {
        console.log("Um cliente se conectou:", socket.id);

        socket.on("enviar_mensagem", async (textoMensagem) => {
            const mensagemValida = verificarMensagem(textoMensagem);

            if (mensagemValida) {
                try {
                    await dadosServidor.insertOne({ texto: mensagemValida });
                    io.emit("mensagem_recebida", mensagemValida);
                } catch (error) {
                    console.error("Erro ao salvar mensagem no banco de dados:", error);
                }
            }
        });
    });
}

export default registrarEventosSocket;
