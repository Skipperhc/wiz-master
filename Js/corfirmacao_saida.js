function confirme() {
    let text = "Tem certeza que deseja sair do curso?";
    if (confirm(text) == true) {
        text = "Confirmou";
        window.location.href = "";
    } else {
        text = "Cancelou";
    }
   
}

function sairConta() {
    let text = "Tem certeza que deseja sair da conta?";
    if (confirm(text) == true) {
        text = "Confirmou";
        window.location.href = "";
    } else {
        text = "Cancelou";
    }
   
}