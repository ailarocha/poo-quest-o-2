// Lista de palavras de ligação (preposições e conjunções) que não devem ser capitalizadas
const palavrasLigacao = ["da", "das", "de", "do", "dos", "e"];

// Função que processa o nome do usuário
function processName() {
  var name = document.getElementById("name").value.trim();
  
  // Divide o nome em palavras
  var words = name.split(/\s+/);
  var wordCount = words.length;

  // Função que capitaliza a primeira letra, exceto palavras de ligação
  var formattedName = words.map((word, index) => {
    // Converte a palavra para minúsculo
    word = word.toLowerCase();
    // Verifica se é uma palavra de ligação
    if (palavrasLigacao.includes(word) && index !== 0) {
      return word; // Deixa a palavra de ligação minúscula
    } else {
      // Capitaliza a primeira letra das outras palavras
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  }).join(' ');

  // Exibe o resultado
  document.getElementById("result").innerHTML = 
    "Nome formatado: " + formattedName + "<br>" +
    "Quantidade de palavras: " + wordCount;
}
