function verificarMensagem(texto) {
    if (typeof texto === 'string') {
        return texto;
    }
    return null; 
}

export { verificarMensagem };