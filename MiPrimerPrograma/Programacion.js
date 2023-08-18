var a,b,suma,resta,mult,divi;
a = prompt("Ingrese el valor entero");
b = prompt("Ingrese el valor entero");
if (a > b) {
    var mayor = a;
} else {
    var mayor = b;
}
suma = parseInt(a)+parseInt(b);
resta = parseInt(a)-parseInt(b);
mult = parseInt(a)*parseInt(b);
divi = parseInt(a)/parseInt(b);
var datos = document.getElementById("datos");
datos.innerHTML=`
<h2>El mayor de los números es: ${mayor}</h2>
<h2> la suma de los valores ${a} y ${b} es : ${suma}</h2>
<h2> la resta de los valores ${a} y ${b} es : ${resta}</h2>
<h2> la multipicacion de los valores ${a} y ${b} es : ${mult}</h2>
<h2> la division de los valores ${a} y ${b} es : ${divi}</h2>
`;

var sequence = "Secuencia de números entre a y b: ";
for (var i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sequence += i + " ";
}
datos.innerHTML += `<p>${sequence}</p>`;

