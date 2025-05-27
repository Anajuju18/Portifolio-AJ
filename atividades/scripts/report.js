const data_reports = []

function addReport(){
     /*
    -------------------------
    PARTE QUE RECEBE OS DADOS
    -------------------------
    */
    const form = document.querySelector('#formReport');

    const inputData = form.querySelector('input[name="data"]')

    const selectAssunto = form.querySelector('select[name="assunto"]')

    const selectAgente = form.querySelector('select[name="agente"]')

    report = {data: inputData.value, assunto: selectAssunto.value, agente: selectAgente.value}
    data_reports.push(report)

     /*
    ------------------------------
        PARTE QUE INSERE NA TABELA
    ------------------------------
    */
    const table = document.querySelector('#table_report')

    const line = document.createElement('tr')
    const columId = document.createElement('td')
    const columData = document.createElement('td')
    const columAssunto = document.createElement('td')
    const columAgente = document.createElement('td')

    columId.textContent = data_reports.length;
    columData.textContent = inputData.value;
    columAssunto.textContent = selectAssunto.value;
    columAgente.textContent = selectAgente.value;

    line.appendChild(columId);
    line.appendChild(columData);
    line.appendChild(columAssunto);
    line.appendChild(columAgente);
    table.appendChild(line)
    
    form.reset();
    drawChart();


}