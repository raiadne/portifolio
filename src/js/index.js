// OBJETIVO -  quando clicarmos na aba, temos que mostrar o 
// conteudo da aba que foi clicada pelo usuário
//  e esconder o conteúdo da aba anterior.

//     - passo 1 : dar um jeito de pegar os elementos que
//   representam as abas no HTML.

//     - passo 2: dar um jeito de identificar o clique 
//  no elemento da aba.

//     - passo 3: quando o usuario clicar, desmarcar a 
//  aba selecionada.

//     - passo 4: marcar a aba clicada como selecionada 

//     - passo 5:esconder o conteudo anterior.

//     - passo 6: mostrar o conteudo da aba selecionada.


//passo 1 : dar um jeito de pegar os elementos que representam as abas no HTML.
const abas = document.querySelectorAll(".aba");
console.log(abas);

// passo 2: dar um jeito de identificar o clique no elemento da aba.
abas.forEach(aba => {

    aba.addEventListener("click", function () {

        if(aba.classList.contains("selecionada")){
            console.log("Agora já estou selecionada")
            return
        }

        selecionarAba(aba)
        mostarInformacao(aba)
    })

})

function selecionarAba(aba){
    // passo 3: quando o usuario clicar, desmarcar a aba selecionada.
    const abaSelecionada = document.querySelector(".aba.selecionada")
    console.log(abaSelecionada);
    abaSelecionada.classList.remove("selecionada");

    // passo 4: marcar a aba clicada como selecionada.
    aba.classList.add("selecionada");

}

function mostarInformacao(aba){
     // passo 5:esconder o conteudo anterior.
     const informacaoSelecionada = document.querySelector(".informacao.selecionada");
     // console.log(informacaoSelecionada);
     informacaoSelecionada.classList.remove("selecionada");

     // passo 6: mostrar o conteudo da aba selecionada.
     // console.log(aba.id)
     const idDoElementoDaInformacaoDaAba = `informacao-${aba.id}`
     console.log(idDoElementoDaInformacaoDaAba)

     const informacaoASerMostrada = document.getElementById(idDoElementoDaInformacaoDaAba)
     informacaoASerMostrada.classList.add("selecionada")

}