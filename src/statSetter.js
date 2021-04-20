import Dex from './../data/pokedex.js';

var statSetter = function(pokeName, barChart, chartConfig) {
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
        for (var j=0; j<data.length; j++) {
            data[j] = statDate[j];
        }
    }
    barChart.update();
}
export default statSetter;