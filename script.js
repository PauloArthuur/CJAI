var botao = document.getElementById("botao");
var mostrar = document.getElementById("mostrar");
var ano1 = document.getElementById("ano");
botao.addEventListener("click", Calcular);
var data = new Date();
var anoAtual = data.getFullYear();
var img = document.createElement("img");
img.setAttribute("id", "photo");

function Calcular() {
    var ano = Number(ano1.value);

    if (ano === 0 || ano > anoAtual) {
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    } else {
        var resultado = anoAtual - ano;
        var sexo = document.getElementsByName("sexo");
        var genero = "";

        if (sexo[0].checked) {
            genero = "Masculino";
            if (resultado >= 0 && resultado < 10) {
                img.setAttribute("src", "imagem/criancaM.jpg");
            } else if (resultado < 21) {
                img.setAttribute("src", "imagem/jovemM.jpg");
            } else if (resultado < 50) {
                img.setAttribute("src", "imagem/adultoM.jpg");
            } else {
                img.setAttribute("src", "imagem/idosoM.jpg");
            }
        } else if (sexo[1].checked) {
            genero = "Feminino";
            if (resultado >= 0 && resultado < 10) {
                img.setAttribute("src", "imagem/criancaF.jpg");
            } else if (resultado < 21) {
                img.setAttribute("src", "imagem/jovemF.jpg");
            } else if (resultado < 50) {
                img.setAttribute("src", "imagem/adultaF.jpg");
            } else {
                img.setAttribute("src", "imagem/idosaF.jpg");
            }
        }

        img.style.width = "250px";
        img.style.height = "250px";
        img.style.borderRadius = "50%";
        img.style.marginTop = "20px"
        mostrar.style.marginTop = "20px"
        mostrar.innerHTML = `Gênero: ${genero} de ${resultado} anos`;
        mostrar.appendChild(img);
    }
}