import 'dotenv/config';
import { MongoClient } from "mongodb";

const cliente = new MongoClient(process.env.SENHA_MONGODB);


let dadosServidor;

try {
    await cliente.connect();
    const db = cliente.db("chat");
    dadosServidor = db.collection("mensagem");

    console.log("conectado com sucesso com o banco de dados")
} catch (error) {
    console.log(error);
}

export default dadosServidor;