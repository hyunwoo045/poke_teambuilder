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
            typeImg.src = `type_sprites/${moveList[curName]["νμ"]}.png`;
            typeImg.width = "35";
            typeImg.height = "15";
            spanMoveType.appendChild(typeImg);
            curVal.appendChild(spanMoveType);

            let spanMoveCategory = document.createElement('span');
            spanMoveCategory.className = 'col movecategory';
            const cateImg = document.createElement('img');
            cateImg.src = `type_sprites/${moveList[curName]["λΆλ₯"]}.png`;
            cateImg.width = "35";
            cateImg.height = "15";
            spanMoveCategory.appendChild(cateImg);
            curVal.appendChild(spanMoveCategory);

            let spanMoveDamage = document.createElement('span');
            spanMoveDamage.className = 'col movedamage';
            spanMoveDamage.innerText = `μλ ₯\n${moveList[curName]["μλ ₯"]}`;
            curVal.appendChild(spanMoveDamage);

            let spanMoveAccuracy = document.createElement('span');
            spanMoveAccuracy.className = 'col moveaccuracy';
            spanMoveAccuracy.innerText = `λͺμ€λ₯ \n${moveList[curName]["λͺμ€λ₯ "]}`;
            curVal.appendChild(spanMoveAccuracy);

            let spanMovePP = document.createElement('span');
            spanMovePP.className = 'col movepp';
            spanMovePP.innerText = `PP\n${moveList[curName]["pp"]}`;
            curVal.appendChild(spanMovePP);

            let spanMovePrior = document.createElement('span');
            spanMovePrior.className = 'col moveprior';
            spanMovePrior.innerText = `μ°μ λ\n${moveList[curName]["μ°μ λ"]}`;
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