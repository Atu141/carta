document.addEventListener("DOMContentLoaded", function(){

const mensagem = `Meu amor,

Se eu pudesse pedir algo ao universo, eu pediria para voar com você até a lua. Não apenas para ver o espaço ou tocar as estrelas, mas para compartilhar com você a sensação de que o infinito existe — e que mesmo assim ele parece pequeno quando comparado ao que sinto.

Queria poder caminhar entre as estrelas ao seu lado, imaginar como seria a primavera em mundos distantes, em lugares que ninguém jamais pisou. Porque quando penso em você, sinto que o amor também é assim: vasto, misterioso e cheio de descobertas.

Mas, no fundo, tudo isso significa algo muito simples.
Segure a minha mão.
Fique perto de mim.
E me dê um beijo que faça o tempo parar por um instante.

Você enche minha vida de música. Antes de você, os dias eram silenciosos, quase comuns. Agora cada momento tem ritmo, cada lembrança tem melodia. Estar com você é como viver dentro de uma canção que eu gostaria de cantar para sempre.

Você é tudo aquilo que meu coração procura. É quem eu admiro, quem eu respeito, quem eu escolho amar todos os dias. Em você encontrei algo raro: alguém que transforma o simples ato de existir em algo extraordinário.

Então tudo o que eu peço é verdade. Verdade no olhar, no sentimento, no caminho que construímos juntos.

Porque, em outras palavras — e talvez nas mais sinceras que existem —
eu amo você.

Com todo o meu amor ❤️`;

let i = 0;

function escrever(){

if(i < mensagem.length){

document.getElementById("texto").innerHTML += mensagem.charAt(i);

i++;

setTimeout(escrever,40);

}

}

function abrirCarta(){

document.getElementById("envelope").classList.add("open");

const musica = document.getElementById("musica");

if(musica){
musica.play().catch(()=>{});
}

escrever();

gerarCoracoes();

setTimeout(()=>{

document.getElementById("nomeCeu").classList.add("show");

},1500);

}

document.getElementById("abrirBtn").addEventListener("click", abrirCarta);

function gerarCoracoes(){

const container = document.getElementById("hearts");

setInterval(()=>{

const heart = document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(Math.random()*20+16)+"px";

container.appendChild(heart);

setTimeout(()=>heart.remove(),6000);

},500);

}

const sky=document.getElementById("sky");

for(let i=0;i<150;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*4+"s";

sky.appendChild(star);

}

function estrelaCadente(){

const estrela=document.createElement("div");

estrela.style.position="fixed";

estrela.style.top=Math.random()*40+"vh";

estrela.style.left="-100px";

estrela.style.width="3px";

estrela.style.height="3px";

estrela.style.background="white";

estrela.style.boxShadow="0 0 10px white,0 0 20px white";

estrela.style.transform="rotate(45deg)";

estrela.style.transition="all 1.2s linear";

document.body.appendChild(estrela);

setTimeout(()=>{

estrela.style.left="110vw";

estrela.style.top=(Math.random()*20+20)+"vh";

},50);

setTimeout(()=>estrela.remove(),1300);

}

setInterval(estrelaCadente,8000);

});