function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos pelo ID "resultados-pequisa"
    let section = document.getElementById("resultados-pequisa");

    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";

    // Itera sobre cada objeto (dado) no array de dados
    for (let dado of dados) {
        // Concatena HTML para criar um novo item de resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}


