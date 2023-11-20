var questoesRespostas = [
    {
        questao: "Por qual revolução napoleão ficou famoso?",
        opcoes: [
            {
                texto: "Revolução Gloriosa Inglesa",
                valor: false
            },
            {
                texto: "Revolução Francesa",
                valor: true
            },
            {
                texto: "Revolução Meiji",
                valor: false
            }
        ]
    },
    {
        questao: "Qual a data de nascimento de Napoleão bonaparte??",
        opcoes: [
            {
                texto: "15 de agosto de 2001",
                valor: false
            },
            {
                texto: "15 de agosto de 1769, >:D",
                valor: true
            },
            {
                texto: "15 de agosto de 1759, >:D",
                valor: false
            }
        ]
    },
    {
        questao: "Qual tratado foi assinado em 1797?",
        opcoes: [
            {
                texto: "Tratado de Leoben",
                valor: true
            },
            {
                texto: "Tratado de Lisboa",
                valor: false
            },
            {
                texto: "Tratado de Amesterdão",
                valor: false
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
            window.location.replace("./quiz_H.html")
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