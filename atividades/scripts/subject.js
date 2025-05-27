const data_subjects = []

function addsubject() {
   


    
    const form = document.querySelector('#formSubject')
    
    const input_desc = form.querySelector('input[name="descricao"]')

    
    subject = {descricao: input_desc.value};
    data_subjects.push(subject)
    

    

    const table = document.querySelector('#table_subject')

    const line = document.createElement('tr')

   
    const id_colum = document.createElement('td')

    const colum_cont = document.createElement('td')

    id_colum.textContent = data_subjects.length;

    colum_cont.textContent = input_desc.value

 
    line.appendChild(id_colum);
    line.appendChild(colum_cont);
    table.appendChild(line);
    

    form.reset()
    addSubjectReport();
    drawChart();
}
function addSubjectReport() {
    
    form = document.querySelector('#formReport')
    
    const select = document.querySelector('#select_subject');
    
    const op = document.createElement('option');

    data_subjects.forEach(subject=>{
        op.textContent = subject.descricao
        op.value = subject.descricao
        select.appendChild(op)
    })
    console.log(subject.descricao)
}