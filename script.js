document.getElementById("calcular").addEventListener('click', function(){
    let valor = document.getElementById("valor").value
    let taxa = (document.getElementById("taxa").value) / 100
    let tempo = document.getElementById("tempo").value

    let total = valor * (1 + taxa)**tempo

    document.getElementById("total").innerHTML = "R$" + total.toFixed(2)  
})