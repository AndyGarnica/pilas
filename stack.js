var nombresCompletos = [];

function Stack (){
  var nombreComp = [];
  this.push = function (element){
    nombreComp.push(element);
  };
  this.pop = function (){
    return nombreComp.pop();
  };
}
var nombre = new Stack();
nombre.push("Andy");
nombre.push("Raul");
nombre.push("Esau");
nombre.push("Mayra");
nombre.push("Monserrat");

var apellido = new Stack();
apellido.push("Garnica");
apellido.push("Gonzalez");
apellido.push("Nuve");
apellido.push("Reyes");
apellido.push("Luna");

for (var i=0; i<5; i++){
  nombresCompletos.push(nombre.pop() + " " + apellido.pop());
}
document.write(nombresCompletos);
