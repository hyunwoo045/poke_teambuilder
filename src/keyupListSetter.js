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
        let listSetter = document.getElementById('list setter');
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
                curVal.innerHTML = curName;
                curVal.addEventListener('click', function() {
                    if (flag === 'poke') {
                        statSetter(curName, barChart, chartConfig);
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