/*Yago Henrique Ribeiro Pereira & 26110454*/
const formulario = document.getElementById("calcForm")

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    const a = Number(document.getElementById("num1").value)
    const b = Number(document.getElementById("num2").value)
    const c = Number(document.getElementById("num3").value)

    const soma = a+b+c

    document.getElementById("resultado").textContent = soma
})
