const data_agents = []

function addAgent(){
    /*
    -------------------------
    PARTE QUE RECEBE OS DADOS
    -------------------------
    */
    const form = document.querySelector('#formAgent')

    const inputNomeAgent = form.querySelector('input[name="nome"]')

    const selectRegional = form.querySelector('select[name="regional"]')

    agent = {nome: inputNomeAgent.value, regiao: selectRegional.value};
    data_agents.push(agent)
    
     /*
    ------------------------------
        PARTE QUE INSERE NA TABELA
    ------------------------------
    */
    const table = document.querySelector('#table_agent')

    const line = document.createElement('tr')
    const columId = document.createElement('td')
    const columNome = document.createElement('td')
    const columRegiao = document.createElement('td')

    columId.textContent = data_agents.length;
    columNome.textContent = inputNomeAgent.value
    columRegiao.textContent = selectRegional.value

    line.appendChild(columId);
    line.appendChild(columNome);
    line.appendChild(columRegiao);
    table.appendChild(line)

    form.reset();
    addAgentReport();
    drawChart();

}

function addAgentReport () {
    /*
    ------------------------------
        PARTE QUE INSERE NO SELECT
        ---------------------------
    */
    // Obtém referência do formulário
    form = document.querySelector('#formReport')
    // Obtém o valor dos campos de entrada
    const select = document.querySelector('#select_agent');
    // Cria um elemento <option>
    const op = document.createElement('option');

    data_agents.forEach(agent=>{
        op.textContent = agent.nome
        op.value = agent.nome
        select.appendChild(op)
    })
}