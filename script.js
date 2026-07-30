const elementos = document.querySelectorAll(".animar");

function revelar(){
    elementos.forEach((el)=>{
        const topo = el.getBoundingClientRect().top;
        const tela = window.innerHeight - 100;

        if(topo < tela){
            el.classList.add("ativo");
        }
    });
}

window.addEventListener("scroll", revelar);
revelar();

const slides = document.querySelectorAll(".slide");

let atual = 0;

function mostrarSlide(indice){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[indice].classList.add("active");

}

document.querySelector(".next").onclick = ()=>{

    atual++;

    if(atual >= slides.length){
        atual = 0;
    }

    mostrarSlide(atual);

}

document.querySelector(".prev").onclick = ()=>{

    atual--;

    if(atual < 0){
        atual = slides.length - 1;
    }

    mostrarSlide(atual);

}

setInterval(()=>{

    atual++;

    if(atual >= slides.length){
        atual = 0;
    }

    mostrarSlide(atual);

},4000);

let nome = "Junior";
alert("Olá, " + nome + "!");



