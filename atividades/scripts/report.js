const data_reports = []

function addReport(){
   
    const form = document.querySelector('#formReport');

    const inputDt = form.querySelector('input[name="data"]')

    const selectAssunt = form.querySelector('select[name="assunto"]')

    const selectAgente = form.querySelector('select[name="agente"]')

    report = {data: inputDt.value, assunto: selectAssunt.value, agente: selectAgente.value}
    data_reports.push(report)

   
    const table = document.querySelector('#table_report')

    const line = document.createElement('tr')
    const columId = document.createElement('td')
    const columDt = document.createElement('td')
    const columAssunto = document.createElement('td')
    const columAgente = document.createElement('td')

    columId.textContent = data_reports.length;
    columDt.textContent = inputDt.value;
    columAssunto.textContent = selectAssunt.value;
    columAgente.textContent = selectAgente.value;

    line.appendChild(columId);
    line.appendChild(columDt);
    line.appendChild(columAssunto);
    line.appendChild(columAgente);
    table.appendChild(line)
    
    form.reset();
    drawChart();


}