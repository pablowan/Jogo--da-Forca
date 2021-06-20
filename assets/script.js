/*
2 Descricao:Script para reproduzir o famoso jogo da forca. O jogador que tenta adivinhar a palavra deve ir dizendo as letras que podem existir na palavra. Cada letra que ele acerta é escrita no espaço correspondente. Caso a letra não exista nessa palavra, desenha-se uma parte do corpo (iniciando pela cabeça, tronco, braços) nesse script utilizamos uma sequencia de imagens para representar esse corpo
3 O que o arquivo faz ...
4 Aluno: Pablo Junio Souza Santos
6 Data: 18/06/2021*/
let palavras = ["Web", "frontend", "bsi", "html", "css", "javascript", "atividade", "jogo", "forca", "desenvolvimento", "aplicativo", "jogo", "site", "pagina"];
//Palavras a serem descobertas no jogo 
let palavra = palavras[Math.floor(Math.random() * palavras.length)]; //Palavras aparecem aleatoriamente

let chances = 6; // Letras que pode errar
let acertos = 0; // Ao acertar o jogo finaliza e da a mensagem de acerto

let imagem = 0;

let posicao;

for (posicao = 0; posicao < palavra.length; posicao++) { //Percorrer o vetor Palavras
    let span = document.createElement("span");
    span.setAttribute('id', posicao);

    let div = document.getElementById("palavra");
    div.appendChild(span);
}

let alfabeto = "abcdefghijklmnopqrstuvwxyz"; //Letras disponiveis para tentativa
let letras = alfabeto.split("");

for (posicao = 0; posicao < letras.length; posicao++) { //Percorrendo as posições do vetor
    let botao = document.createElement("button"); //Botão para letra
    let letra = document.createTextNode(letras[posicao]);
    
    botao.appendChild(letra);
    botao.setAttribute('onclick', 'escolheLetra(\''+letras[posicao]+'\')');
    botao.setAttribute('id', letras[posicao]);

    let div = document.getElementById("letras");
    div.appendChild(botao);
}

function escolheLetra(letra) { //O jogo se inicializará automaticamente ao escolher uma letra

    let acertou = false;

    for (posicao = 0; posicao < palavra.length; posicao++) {
        if (letra === palavra[posicao]) { // Condição para acessar a posição da palavra a ser descoberta 
            let span = document.getElementById(posicao);
            let l = document.createTextNode(letra);

            span.appendChild(l);

            let botao = document.getElementById(letra);
            botao.setAttribute('class', 'certa');
            botao.removeAttribute('onclick');

            acertos++;
            acertou = true;
        }
    }

    if (acertou === false) { //Condição de erro, caso erre uma letra a imagem será incrementada
        imagem++;
        document.getElementById("forca").src = "images/forca-"+imagem+".jpg";

        var botao = document.getElementById(letra);
        botao.setAttribute('class', 'errada');
        botao.removeAttribute('onclick');
        chances--; // Suas chaces diminuem a cada erro
        
    }

    if (chances === 0) { // Condição, caso erre muitas vezes e gaste suas chances, apresenta as seguinte menssagens
        let mensagem = document.createElement("p");
        let t1 = document.createTextNode("Você foi enforcado!");
        mensagem.appendChild(t1);
           
        let botao = document.createElement("button");
        let t2 = document.createTextNode("jogar novamente"); //Mensagem do botão que possibilita tentar novamente
        
        botao.appendChild(t2);
        botao.setAttribute('class', 'novo-bt');
        botao.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("novo");
        div.appendChild(mensagem);
        div.appendChild(botao);
    }

    if (acertos === palavra.length) { //Condição caso acerte todas as letras, recebe a mensagem de acerto e a opção de tentar nnovamente
        let mensagem = document.createElement("p");
        let t1 = document.createTextNode("Você se salvou!");
        mensagem.appendChild(t1);

        let botao = document.createElement("button");
        let t2 = document.createTextNode("jogar novamente");
        
        botao.appendChild(t2);
        botao.setAttribute('class', 'novo-bt');
        botao.setAttribute('onclick', 'window.location.reload()'); //Atualiza a página e apresenta o novo conteudo, uma nova palavra aleatoria para que possa jogar mais

        let div = document.getElementById("novo");
        div.appendChild(mensagem);
        div.appendChild(botao);
    }
}







