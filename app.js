function pesquisar() {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor do campo de pesquisa e remove espaços em branco
  let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

 // Verifica se o campo de pesquisa ficou vazio após remover os espaços
if (!campoPesquisa) {
  section.innerHTML = "<p class='mensagem-vazia'>Busca vazia, insira o ano no campo de busca</p>";
  return;
}


  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let ano = "";

  // Itera sobre cada objeto (dado) no array de dados
  for (let dado of dados) {
      ano = dado.ano;

      // Verifica se a pesquisa é encontrada em algum dos campos
      if (ano == (campoPesquisa)) {
          // Cria um novo elemento para o resultado
          resultados += `
    <div class="item-resultado">
        <h2>${dado.musica}</h2>
        <p class="descricao-meta">${dado.ano}</p>
        <a href="${dado.link}" target="_blank">
            <img src="pngplay.png" alt="Escute a música" class="imagem-link">
        </a>
    </div>
`;
      }
  }

  if (!resultados) {
    resultados = "<p class='mensagem-erro'>Nada foi encontrado, insira o ano completo</p>";
}


  // Atribui o HTML gerado para a seção de resultados
  section.innerHTML = resultados;
}