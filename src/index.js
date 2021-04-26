import sampleCreator from './sampleExporter.js';
import getChartConfig from './chart.config.js';
import RVCalculator from './RVcalculator.js';
import pokeListLoader from './pokeListLoader.js';
import moveListLoader from './moveListLoader.js';
import css from './style.css';
import samplecss from './sample.css';

window.onload = function() {
    let sampleChart = document.getElementById('sample chart').getContext('2d');
    let chartConfig = getChartConfig();
    let barChart = new Chart(sampleChart, chartConfig);
    const pokeName = document.getElementById("pokename");
    pokeName.addEventListener('click', function(e){
        pokeName.value = '';
        pokeListLoader(e, barChart, chartConfig);
    });
    pokeName.addEventListener('keyup', function(e) {
        pokeListLoader(e, barChart, chartConfig);
    });
    let moves = document.getElementsByClassName('move');
    for (let i=0; i<moves.length; i++) {
        moves[i].addEventListener('click', function(e){
            moveListLoader(e);
        });
        moves[i].addEventListener('keyup', function(e){
            moveListLoader(e);
        })
    }

    document.getElementById('btn calculator').addEventListener('click', RVCalculator);
    
    const buttonExport = document.getElementById('export').addEventListener('click', function(){
        let pokeName = document.getElementById('pokename').value;
        let EVs = [];
        let RVs = [];
        let moves = [];
        let movesDiv = document.getElementsByClassName('move');
        console.log(movesDiv);
        for (let i=0; i<movesDiv.length; i++) {
            moves.push(movesDiv[i].value);
        }
        console.log(moves);
        let tBody = document.getElementById('sample table');
        for(let i=1; i<tBody.children.length; i++) {
            let cur = tBody.children[i];
            let EV = cur.children[3].firstChild.value;
            let RV = cur.children[4].firstChild.value;
            EVs.push(EV);
            RVs.push(RV);
        }
        sampleCreator(pokeName, RVs, EVs, moves);
    })
}