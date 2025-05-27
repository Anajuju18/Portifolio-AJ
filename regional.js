const data_regionals = []

function addRegional() {
    
    /*
    -------------------------
    PARTE QUE RECEBE OS DADOS
    -------------------------
    */
    id = data_regionals.length;
    const form = document.querySelector('#formRegional')
    
    const inputSigla = form.querySelector('input[name="sigla"]')
    const inputCidade = form.querySelector('input[name="cidade"]')
    regiao = {sigla: inputSigla.value, cidade: inputCidade.value};
    data_regionals.push(regiao);

     /*
    ------------------------------
        PARTE QUE INSERE NA TABELA
    ------------------------------
    */

    const table = document.querySelector('#table_regional')

    const line = document.createElement('tr')
    const columId = document.createElement('td')
    const columSigla = document.createElement('td')
    const columCidade = document.createElement('td')

    columId.textContent = id + 1;
    columSigla.textContent = inputSigla.value.toUpperCase()
    columCidade.textContent = inputCidade.value

    line.appendChild(columId);
    line.appendChild(columSigla);
    line.appendChild(columCidade);
    table.appendChild(line)
    
    form.reset();
    addAgentRegional();
    drawChart();

}   

function addAgentRegional () {
    /*
    ------------------------------
        PARTE QUE INSERE NO SELECT
        ---------------------------
    */
    // Obtém referência do formulário
    form = document.querySelector('#formRegional')
    // Obtém o valor dos campos de entrada
    const select = document.querySelector('#select_regional');
    // Cria um elemento <option>
    const op = document.createElement('option');

    data_regionals.forEach(regional=>{
        op.textContent = regional.cidade
        op.value = regional.cidade
        select.appendChild(op)
    })
}