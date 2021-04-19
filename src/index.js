import Dex from './pokedex.js';
import moveList from './movelist.js';

window.onload = function() {
    var chartConfig = {
        type: 'bar',
        data: {
            labels: ['HP', 'Atk', 'Def', 'Sp.Atk', 'Sp.Def', 'Speed'],
            datasets: [{
                label: '',
                data: [0, 0, 0, 0, 0, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                  ],
                borderWidth: 1
            }],
        },
        options:{
            responsive: false,
            scales: {
                x: {
                    suggestedMin: 0,
                    suggestedMax: 300,
                    ticks: {
                        font: {
                            size: 0
                        }
                    },
                    grid: {
                        color: 'white'
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 9
                        }
                    },
                    grid: {
                        color: 'white'
                    }
                }
            },
            indexAxis: 'y',
        }
    }
    let sampleChart = document.getElementById('sample chart').getContext('2d');
    let barChart = new Chart(sampleChart, chartConfig)

    var statSetter = function(pokeName) {
        const pokeInfo = Dex[pokeName];
        var hp = pokeInfo['H'];
        var atk = pokeInfo['A'];
        var def = pokeInfo['B'];
        var spa = pokeInfo['C'];
        var spd = pokeInfo['D'];
        var spe = pokeInfo['S'];
        document.getElementById('HPstat').value = hp;
        document.getElementById('Atkstat').value = atk;
        document.getElementById('Defstat').value = def;
        document.getElementById('SpAstat').value = spa;
        document.getElementById('SpDstat').value = spd;
        document.getElementById('Spdstat').value = spe;
        var statDate = [hp, atk, def, spa, spd, spe];
        var dataset = chartConfig.data.datasets;
        for (var i=0; i<dataset.length; i++){
            var data = dataset[i].data;
            dataset[i].label = pokeName;
            for (var j=0; j<data.length; j++) {
                data[j] = statDate[j];
            }
            // dataset[i] = statDate[i];
        }
        barChart.update();
        return;
    }

    const pokeName = document.getElementById("pokename");
    pokeName.addEventListener('click', function(){
        const pokeListSetter = document.getElementById("pokelist");
        if (!pokeListSetter.hasChildNodes()) {
            Object.keys(Dex).forEach(function(v){
                const onePoke = document.createElement('li');
                onePoke.innerHTML = `${v}`;
                onePoke.class = 'pokecandi';
                onePoke.addEventListener('click', function(e){
                    statSetter(e.target.innerText);
                });
                pokeListSetter.appendChild(onePoke);
            });
        }
    });
    var throttle = null;
    function keyUpFn(el){
        if (!throttle) {
            setTimeout(() => {
                throttle = null;
            }, 100);
            throttle = el.target.value;
            var pokeListSetter = document.getElementById('pokelist');
            while (pokeListSetter.hasChildNodes()) {
                pokeListSetter.removeChild(pokeListSetter.firstChild);
            }
            var pokeArr = [];
            pokeArr = Object.keys(Dex);
            for (var i=0; i<pokeArr.length; i++) {
                if (pokeArr[i].includes(throttle)) {
                    var curName = pokeArr[i];
                    var onePoke = document.createElement('li');
                    onePoke.innerHTML = `${curName}`;
                    onePoke.class = 'pokecandi';
                    onePoke.addEventListener('click', function(e){
                        statSetter(e.target.innerHTML);
                    });
                    pokeListSetter.appendChild(onePoke);
                }
            }
        }
    }
    pokeName.addEventListener('keyup', keyUpFn);

    const btnPokeNameSubmit = document.getElementById("btn_submit");
    btnPokeNameSubmit.addEventListener('click', function(){
        const pokeName = document.getElementById("pokename");
        var curName = pokeName.value;
        statSetter(curName);
    });

    document.getElementById('btn calculator').addEventListener('click', function(){
        const SampleTable = document.getElementById('sample table');
        for (var i=1; i<SampleTable.children.length; i++) {
            var curCol = SampleTable.children[i];
            var base = Number(curCol.children[1].firstChild.value);
            var IV = Number(curCol.children[2].firstChild.value);
            var EV = curCol.children[3].firstChild.value;
            if (i===1) {
                curCol.children[4].firstChild.value = Math.floor(((base * 2 + IV + EV / 4) * 0.5) + 10 + 50);
                // console.log(result);
            } else {
                var corr = 1;
                console.log(EV.slice(-1));
                if (EV.slice(-1) === '+') {
                    EV = EV.substring(0, EV.length - 1);
                    corr = 1.1;
                } else if (EV.slice(-1) === '-') {
                    EV = EV.substring(0, EV.length - 1);
                    corr = 0.9;
                }
                EV = Number(EV);
                curCol.children[4].firstChild.value = Math.floor(((base * 2 + IV + EV / 4) * 0.5 + 5) * corr);
            }
        }
    })
}