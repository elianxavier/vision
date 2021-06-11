var i;
prompt("Qual bloco você está?");
var f;
prompt("Para onde você quer ir?");

function PontoInicialBlocoA(){
    if ((i == A) && (f == B)) {
        alert("Siga pelo corredor para acessar a saída");
        alert("Vire a esquerda no no calçamento e siga em frente");
        alert("Acesse o corredor do Bloco B a sua direita");
    }
    else if ((i == A) && (f == C)){
        alert("Siga pelo corredor para acesso a passarela");
        alert("Vire a esquerda sentido a biblioteca");
        alert("Vire a direita para acessar o corredor do bloco C");
    }
    else if ((i == A) && (f == D)) {
        alert("Siga pelo corredor para acessar a passarela");
        alert("Suba em direção o refeitório");
        alert("No lado esquerdo há uma rampa de acesso ao bloco D");
        alert("Suba a rampa para ter acesso as salas do bloco D");
    }
    else if ((i == A) && (f == E)) {
        alert("Siga pelo corredor para ter acessoa passarela");
        alert("Vire a esquerda em frente o refeitório");
        alert("As salas do bloco E estão no térro");
    }
    else if((i == A) && (f == F)){
        alert("Siga em frente para ter acesso a passarela");
        alert("Siga em frente em direção ao refeitório");
        alert("Vire a esquerda para ter acesso a rampa do bloco F");
        alert("Suba a rampa de acesso do bloco F para encontrar as salas");
    }
}