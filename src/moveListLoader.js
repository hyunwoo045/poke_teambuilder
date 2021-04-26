import moveList from './../data/movelist.js';

let moveListLoader = function(e) {
    const bottomDiv = document.getElementById('bottom div');
    while (bottomDiv.hasChildNodes()) {
        bottomDiv.removeChild(bottomDiv.firstChild);
    }
    /*
    NEED TOP COL
    */
    const listSetter = document.createElement('ul');
    listSetter.id = "listsetter";
    let fragment = new DocumentFragment();
    let arr = [];
    let targetName = e.target.value;
    arr = Object.keys(moveList);
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
            spanMoveType.innerText = moveList[curName]["타입"];
            curVal.appendChild(spanMoveType);

            let spanMoveCategory = document.createElement('span');
            spanMoveCategory.className = 'col movecategory';
            spanMoveCategory.innerText = moveList[curName]["분류"];
            curVal.appendChild(spanMoveCategory)

            let spanMoveDamage = document.createElement('span');
            spanMoveDamage.className = 'col movedamage';
            spanMoveDamage.innerText = moveList[curName]["위력"];
            curVal.appendChild(spanMoveDamage);

            let spanMoveAccuracy = document.createElement('span');
            spanMoveAccuracy.className = 'col moveaccuracy';
            spanMoveAccuracy.innerText = moveList[curName]["명중률"];
            curVal.appendChild(spanMoveAccuracy);

            let spanMovePP = document.createElement('span');
            spanMovePP.className = 'col movepp';
            spanMovePP.innerText = moveList[curName]["pp"];
            curVal.appendChild(spanMovePP);

            let spanMovePrior = document.createElement('span');
            spanMovePrior.className = 'col moveprior';
            spanMovePrior.innerText = moveList[curName]["우선도"]
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