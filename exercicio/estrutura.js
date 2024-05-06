const Fila = (_locaSaida) => {
    let locaSaida = _locaSaida;
    let dados = [];
    tamanho = () => dados.length;
    const enfileirar = valor => {
        dados.push(valor);
        imprimir();
    }
    const desenfileirar = () => {
        dados.splice(0, 1);
        imprimir();
    }
    const imprimir = () => {
        console.log(dados);
        dado_saida = "";
        for (let i = 0; i < tamanho(); i++) {
            dado_saida += dados[i].id + "(" + dados[i].itens + ") ";
        }
        document.getElementById(locaSaida).innerHTML = dado_saida;
    }

    return {
        enfileirar,
        desenfileirar
    }
}
const f1 = Fila('saidaFilaGeral');

const Cliente = (_id, _itens) => {
    return {
        id: _id,
        itens: _itens
    }
}

const chamarCx1 = () => {

}

const gerarItens = () => Math.floor(Math.random() * (15 - 3) + 2);
const tamanhoInicialFila = 15;
(function () {
    for (let i = 1; i <= tamanhoInicialFila; i++) {
        f1.enfileirar(Cliente("P" + i, gerarItens()));
    }
})();


///let fila = Fila();
//document.querySelector("#btnInserir").onclick = function(){
  //  fila.inserir(document.getElementById("valor").value);
//}
//document.querySelector("#valor").onkeyup = function(e){
 //   if(e.keyCode == 13){
   //     fila.inserir(document.getElementById('valor').value);
     //   document.getElementById('valor').value = "";
       // document.getElementById('valor').focus();
    //}


    //}
//document.querySelector("#btnRemover").onclick = function(){
  //  document.getElementById("removido_fila").innerHTML = fila.remover();
//}