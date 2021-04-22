import Dex from './../data/pokedex.js';
import moveList from './../data/movelist.js';
import statSetter from './statSetter.js';

let keyupListSetter = function(e, flag, barChart, chartConfig) {
    let throttle = null;
    if (!throttle) {
        setTimeout(() => {
            throttle = null;
        }, 100);
        throttle = e.target.value;
        let listSetter = document.getElementById('listsetter');
        while (listSetter.hasChildNodes()) {
            listSetter.removeChild(listSetter.firstChild);
        }
        let arr = [];
        if (flag === 'poke') {
            arr = Object.keys(Dex);
        } else if (flag === 'move') {
            arr = Object.keys(moveList);
        }
        let fragment = new DocumentFragment();
        for (let i=0; i<arr.length; i++) {
            if (arr[i].includes(throttle)) {
                let curName = arr[i];
                let curVal = document.createElement('li');
                curVal.className= "result"
        
                let spanPokeName = document.createElement('span');
                spanPokeName.className = "col pokename";
                spanPokeName.innerText = curName;
                curVal.appendChild(spanPokeName);

                if (flag === "poke") {
                    let spanIcon = document.createElement('span');
                    spanIcon.className = "col pokeicon";
                    curVal.appendChild(spanIcon);


                    let spanPokeType = document.createElement('span');
                    spanPokeType.className = 'col poketype';
                    spanPokeType.innerText = ["풀", "독"];
                    curVal.appendChild(spanPokeType);

                    let spanPokeAbility = document.createElement('span');
                    spanPokeAbility.className = 'col pokeability';
                    spanPokeAbility.innerText = "리베로"
                    curVal.appendChild(spanPokeAbility);
                
                    let statArr = ["H", "A", "B", "C", "D", "S"];
                    for (let i=0; i<statArr.length; i++) {
                        let spanStat = document.createElement('span');
                        spanStat.className = 'col pokestat';
                        spanStat.innerText = Dex[curName][statArr[i]];
                        curVal.appendChild(spanStat);
                    }
                }
                curVal.addEventListener('click', function() {
                    if (flag === 'poke') {
                        statSetter(curName, barChart, chartConfig);
                        const imgComp = document.getElementById('sprite');
                        imgComp.src = `sprites/${Dex[curName]["도감번호"]}.jpg`;
                    }
                    e.target.value = curName;
                });
                fragment.appendChild(curVal);
            }
        }
        listSetter.appendChild(fragment);
    }
}
export default keyupListSetter;