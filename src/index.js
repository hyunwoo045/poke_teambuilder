import Dex from './../data/pokedex.js';
import moveList from './../data/movelist.js';
import sampleCreator from './sampleExporter.js';
import getChartConfig from './chart.config.js';
import statSetter from './statSetter.js';
import RVCalculator from './RVcalculator.js';
import keyupListSetter from './keyupListSetter.js';
import css from './style.css';

window.onload = function() {
    let sampleChart = document.getElementById('sample chart').getContext('2d');
    let chartConfig = getChartConfig();
    let barChart = new Chart(sampleChart, chartConfig);
    const pokeName = document.getElementById("pokename");
    pokeName.addEventListener('click', function(){
        console.log('pokename clicked');
        const bottomDiv = document.getElementById('bottom div');
        while (bottomDiv.hasChildNodes()) {
            bottomDiv.removeChild(bottomDiv.firstChild);
        }
        const pokeListSetter = document.createElement('ul');
        pokeListSetter.id = "list setter";
        let fragment = new DocumentFragment();
        if (!pokeListSetter.hasChildNodes()) {
            Object.keys(Dex).forEach(function(v){
                const onePoke = document.createElement('li');
                onePoke.innerHTML = v;
                onePoke.addEventListener('click', function(e){
                    statSetter(e.target.innerText, barChart, chartConfig);
                    document.getElementById('pokename').value = v;
                });
                fragment.appendChild(onePoke);
            });
            pokeListSetter.appendChild(fragment);
        }
        bottomDiv.appendChild(pokeListSetter);
    });
    pokeName.addEventListener('keyup', function(e) {
        console.log("POKENAME: " + pokeName)
        keyupListSetter(e, 'poke', barChart, chartConfig);
    });

    document.getElementById('btn calculator').addEventListener('click', RVCalculator);

    let moves = document.getElementsByClassName('move');
    for (let i=0; i<moves.length; i++) {
        moves[i].addEventListener('click', function(e){
            const bottomDiv = document.getElementById('bottom div');
            while (bottomDiv.hasChildNodes()) {
                bottomDiv.removeChild(bottomDiv.firstChild);
            }
            const moveListSetter = document.createElement('ul');
            moveListSetter.id = "list setter";
            let fragment = new DocumentFragment();
            Object.keys(moveList).forEach(function(v){
                const oneMove = document.createElement('li');
                oneMove.innerHTML = v;
                oneMove.addEventListener('click', function() {
                    e.target.value = v;
                })
                fragment.appendChild(oneMove);
            })
            moveListSetter.appendChild(fragment);
            bottomDiv.appendChild(moveListSetter);
        });
        moves[i].addEventListener('keyup', function(e){
            keyupListSetter(e, 'move', barChart, chartConfig);
        })
    }
    
    const buttonTest = document.getElementById('export').addEventListener('click', function(){
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