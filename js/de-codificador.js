
function criptografaDescriptografa(elemento) {
		
	var entradaTexto = document.getElementById("mensagem");
	var texto = entradaTexto.value;
	var idElemento = elemento.srcElement.attributes.id.value;

	if(texto == "") {
		alert("Primeiramente digite um texto!");
	}
	else {

		if(idElemento == "botao-criptografar") {

			for(var i = 0; i < conteudoOriginal.length; i++) {

				texto = texto.replaceAll(conteudoOriginal[i], chaveCriptografia[i]);

			}
		}
		else {

			for(var i = 0; i < conteudoOriginal.length; i++) {

				texto = texto.replaceAll(chaveCriptografia[i], conteudoOriginal[i]);

			}

		}

		document.getElementById("saida-texto-criptografado").innerHTML = texto;			
		
		document.getElementById("saida-texto-criptografado").style.display = "grid";
		document.getElementById("div-botao-copiar").style.display = "grid";
		document.getElementById("div-imagem").style.display = "none"; 

	}		
}

function copiarParaAreaTransferencia() {

	var conteudo = document.getElementById("saida-texto-criptografado").innerHTML;		
    navigator.clipboard.writeText(conteudo);
    
}

var conteudoOriginal = ["e", "i", "a", "o", "u"];
var chaveCriptografia = ["enter",  "imes", "ai", "ober", "ufat"];

var botaoCriptografia = document.getElementById("botao-criptografar");
var botaoDescriptografia = document.getElementById("botao-descriptografar");
var botaoCopiar = document.getElementById("botao-copiar");

document.getElementById("saida-texto-criptografado").style.display = "none";
document.getElementById("div-botao-copiar").style.display = "none";
botaoCriptografia.onclick=criptografaDescriptografa;	
botaoDescriptografia.onclick=criptografaDescriptografa;
botaoCopiar.onclick=copiarParaAreaTransferencia;
