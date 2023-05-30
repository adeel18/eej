$(document).ready(function () {
 
    // Chart Start
    google.load('visualization', '1', {
        packages: ['corechart', 'bar', 'line']
    });    
    google.setOnLoadCallback(function () {
        // COLUMN CHART
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Monthy Report');
        data.addColumn('number', 'Cumul Objectif');
        data.addColumn('number', 'Cumul Realisation TAMANAR');
        data.addRows([
            [{
                v: [1],
                f: 'Mai'
            }, 244, 65],
            [{
                v: [2],
                f: 'Juin'
            }, 488, 137],
            [{
                v: [3],
                f: 'Juillet'
            }, 732, 181],

        ]);    
        var options = {
            title: "Cumul Objectif et Cumul Réalisation ESPACE TAMANAR",
            focusTarget: 'category',
            hAxis: {
                title: 'Monthly Report',
                format: 'MMM yy',
                
            },
            vAxis: {
                title: "Cumul Annuel d'objectif TAMANAR",
                format: 'MMM yy',
            },
            colors: ['#6e4ff5', '#fe3995']
        };    
        var chart = new google.visualization.ColumnChart(document.getElementById('kt_docs_google_chart_column'));
        chart.draw(data, options);
    });
    // Chart Start Close



    
    // chart_pie_sex Start
    google.setOnLoadCallback(function () {
        var Femme=154;
        var Homme=72;
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Sex'],
            ['Femme', Femme],
            ['Homme', Homme]
        ]);
        var options = {
            title: 'Sex',
            colors: ['#fe3995', '#593ae1']
        };
        var chart = new google.visualization.PieChart(document.getElementById('kt_docs_google_chart_pie_sex'));
        chart.draw(data, options);
    });

    // chart_pie_zones Start
    google.setOnLoadCallback(function () {
        var Rurale=97;
        var Urbaine=101;
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Zones'],
            ['Rurale', Rurale],
            ['Urbaine', Urbaine]
        ]);
        var options = {
            title: 'Zones',
            colors: ['#2abe81', '#6e4ff5']
        };
        var chart = new google.visualization.PieChart(document.getElementById('kt_docs_google_chart_pie_zones'));
        chart.draw(data, options);
    });

    // chart_pie_parcours Start
    google.setOnLoadCallback(function () {
        var Emploi=43;
        var Formation=11;
        var Entreprenariat=55;
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Parcours'],
            ['Emploi', Emploi],
            ['Formation', Formation],
            ['Entreprenariat', Entreprenariat]
        ]);
        var options = {
            title: 'parcours',
            colors: ['#fe3995', '#2abe81', '#f6aa33']
        };
        var chart = new google.visualization.PieChart(document.getElementById('kt_docs_google_chart_pie_parcours'));
        chart.draw(data, options);
    });
    
    // chart_pie_situation-actuelle Start
    google.setOnLoadCallback(function () {
        var ChercheurdEmploi=73;
        var NEET=12;
        var Etudiant=95;
        var EnFormation=46;
        var EnEmploi=0;
        var EnStage=0;
        var data = google.visualization.arrayToDataTable([
            ["Task", 'Situation Actuelle'],
            ["Chercheur d'Emploi", ChercheurdEmploi],
            ["NEET", NEET],
            ["Etudiant", Etudiant],
            ["En formation", EnFormation],
            ["En emploi", EnEmploi],
            ["En Stage", EnStage]
        ]);
        var options = {
            title: 'Situation Actuelle',
            colors: ['#fe3995', '#f6aa33', '#6e4ff5', '#2abe81', '#c7d2e7', '#593ae1']
        };
        var chart = new google.visualization.PieChart(document.getElementById('kt_docs_google_chart_pie_situation'));
        chart.draw(data, options);
    });
    // chart_pie_situation-actuelle Close

});