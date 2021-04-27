import Dex from './../data/pokedex.js';
import statSetter from './statSetter.js';

let pokeListLoader = function(e) {
    const bottomDiv = document.getElementById('listholder');
    while (bottomDiv.hasChildNodes()) {
        bottomDiv.removeChild(bottomDiv.firstChild);
    }

    const targetName = e.target.value;
    const listSetter = document.createElement('ul');
    listSetter.id = "listsetter";
    let fragment = new DocumentFragment();
    let arr = [];
    arr = Object.keys(Dex);
    for (let i=0; i<arr.length; i++) {
            if (arr[i].includes(targetName)){
            let curName = arr[i];
            let curVal = document.createElement('li');
            curVal.className = 'result';

            // let spanIcon = document.createElement('span');
            // spanIcon.className = 'col pokeicon';
            // const imgicon = document.createElement('img');
            // imgicon.src = `sprites/${Dex[curName]["num"]}.jpg`;
            // imgicon.width = 40;
            // imgicon.height = 30;
            // spanIcon.appendChild(imgicon);
            // curVal.appendChild(spanIcon);

            let spanPokeName = document.createElement('span');
            spanPokeName.className = "col pokename";
            spanPokeName.innerText = curName;
            curVal.appendChild(spanPokeName);

            let spanPokeType = document.createElement('span');
            spanPokeType.className = 'col poketype';
            let curtypes = Dex[curName]["types"];
            for (let i=0; i<curtypes.length; i++) {
                let onetype = curtypes[i];
                const typeImg = document.createElement('img');
                typeImg.src = `type_sprites/${onetype}.png`;
                typeImg.width = "35";
                typeImg.height = "15";
                spanPokeType.appendChild(typeImg);
            }
            curVal.appendChild(spanPokeType);
            
            let spanPokeAbility = document.createElement('span');
            spanPokeAbility.className = 'col pokeability';
            spanPokeAbility.innerText = Dex[curName]["abilities"]["0"];
            if (Dex[curName]["abilities"]["1"] !== undefined) {
                spanPokeAbility.innerText += `\n` + Dex[curName]['abilities']['1'];
            }
            curVal.appendChild(spanPokeAbility);
            

            let spanPokeAbilityHidden = document.createElement('span');
            spanPokeAbilityHidden.className = 'col pokehiddenability';
            if (Dex[curName]["abilities"]["H"] !== undefined) {
                spanPokeAbilityHidden.innerText = Dex[curName]["abilities"]["H"];
            } else {
                spanPokeAbilityHidden.innerText = '-';
            }
            curVal.appendChild(spanPokeAbilityHidden);

            let statArr = ["hp", "atk", "def", "spa", "spd", "spe"];
            let statLabel = ['H', 'A', 'B', 'C', 'D', 'S'];
            for (let i=0; i<6; i++) {
                let spanStat = document.createElement('span');
                spanStat.className = 'col pokestat';
                spanStat.innerText = statLabel[i] + '\n' + Dex[curName]["baseStats"][statArr[i]];
            curVal.appendChild(spanStat);

            curVal.addEventListener('click', function() {
                statSetter(curName);
                const imgComp = document.getElementById('sprite');
                imgComp.src = `sprites/${Dex[curName]["num"]}.jpg`;
                e.target.value = curName;
            });
            }
            fragment.appendChild(curVal);
        }
    }
    listSetter.appendChild(fragment);
    bottomDiv.appendChild(listSetter);
}
export default pokeListLoader;