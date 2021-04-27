import itemset from './../data/items.js';

let itemListLoader = function(e) {
    const bottomDiv = document.getElementById('listholder');
    while (bottomDiv.hasChildNodes()) {
        bottomDiv.removeChild(bottomDiv.firstChild);
    }
    const targetName = e.target.value;
    const listSetter = document.createElement('ul');
    listSetter.id = 'listsetter';
    let fragment = new DocumentFragment();
    let arr = [];
    arr = Object.keys(itemset);

    for (let i=0; i<arr.length; i++){
        if (arr[i].includes(targetName)) {
            let curName = arr[i];
            let curVal = document.createElement('li');
            curVal.className = 'result';

            let spanItemName = document.createElement('span');
            spanItemName.className = 'col itemname';
            spanItemName.innerText = curName;
            curVal.appendChild(spanItemName);

            let spanItemEngName = document.createElement('span');
            spanItemEngName.className = 'col itemengname';
            spanItemEngName.innerText = itemset[curName]["english"];
            curVal.appendChild(spanItemEngName);

            let spanItemJapName = document.createElement('span');
            spanItemJapName.className = 'col itemjapname';
            spanItemJapName.innerText = itemset[curName]["japanese"];
            curVal.appendChild(spanItemJapName);

            curVal.addEventListener('click', function() {
                e.target.value = curName;
            });
            fragment.appendChild(curVal);
        }
    }
    listSetter.appendChild(fragment);
    bottomDiv.appendChild(listSetter);
}
export default itemListLoader;