import Dex from './pokedex.js';
window.onload = function() {
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
                    console.log(e.target.innerText);
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
                        console.log(e.target);
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
        console.log('계산');
        const SampleTable = document.getElementById('sample table');
        for (var i=1; i<SampleTable.children.length; i++) {
            var curCol = SampleTable.children[i];
            var base = Number(curCol.children[1].firstChild.value);
            var IV = Number(curCol.children[2].firstChild.value);
            var EV = Number(curCol.children[3].firstChild.value);
            if (i===1) {
                curCol.children[4].firstChild.value = Math.floor(((base * 2 + IV + EV / 4) * 0.5) + 10 + 50);
                // console.log(result);
            } else {
                curCol.children[4].firstChild.value = Math.floor((base * 2 + IV + EV / 4) * 0.5 + 5);
            }
        }
    })
}