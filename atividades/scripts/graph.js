function drawChart() {

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Element', 'Density', { role: 'style' }],
            ['Agentes', data_agents.length, '#d1e7dd'],            // RGB value
            ['Assuntos', data_subjects.length, '#cfe2ff'],            // English color name
            ['Regionais', data_regionals.length, '#fff3cd'],
            ['Relatorios', data_reports.length, '#f8d7da' ], // CSS-style declaration
        ]);

        var options = {};

        var chart = new google.visualization.ColumnChart(document.getElementById('chart'));

        chart.draw(data, options);
    }
}
