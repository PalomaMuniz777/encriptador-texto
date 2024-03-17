function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado com sucesso";
      parrafo.textContent = "";
      
    } else {
      
      tituloMensaje.textContent = "Nenhuma mensagem encontrada";
      parrafo.textContent = "Coloque o texto que deseja encripar ou desencriptar";
      alert ("Ooops!", "Coloque um texto aqui!", "warning");
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado com sucesso";
        parrafo.textContent = "";
        
      } else {
       
      tituloMensaje.textContent = "Nenhuma mensagem encontrada";
      parrafo.textContent = "Coloque o texto que deseja encripar ou desencriptar";
      alert ("Ooops!", "Coloque um texto aqui!", "warning");

      }
  }