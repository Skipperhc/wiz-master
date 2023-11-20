var questoesRespostas = [
    {
        questao: "A matemática desenvolveu-se principalmente em quais locais do planeta??",
        opcoes: [
            {
                texto: "Mesopotâmia, Egito, Grécia, Índia e Oriente Médio",
                valor: true
            },
            {
                texto: "Grécia, Alemanha, França, China e Índia",
                valor: false
            },
            {
                texto: "Reino, Unido, Itália, Rússia, Estados Unidos e Irã",
                valor: false
            }
        ]
    },
    {
        questao: "Atualmente qual é a definição de matemática mais aceita pelos matematicos??",
        opcoes: [
            {
                texto: "a matemática é a ciência das regularidades",
                valor: true
            },
            {
                texto: "Estudo de Padrões e Estruturas Abstratas",
                valor: false
            },
            {
                texto: "Linguagem Universal da Ciência",
                valor: false
            }
        ]
    },
    {
        questao: "Qual foi o 1° objeto encontrado que confirma a habilidade de cálculo?",
        opcoes: [
            {
                texto: "ábaco",
                valor: false
            },
            {
                texto: "calculadora financeira",
                valor: false
            },
            {
                texto: "Osso de Ishango",
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
            window.location.replace("./quiz_M.html")
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