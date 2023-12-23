
document.addEventListener("DOMContentLoaded",function(){
    var inputArriba=document.querySelectorAll(".inputPassword input");
    inputArriba.forEach(function(input){
        if (input.value != ""){
            input.nextElementSibling.style.top = '-15px';
            input.nextElementSibling.style.left = '25px';
            input.nextElementSibling.style.fontSize = '20px';
            input.nextElementSibling.style.padding = '0 2px';
            input.nextElementSibling.style.backgroundColor = 'rgb(0, 5, 29)';
        }
    })
});

//arreglo de usuarios//

 const users =[
  {nombre:"mali",password:"abc123",saldo:600},
  {nombre:"gera",password:"1234",saldo:500},
  {nombre:"maui",password:"123",saldo:200},
];

const user1 = { mail: "lauta@gmail.com", password: "abc123" };

const userInput = document.getElementById("userName");
const passwordInput = document.getElementById("passUser");



/* Evento de escucha */

let userValue = "";
let passValue = "";

userInput.addEventListener("change", function (event) {
  userValue = event.target.value.toLowerCase();
  localStorage.setItem("userValue", JSON.stringify(userValue));
  //console.log( userValue)
});

passwordInput.addEventListener("change", function (event) {
    passValue = event.target.value;
    //console.log(passValue)
  });

  /*Login para un usuario
loginButton.addEventListener("click", function (event) {
  if(userValue === user1.mail && passValue === user1.password){
    alert("Usuario logeado correctamente");
  } else{
    alert("NOOOO quedo :V")
  }
  });*/

/* ACCEDER 
loginButton.addEventListener("click", function (event) {
   for (let i = 0; i < users.length; i++) {
    const user = users[i]; 
    console.log(user)
    if (userValue == user.nombre && passValue == user.password) {
      loggedUser = user;
      localStorage.setItem("user", JSON.stringify(loggedUser));

      return (location.href = "../home.html");
    }else{
      alert("Usuario o contraseña incorrecta")
      console.log("no me sale :V")
    }
   }
 });*/
 loginButton.addEventListener("click", function (event) {
  let foundUser = users.find(
    (user) => user.nombre === userValue && user.password === passValue
  ); 


  if (foundUser) {
    loggedUser = foundUser;

    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

    return (location.href = "../home.html");
  }else{
    alert("Usuario o contraseña incorrecta. Intente nuevamente")
  }
  
});
 


 localStorage.setItem("users", JSON.stringify(users));
 //return (location.href = "./home.html");

 //saldo
/*const saldoUsuario = saldo => saldo.forEach(item =>{
  console.log(item,"estos items");

});
saldoUsuario(users);*/

function saldoPorNombre(nombre){
  const usuario = users.find(user => user.name === nombre);
  
  if(usuario){
    return usuario.saldo;
  }else{
    return "Algo no da match"
  }
}

const saldoUsuario = saldoPorNombre (userValue)
console.log(saldoUsuario)
