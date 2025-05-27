const data_regionals = []

function addRegional() {
    
   
    id = data_regionals.length;
    const form = document.querySelector('#formRegional')
    
    const inputSig = form.querySelector('input[name="sigla"]')
    const inputCid = form.querySelector('input[name="cidade"]')
    regiao = {sigla: inputSig.value, cidade: inputCid.value};
    data_regionals.push(regiao);


    const table = document.querySelector('#table_regional')

    const line = document.createElement('tr')
    const columId = document.createElement('td')
    const columSig = document.createElement('td')
    const columCid = document.createElement('td')

    columId.textContent = id + 1;
    columSig.textContent = inputSig.value.toUpperCase()
    columCid.textContent = inputCid.value

    line.appendChild(columId);
    line.appendChild(columSig);
    line.appendChild(columCid);
    table.appendChild(line)
    
    form.reset();
    addAgentRegional();
    drawChart();

}   

function addAgentRegional () {
    
 
    form = document.querySelector('#formRegional')

    const select = document.querySelector('#select_regional');

    const op = document.createElement('option');

    data_regionals.forEach(regional=>{
        op.textContent = regional.cidade
        op.value = regional.cidade
        select.appendChild(op)
    })
}