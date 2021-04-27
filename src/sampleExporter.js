import Dex from './../data/pokedex.js';

let sampleCreator = function(pokeName, pokeItem, pokeAbility, RVs, EVs, moves) {
    let arr = ['체력', '공격', '방어', '특수공격', '특수방어', '스피드'];
    let exportBoard = document.getElementById('board');
    let divSample = document.createElement('div');
    divSample.className = "samplechart";

    let sampleSprite = document.createElement('img');
    sampleSprite.src = `sprites/${Dex[pokeName]["num"]}.jpg`;
    sampleSprite.className = "samplesprite";
    divSample.appendChild(sampleSprite);

    let divTable = document.createElement('div');
    divTable.className = 'samplestattable';
    let sampleTable = document.createElement('table');
    sampleTable.className = 'sampleTable';
    for (let i=0; i<arr.length; i++) {
        let sampleTr = document.createElement('tr');
        sampleTr.className = 'sampletr';
        let labelTd = document.createElement('td');
        labelTd.innerHTML = arr[i];
        labelTd.className = "sampletd";
        sampleTr.appendChild(labelTd);
        let resTd = document.createElement('td');
        resTd.innerHTML = RVs[i]  // 실수치 적용 자리
        resTd.className = "sampletd";
        sampleTr.appendChild(resTd);
        let EVsTd = document.createElement('td');
        if (EVs[i] === '0') {
            EVsTd.innerHTML = '';
        } else {
            EVsTd.innerHTML = EVs[i]  // 노력치 적용자리
        }
        EVsTd.className = "sampletd";
        sampleTr.appendChild(EVsTd);
        sampleTable.appendChild(sampleTr);
    }
    divTable.appendChild(sampleTable)
    divSample.appendChild(divTable);

    let divMoves = document.createElement('div');
    divMoves.className = "samplemovelist";
    for (let i=0; i<moves.length; i++) {
        console.log(moves[i]);
        let oneMove = document.createElement('div');
        oneMove.style = "font-size:8px";
        oneMove.innerText = `- ${moves[i]}`;
        divMoves.appendChild(oneMove);
    }
    divSample.appendChild(divMoves);

    let divPokeInfo = document.createElement('div');
    divPokeInfo.innerText = `${pokeName}   lv.50`;
    divSample.appendChild(divPokeInfo);

    let divPokeType = document.createElement('div');
    let curtypes = Dex[pokeName]["types"];
        for (let i=0; i<curtypes.length; i++) {
            let onetype = curtypes[i];
            const typeImg = document.createElement('img');
            typeImg.src = `type_sprites/${onetype}.png`;
            typeImg.width = "35";
            typeImg.height = "15";
            divPokeType.appendChild(typeImg);
        }
    divSample.appendChild(divPokeType);

    let divItem = document.createElement('div');
    divItem.innerText = `도구: ${pokeItem}`;
    divSample.appendChild(divItem);

    let divAbility = document.createElement('div');
    divAbility.innerText = `특성: ${pokeAbility}`;
    divSample.appendChild(divAbility);

    exportBoard.appendChild(divSample);
}
export default sampleCreator;