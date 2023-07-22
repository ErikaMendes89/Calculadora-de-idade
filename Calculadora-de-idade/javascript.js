function coletordedados (evento){
 evento.preventDefault();

 var Nome = document.querySelector("#nome").value;
 var Data = document.querySelector("#data").value;
 var idade = new Date().getFullYear() - Data;


 var bemvindo = document.querySelector("#bemvindo");
 var mensagemIdade = " ";

 var mensagem;

 if(idade > 30){
    mensagemIdade = "Adulto!";
} else if (idade < 30){
    mensagemIdade = "Jovem!";
} else {
    mensagemIdade = "Não me Lembro!";
}

mensagem =
"<p> Olá, "+
Nome +
", você tem " +
idade + 
" anos, "+
mensagemIdade +
"</p>";

bemvindo.innerHTML = mensagem;
}

var meuForm = document.querySelector("#formulario");
meuForm.addEventListener ("submit",  coletordedados);
