const data_agents = []

function addAgent(){
   
    const form = document.querySelector('#formAgent')

    const inputNomAgent = form.querySelector('input[name="nome"]')

    const selectReg = form.querySelector('select[name="regional"]')

    agent = {nome: inputNomAgent.value, regiao: selectReg.value};
    data_agents.push(agent)
    
    const table = document.querySelector('#table_agent')

    const line = document.createElement('tr')
    const columId = document.createElement('td')
    const columNome = document.createElement('td')
    const columRegiao = document.createElement('td')

    columId.textContent = data_agents.length;
    columNome.textContent = inputNomAgent.value
    columRegiao.textContent = selectReg.value

    line.appendChild(columId);
    line.appendChild(columNome);
    line.appendChild(columRegiao);
    table.appendChild(line)

    form.reset();
    addAgentReport();
    drawChart();

}

function addAgentReport () {
  
    form = document.querySelector('#formReport')
 
    const select = document.querySelector('#select_agent');
   
    const op = document.createElement('option');

    data_agents.forEach(agent=>{
        op.textContent = agent.nome
        op.value = agent.nome
        select.appendChild(op)
    })
}