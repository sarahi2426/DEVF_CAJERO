abonarBtn.addEventListener("click", function (event){
    const abonadoDiv = document.querySelector(".abonado");
    const totalDiv = document.querySelector(".total");
    abonadoDiv.style.display = "flex"
    totalDiv.style.display="flex"
});
// saldo anterior
let saldoAnterior = JSON.parse(localStorage.getItem("saldoDeUsuario"))
console.log(saldoAnterior)
//cantidad usuario
const cantidadInput = document.getElementById("cantidad");

let cantidadAbodana = "";

cantidadInput.addEventListener("change", function (event) {
    cantidadAbodana = event.target.value;
    console.log(cantidadAbodana)
//tu abono es
    document.getElementById("abono").innerHTML = cantidadAbodana
    let cantidadUsuario = Number(cantidadAbodana)
console.log(cantidadUsuario)
// saldo total
let saldoTotal = saldoAnterior + cantidadUsuario
console.log(saldoTotal)
//su saldo total es:
document.getElementById("saldoTotal").innerHTML = saldoTotal

localStorage.setItem("saldoTotal", JSON.stringify(saldoTotal));

});





