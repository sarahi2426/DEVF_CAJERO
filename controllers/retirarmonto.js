retirarBtn.addEventListener("click", function (event){
    const retiradoDiv = document.querySelector(".retirado");
    const totalDiv = document.querySelector(".total");
    retiradoDiv.style.display = "flex"
    totalDiv.style.display="flex"
});

// saldo anterior
let saldoAnterior = JSON.parse(localStorage.getItem("saldoDeUsuario"))
console.log(saldoAnterior)
//cantidad usuario
const cantidadInput = document.getElementById("cantidad");

let retiroSaldo = "";

cantidadInput.addEventListener("change", function (event) {
    retiroSaldo = event.target.value;
    console.log(retiroSaldo)
//tu retiro es
    document.getElementById("retirado").innerHTML = retiroSaldo
    let cantidadUsuario = Number(retiroSaldo)
    console.log(cantidadUsuario)

    if(cantidadUsuario < saldoAnterior){
        let saldoTotal = saldoAnterior - retiroSaldo
        console.log(saldoTotal)
        document.getElementById("saldoTotal").innerHTML = saldoTotal

localStorage.setItem("saldoTotal", JSON.stringify(saldoTotal));

    }else{
        console.log("kha")
        alert("Tu saldo es insuficente")
    }
// saldo total

//su saldo total es:

});