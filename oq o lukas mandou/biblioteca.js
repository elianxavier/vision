var i;
prompt("Qual bloco você está?");
var f;
prompt("Para onde você quer ir?");

function PontoFinalBiblioteca(){
    if ((i == A) && (f == Biblioteca)) {
        alert("Siga pelo corredor para acessar a saída");
        alert("Vire a esquerda no no calçamento e siga em frente");
        alert("A Biblioteca se encontra logo em frente");
    }
    else if ((i == B) && (f == Biblioteca)){
        alert("Siga pelo corredor para acesso ao patio");
        alert("Vire a esquerda");
        alert("A Biblioteca se encontra logo em frente ao pátio");
    }
    else if ((i == C) && (f == Biblioteca)) {
        alert("Siga pelo corredor até o pátio");
        alert("A Biblioteca se encontra a sua esquerda");
    }
    else if ((i == D) && (f == Biblioteca)){
        alert("Siga pelo corredor para ter acessoa passarela");
        alert("Vire a esquerda em frente o refeitório");
        alert("Desça pela passarela até o pátio");
        alert("A Biblioteca se encontra logo em frente");
    }
    else if ((i == E) && (f == Biblioteca)){
        alert("Siga em frente para ter acesso a passarela");
        alert("Siga em frente em direção ao refeitório");
        alert("Vire a direita e desça pela passarela em direção ao pátio");
        alert("A Biblioteca está logo em frente");
    }
    else if ((i == F) && (f == Biblioteca)){
        alert("Siga pelo corredor para acessar a rampa");
        alert("Desça, passe pelo refeitório e acesse a passarela logo em frente");
        alert("Desça a passarela em direção ao pátio");
        alert("A Biblioteca se encontra logo em frente");
    }
}