var questoesRespostas = [
    {
        questao: "Geografia é uma área da ciência dedicada a qual estudo?",
        opcoes: [
            {
                texto: "Ao estudo da superfície do planeta terra.",
                valor: true
            },
            {
                texto: "Ao estudo da vida do planeta terra",
                valor: false
            },
            {
                texto: "Ao estudo das estrelas e universo",
                valor: false
            }
        ]
    },
    {
        questao: "Quais os dois ramos que podem ser definidos na geografia?",
        opcoes: [
            {
                texto: "Exatas e comtabeis",
                valor: false
            },
            {
                texto: "humana e física",
                valor: true
            },
            {
                texto: "1/2 de uma banana",
                valor: false
            }
        ]
    },
    {
        questao: "Quem foi a 1° pessoa a usar o termo γεωγραφία?",
        opcoes: [
            {
                texto: "Sócrates",
                valor: false
            },
            {
                texto: "Aristóteles",
                valor: false
            },
            {
                texto: "Eratóstenes",
                valor: true
            }
        ]
    },
];

var controleQuestoes = 0;
var points = 0;

function proxQuestao(escolha) {
    if (questoesRespostas.length > controleQuestoes) {
        document.getElementById("questao").innerHTML = questoesRespostas[controleQuestoes].questao
        document.getElementById("answer1").innerHTML = questoesRespostas[controleQuestoes].opcoes[0].texto
        document.getElementById("answer2").innerHTML = questoesRespostas[controleQuestoes].opcoes[1].texto
        document.getElementById("answer3").innerHTML = questoesRespostas[controleQuestoes].opcoes[2].texto
        var respostaCorreta = questoesRespostas[controleQuestoes].opcoes[escolha].valor
        if (respostaCorreta) {
            points = points + 1
        }
        document.getElementById("number_points").innerHTML = points
        console.log("passou na função", questoesRespostas.length, " - ", controleQuestoes)
        controleQuestoes = controleQuestoes + 1;
    } else {
        if(points >=2) {
            alert("Parabens, vc passou!!")
        } else {
            alert("Infelizmente não atingiu a nota mínima, tente novamente")
            window.location.replace("./quiz_G.html")
        }
        document.getElementById("number_points").innerHTML = points
    }
}

window.onload = function () {
    document.getElementById("questao").innerHTML = questoesRespostas[controleQuestoes].questao
    document.getElementById("answer1").innerHTML = questoesRespostas[controleQuestoes].opcoes[0].texto
    document.getElementById("answer2").innerHTML = questoesRespostas[controleQuestoes].opcoes[1].texto
    document.getElementById("answer3").innerHTML = questoesRespostas[controleQuestoes].opcoes[2].texto
}