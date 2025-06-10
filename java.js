const botao = document.getElementById("Botaoint");
const paragrafo = document.querySelector(".msgaleatoria");
 
let ultimaMsg = -1;

const mensagens = [

    // Nota: A ordem das mensagens corresponde à constante "numeração" indo do 0 ao 7. 

    "Nunca desista.", 
    "Dúvida é o maior inimigo.",
    "A jornada de mil quilômetros começa com o primeiro passo.",
    "Não deixe que seus medos ocupem o lugar dos seus sonhos.", 
    "A flor que floresce na adversidade é a mais rara e bela de todas.",
    "Cada derrota é uma lição disfarçada...apreenda com cada queda e levante-se mais forte.",
    "Só se vê bem com o coração, o essencial é invisível aos olhos.",
    "Você consegue ver o quão infinito você é?"

];

function exibirmensagem(){
    let numeracaoAtual;
    let mensagemEscolhida;

    paragrafo.classList.remove("animacaoinicio");
    paragrafo.classList.add("fimdamsg");

    setTimeout(() => {

    do {
        numeracaoAtual = Math.floor(Math.random () * mensagens.length);
        
        mensagemEscolhida = mensagens[numeracaoAtual];
    }
    while (numeracaoAtual === ultimaMsg);

    paragrafo.textContent = mensagemEscolhida;

    ultimaMsg = numeracaoAtual;

    paragrafo.classList.remove("fimdamsg");
    paragrafo.classList.add ("animacaoinicio");


}, 200);}

botao.addEventListener("click", exibirmensagem);
