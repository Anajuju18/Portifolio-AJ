const data_subjects = []

function addsubject() {
    /*
    ------------------------------------------------------------------------
        parte de receber dados do usuario
    ------------------------------------------------------------------------

    */

    //referencia form do html
    const form = document.querySelector('#formSubject')
    
    const input_desc = form.querySelector('input[name="descricao"]')

    
    subject = {descricao: input_desc.value};
    data_subjects.push(subject)
    

    /*
    ------------------------------------------------------------------------
        parte de preencher a tabela
    ------------------------------------------------------------------------
    */

    //referencia table do html
    const table = document.querySelector('#table_subject')

    //essa variavel recebe um elemento tr
    const line = document.createElement('tr')

    //essa variavel recebe um elemento td
    const id_colum = document.createElement('td')

    //essa variavel recebe um elemento tr (conteudo)
    const colum_conteudo = document.createElement('td')

    //adiciona o texto do numero à variavel 
    id_colum.textContent = data_subjects.length;

    //adiciona o texto do conteudo à variavel 
    colum_conteudo.textContent = input_desc.value

    //adiciona os elementos no html
    line.appendChild(id_colum);
    line.appendChild(colum_conteudo);
    table.appendChild(line);
    
    //reseta os campos
    form.reset()
    addSubjectReport();
    drawChart();
}
function addSubjectReport() {
    /*
    ------------------------------
        PARTE QUE INSERE NO SELECT
        ---------------------------
    */
    // Obtém referência do formulário
    form = document.querySelector('#formReport')
    // Obtém o valor dos campos de entrada
    const select = document.querySelector('#select_subject');
    // Cria um elemento <option>
    const op = document.createElement('option');

    data_subjects.forEach(subject=>{
        op.textContent = subject.descricao
        op.value = subject.descricao
        select.appendChild(op)
    })
    console.log(subject.descricao)
}