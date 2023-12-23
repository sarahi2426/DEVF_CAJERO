
let usersP= JSON.parse(localStorage.getItem("users"))
console.log( typeof usersP ,"prueba de usuarios")

//usuario nombre
let user = JSON.parse(localStorage.getItem("userValue"))
console.log( typeof user,"prueba usuario name")

document.getElementById("nombre").innerHTML = user

//saldo
let valores = Object.values(usersP);
console.log(valores)

for(let i=0; i< valores.length; i++){
  console.log(valores[i]);
}

function saldoPorPersona (nombre){
    const usuario = valores.find(valores => valores.nombre === nombre);

    if(usuario){
        return usuario.saldo;
    }else{
        return "Nop"
    }
}

const saldoDeUsuario = saldoPorPersona(user)
console.log(saldoDeUsuario)
localStorage.setItem("saldoDeUsuario", JSON.stringify(saldoDeUsuario));

document.getElementById("saldo").innerHTML = saldoDeUsuario



//regresar
const logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", function (event) {
  localStorage.removeItem("logoutButton");
  return (location.href = "./index.html");
});

//saldo por suma
 let saldoNuevoSuma