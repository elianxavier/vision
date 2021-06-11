function element(elemento){ return document.querySelector(elemento); }


//----------- Pegar os dados da URL -----------
let query = location.search.slice(1);
let partes = query.split('&');
let locais = {};

partes.forEach(function (parte) {
    let chaveValor = parte.split('=');
    let chave = chaveValor[0];
    let valor = chaveValor[1];
    locais[chave] = valor;
});

let botao = element("#btnProximo");
console.log(botao.innerHTML);
let htmlInstrucao = element("#instrucao");
htmlInstrucao.setAttribute("value", 0);


darInstrucao(locais.partida, locais.chegada);

botao.addEventListener("click", () => {
    darInstrucao(locais.partida, locais.chegada);
})


//----------------------------------------------------------
function darInstrucao(partida, chegada){
    let instrucoes = navegacao(partida, chegada);
    let posicao = parseInt(htmlInstrucao.getAttribute("value"));

    if(posicao < instrucoes.length)
    {
        htmlInstrucao.innerHTML = instrucoes[posicao];
        htmlInstrucao.setAttribute("value", posicao + 1);
    } else {
        htmlInstrucao.innerHTML = "Você chegou ao seu destino!";
        botao.style.display = "none";
    }
}

function navegacao(partida, chegada) {
    if ((partida == "A") && (chegada == "Biblioteca")) {
        return [
            "Siga pelo corredor para acessar a saída",
            "Vire a esquerda no no calçamento e siga em frente",
            "A Biblioteca se encontra logo em frente"
        ];
    }
    else if ((partida == "B") && (chegada == "Biblioteca")){
        return [
            "Siga pelo corredor para acesso ao patio",
            "Vire a esquerda",
            "A Biblioteca se encontra logo em frente ao pátio"
        ];
    }
    else if ((partida == "C") && (chegada == "Biblioteca")) {
        return [
            "Siga pelo corredor até o pátio",
            "A Biblioteca se encontra a sua esquerda"
        ];
    }
    else if ((partida == "D") && (chegada == "Biblioteca")){
        return ["Siga pelo corredor para ter acessoa passarela",
            "Vire a esquerda em frente o refeitório",
            "Desça pela passarela até o pátio",
            "A Biblioteca se encontra logo em frente"
        ];
    }
    else if ((partida == "E") && (chegada == "Biblioteca")){
        return [
            "Siga em frente para ter acesso a passarela",
            "Siga em frente em direção ao refeitório",
            "Vire a direita e desça pela passarela em direção ao pátio",
            "A Biblioteca está logo em frente"
        ];
    }
    else if ((partida == "F") && (chegada == "Biblioteca")){
        return [
            "Siga pelo corredor para acessar a rampa",
            "Desça, passe pelo refeitório e acesse a passarela logo em frente",
            "Desça a passarela em direção ao pátio",
            "A Biblioteca se encontra logo em frente"
        ];
    }

    //-------------------------------------------------------------

    else if ((partida == "A") && (chegada == "B")) {
        return["Siga pelo corredor para acessar a saída",
        "Vire a esquerda no no calçamento e siga em frente",
        "Acesse o corredor do Bloco B a sua direita"];
    }
    else if ((partida == "A") && (chegada == "C")){
        return ["Siga pelo corredor para acesso a passarela",
        "Vire a esquerda sentido a biblioteca",
        "Vire a direita para acessar o corredor do bloco C"];
    }
    else if ((partida == "A") && (chegada == "D")) {
        return ["Siga pelo corredor para acessar a passarela",
        "Suba em direção o refeitório",
        "No lado esquerdo há uma rampa de acesso ao bloco D",
        "Suba a rampa para ter acesso as salas do bloco D"];
    }
    else if ((partida == "A") && (chegada == "E")) {
        return[
            "Siga pelo corredor para ter acessoa passarela",
            "Vire a esquerda em frente o refeitório",
            "As salas do bloco E estão no térro"
        ];
    }
    else if((partida == "A") && (chegada == "F")){
        return["Siga em frente para ter acesso a passarela",
        "Siga em frente em direção ao refeitório",
        "Vire a esquerda para ter acesso a rampa do bloco F",
        "Suba a rampa de acesso do bloco F para encontrar as salas"];
    }
    
    //-------------------------------------------------------------
    
    else if ((partida == "B") && (chegada == "A")) {
        return["Siga pelo corredor para acessar a saída",
        "Vire a direita no calçamento e siga em frente",
        "Acesse o corredor do Bloco A a sua direita"];
    }
    else if ((partida == "B") && (chegada == "C")){
        return["Siga pelo corredor para acessar a saída",
        "Vire a direita sentido a biblioteca",
        "Vire a direita para acessar o corredor do bloco C"];
    }
    else if ((partida == "B") && (chegada == "D")){
        return["Siga pelo corredor para acessar a passarela",
        "Suba em direção o refeitório",
        "No lado esquerdo há uma rampa de acesso ao bloco D",
        "Suba a rampa para ter acesso as salas do bloco D"];
    }
    else if ((partida == "B") && (chegada == "E")){
        return["Siga pelo corredor para ter acessoa passarela",
        "Vire a esquerda em frente o refeitório"];
    }
    else if ((partida == "B") && (chegada == "F")){
        return["Siga em frente para ter acesso a passarela",
        "Siga em frente em direção ao refeitório",
        "Vire a esquerda para ter acesso a rampa do bloco F",
        "Suba a rampa de acesso do bloco F para encontrar as salas"];
    }

    //-------------------------------------------------------------

    if ((partida == "C") && (chegada == "A")) {
        return["Siga pelo corredor para acessar a saída",
        "Vire a esquerda no no calçamento e siga em frente",
        "Acesse o corredor do Bloco A a sua direita"];
    }
    else if ((partida == "C") && (chegada == "B")){
        return["Siga pelo corredor para acesso a passarela",
        "Vire a esquerda sentido a biblioteca",
        "Vire a esquerda para acessar o corredor do bloco B"];
    }
    else if ((partida == "C") && (chegada == "D")){
        return["Siga pelo corredor para acessar a passarela",
        "Suba em direção o refeitório",
        "No lado esquerdo há uma rampa de acesso ao bloco D",
        "Suba a rampa para ter acesso as salas do bloco D"];
    }
    else if ((partida == "C") && (chegada == "E")){
        return["Siga pelo corredor para ter acessoa passarela",
        "Vire a esquerda em frente o refeitório",
        "As salas do bloco E estão no térro"];
    }
    else if ((partida == "C") && (chegada == "F")){
        return["Siga em frente para ter acesso a passarela",
        "Siga em frente em direção ao refeitório",
        "Vire a esquerda para ter acesso a rampa do bloco F",
        "Suba a rampa de acesso do bloco F para encontrar as salas"];
    }

    //-------------------------------------------------------------

    if ((partida == "D") && (chegada == "A")) {
        return["Siga pelo corredor para acessar a saída",
        "Vire a esquerda edesça a rampa de acesso",
        "Passe pelo refeitório e siga pela passarela",
        "Vire a esquerda para ter acesso ao corredor do bloco A"];
    }
    else if ((partida == "D") && (chegada == "B")){
        return["Siga pelo corredor para acessar a saída",
        "Passe pelo refeitório e acesse a passarela",
        "Vire a direita para acessar o corredor do bloco B"];
    }
    else if ((partida == "D") && (chegada == "C")){
        return["Siga pelo corredor para acessar a saída",
        "Acesse a passarela em frente ao refeitório",
        "Siga sentido a biblioteca e vire a direita",
        "Siga em frente pelo corredor do bloco C"];
    }
    else if ((partida == "D") && (chegada == "E")){
        return["Siga pelo corredor para acessar a saída",
        "Vire a direita",
        "As salas do bloco E estão no térro"];
    }
    else if ((partida == "D") && (chegada == "F")){
        return["Siga pelo corredor para acessar a saída",
        "Vire a direita para ter acesso ao bloco E",
        "Vire a direita para ter acesso a rampa do bloco F",
        "Suba a rampa de acesso do bloco F para encontrar as salas"];
    }

    //-------------------------------------------------------------

    if ((partida == "E") && (chegada == "A")) {
        return["Siga pelo corredor para acessar a saída",
        "Vire a direita no calçamento e siga em frente",
        "Acesse o corredor do Bloco A a sua esquerda"];
    }
    else if ((partida == "E") && (chegada == "B")){
        return["Siga pelo corredor para acesso a passarela",
        "Vire a direita e siga pela passarela",
        "Vire a direita para acessar o corredor do bloco B"];
    }
    else if ((partida == "E") && (chegada == "C")) {
        return["Siga pelo corredor para acessar a passarela",
        "Siga pela passarela em direção a biblioteca",
        "No lado esquerdo há um corredor de acesso as salas do bloco C"];
    }
    else if ((partida == "E") && (chegada == "D")){
        return["Siga pelo corredor para ter acessoa passarela",
        "Vire a esquerda em frente o refeitório",
        "Suba pela rampa de acesso ao bloco D, elas se encontram na ala do refeitório"];
    }
    else if ((partida == "E") && (chegada == "F")){
        return["Siga em frente para ter acesso a passarela",
        "Na saída do bloco E há uma rampa de acesso para o segundo piso",
        "Suba pela rampa de acesso ao bloco F"];
    }

    //-------------------------------------------------------------

    if ((partida == "F") && (chegada == "A")) {
        return["Siga pelo corredor para acessar a saída",
        "Vire a esquerda e desça a rampa de acesso",
        "Siga pela passarela em frente o refeitório",
        "Vire a direita para ter acesso ao corredor do bloco A"];
    }
    else if ((partida == "F") && (chegada == "B")){
        return["Siga pelo corredor para acesso a passarela",
        "Desça pela passarela sentido a biblioteca",
        "Vire a direita para acessar o corredor do bloco B"];
    }
    else if ((partida == "F") && (chegada == "C")) {
        return["Siga pelo corredor para acessar a passarela",
        "Siga pela passarela em direção a biblioteca",
        "Acesse o corredor do bloco C à sua esquerda, logo após o corredor do bloco B"];
    }
    else if ((partida == "F") && (chegada == "D")){
        return["Siga pelo corredor para ter acessoa passarela",
        "Vire a esquerda em frente o refeitório",
        "Acesse a passarela do bloco D na ala do refeitório"];
    }
    else if ((partida == "F") && (chegada == "E")) {
        return["Siga em frente para ter acesso a passarela",
        "Desça a passarela para acessar o térro",
        "Vire a direita para ter acesso a ala do bloco E"];
    }

    //-------------------------------------------------------------

    if ((partida == "A") && (chegada == "CGTI")) {
        return["Siga pelo corredor em direção ao pátio",
        "O CGTI se encontra logo a esquerda em frente a biblioteca"];
    }
    else if ((partida == "B") && (chegada == "CGTI")){
        return["Siga pelo corredor para acesso ao patio",
        "Vire a esquerda",
        "O CGTI se encontra em frente a biblioteca"];
    }
    else if ((partida == "C") && (chegada == "CGTI")) {
        return["Siga pelo corredor até o pátio",
        "Vire a esquerda no acesso ao corredor do bloco A",
        "O CGTI se encontra a sua esquerda, na entrada do corredor do bloco A"];
    }
    else if ((partida == "D") && (chegada == "CGTI")){
        return["Siga pelo corredor para ter acessoa passarela",
        "Vire a esquerda em frente o refeitório",
        "Desça pela passarela em direção ao pátio",
        "Vire a esquerda",
        "O CGTI se encontra na entrada do corredor, em frente a biblioteca"];
    }
    else if ((partida == "E") && (chegada == "CGTI")){
        return["Siga em frente para ter acesso a passarela",
        "Siga em frente em direção ao refeitório",
        "Vire a direita e desça pela passarela em direção ao pátio",
        "Vire a esquerda",
        "O CGTI está na entrada do corredor do bloco A, em frente a biblioteca"];
    }
    else if ((partida == "F") && (chegada == "CGTI")){
        return["Siga pelo corredor para acessar a rampa",
        "Desça, passe pelo refeitório e acesse a passarela logo em frente",
        "Desça a passarela em direção ao pátio",
        "Vire a esquerda",
        "O CGTI está na entrada do corredor do bloco A, em frente a biblioteca"];
    }

    //-------------------------------------------------------------

    if ((partida == "A") && (chegada == "Protocolo")) {
        return["Siga pelo corredor",
        "O Protocolo se encontra logo na entrada principal"];
    }
    else if ((partida == "B") && (chegada == "Protocolo")){
        return["Siga pelo corredor para acesso ao patio",
        "Vire a esquerda",
        "O Protocolo se encontra logo na entrada principal"];
    }
    else if ((partida == "C") && (chegada == "Protocolo")) {
        return["Siga pelo corredor até o pátio",
        "Vire a esquerda no acesso ao corredor do bloco A",
        "O Protocolo se encontra a sua direita logo na entrada principal"];
    }
    else if ((partida == "D") && (chegada == "Protocolo")){
        return["Siga pelo corredor para ter acessoa passarela",
        "Vire a esquerda em frente o refeitório",
        "Desça pela passarela até a entrada do Bloco A",
        "O Protocolo se encontra na entrada principal"];
    }
    else if ((partida == "E") && (chegada == "Protocolo")){
        return["Siga em frente para ter acesso a passarela",
        "Siga em frente em direção ao refeitório",
        "Vire a direita e desça pela passarela em direção a entrada do bloco A",
        "O Protocolo está logo na entrada principal"];
    }
    else if ((partida == "F") && (chegada == "Protocolo")){
        return["Siga pelo corredor para acessar a rampa",
        "Desça, passe pelo refeitório e acesse a passarela logo em frente",
        "Desça a passarela em direção a entrada do bloco A",
        "O Protocolo se encontra na entrada principal"];
    }
}