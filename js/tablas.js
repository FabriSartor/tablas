function dineroCofla(){
let dineroCofla = prompt("ingrese la cantidad de dinero que posee cofla");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1){
    alert("comprate el helado de agua");
    alert("el vuelto sera"+ (dineroCofla-0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6){
    alert("comprate el helado de crema");
    alert("el vuelto sera"+ (dineroCofla-1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("comprate el helado bombom");
    alert("el vuelto sera"+ (dineroCofla-1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("comprate el helado de heladovich");
    alert("el vuelto sera"+ (dineroCofla-1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("comprate el helado de helardo");
    alert("el vuelto sera"+ (dineroCofla-1.8));
}
else if (dineroCofla >= 2.9){
    alert("comprate el helado de 1/4");
    alert("el vuelto sera "+ (dineroCofla - 2.9));
}
else {
    alert("pobre de mierda");
};
}

function colour1(){
    let oscuro=document.getElementById("claro");
    oscuro.style.backgroundColor="black";
}
function colour2(){
    let claro=document.getElementById("claro");
    claro.style.backgroundColor="white";
}
function colour3(){
    let oscuro=document.getElementById("oscuro");
    oscuro.style.backgroundColor="grey";
}
function colour4(){
    let claro=document.getElementById("dark");
    claro.style.backgroundColor="white";
}
function pnya() {
    let nombre=prompt("ingrese su nombre");
    let apellido=prompt("ingrese su apellido");
    alert (`hola ${nombre} ${apellido}`); 
}

function dinero2(){
let dineroPetro = prompt("ingrese la cantidad de dinero que tiene petro");
dineroPetro = parseInt(dineroPetro);

if (dineroPetro < 1){
    document.write("pobre de mierda no te alcanza para nada");
}
if (dineroPetro == 1) {
    document.write ("le alcanza para comprar 1");
    document.write("le sobra "+ (dineroPetro-1));
}
else if (dineroPetro == 2){
    document.write ("le alcanza para comprar 2");
    document.write("le sobra "+ (dineroPetro-2));
}
else if (dineroPetro >=3){
    document.write ("le alcanza para comprar 3 "+ "<br>");
    document.write("le sobra "+ (dineroPetro-3)+"<br>");
    let dinero = (dineroPetro-3);
    document.write("regala "+ dinero);
}
}

