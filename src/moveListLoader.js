import moveList from './../data/movelist.js';
import learnset from './../data/learnset.js';

let moveListLoader = function(e) {
    const bottomDiv = document.getElementById('listholder');
    while (bottomDiv.hasChildNodes()) {
        bottomDiv.removeChild(bottomDiv.firstChild);
    }
    /*
    NEED TOP COL
    */
    let arr = [];
    const pokeName = document.getElementById("pokename");
    const curPokeName = pokeName.value;
    arr = learnset[curPokeName];

    const listSetter = document.createElement('ul');
    listSetter.id = "listsetter";
    let fragment = new DocumentFragment();
    // let arr = [];
    // arr = Object.keys(moveList);
    let targetName = e.target.value;
    for (let i=0; i<arr.length; i++) {
        if (arr[i].includes(targetName)) {
            let curName = arr[i];
            let curVal = document.createElement('li');
            curVal.className= "result"

            let spanMoveName = document.createElement('span');
            spanMoveName.className = "col movename";
            spanMoveName.innerText = curName;
            curVal.appendChild(spanMoveName);
            
            let spanMoveType = document.createElement('span');
            spanMoveType.className = 'col movetype';
            const typeImg = document.createElement('img');
            typeImg.src = `type_sprites/${moveList[curName]["타입"]}.png`;
            typeImg.width = "35";
            typeImg.height = "15";
            spanMoveType.appendChild(typeImg);
            curVal.appendChild(spanMoveType);

            let spanMoveCategory = document.createElement('span');
            spanMoveCategory.className = 'col movecategory';
            const cateImg = document.createElement('img');
            cateImg.src = `type_sprites/${moveList[curName]["분류"]}.png`;
            cateImg.width = "35";
            cateImg.height = "15";
            spanMoveCategory.appendChild(cateImg);
            curVal.appendChild(spanMoveCategory);

            let spanMoveDamage = document.createElement('span');
            spanMoveDamage.className = 'col movedamage';
            spanMoveDamage.innerText = `위력\n${moveList[curName]["위력"]}`;
            curVal.appendChild(spanMoveDamage);

            let spanMoveAccuracy = document.createElement('span');
            spanMoveAccuracy.className = 'col moveaccuracy';
            spanMoveAccuracy.innerText = `명중률\n${moveList[curName]["명중률"]}`;
            curVal.appendChild(spanMoveAccuracy);

            let spanMovePP = document.createElement('span');
            spanMovePP.className = 'col movepp';
            spanMovePP.innerText = `PP\n${moveList[curName]["pp"]}`;
            curVal.appendChild(spanMovePP);

            let spanMovePrior = document.createElement('span');
            spanMovePrior.className = 'col moveprior';
            spanMovePrior.innerText = `우선도\n${moveList[curName]["우선도"]}`;
            curVal.appendChild(spanMovePrior);
            
            curVal.addEventListener('click', function() {
                e.target.value = curName;
            })
            fragment.appendChild(curVal);
        }
    }
    listSetter.appendChild(fragment);
    bottomDiv.appendChild(listSetter);
}
export default moveListLoader;