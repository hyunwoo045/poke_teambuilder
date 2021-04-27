import Dex from './../data/pokedex.js';

let abilityListLoader = function(e) {
    const bottomDiv = document.getElementById('listholder');
    while (bottomDiv.hasChildNodes()) {
        bottomDiv.removeChild(bottomDiv.firstChild);
    }

    const pokeName = document.getElementById('pokename');
    const curPoke = pokeName.value;
    const listSetter = document.createElement('ul');
    listSetter.id = "listsetter";
    let fragment = new DocumentFragment();
    
    let firstAbility = document.createElement('li');
    firstAbility.className = 'result';
    let fistCategory = document.createElement('span');
    fistCategory.innerText = '일반 특성';
    fistCategory.className = 'col abilitycategory';
    firstAbility.appendChild(fistCategory);
    let spanAbilityName = document.createElement('span');
    spanAbilityName.className = 'col abilityname';
    spanAbilityName.innerText = Dex[curPoke]['abilities']['0'];
    firstAbility.appendChild(spanAbilityName);
    firstAbility.addEventListener('click', function(){
        e.target.value = Dex[curPoke]['abilities']['0'];
    })
    listSetter.appendChild(firstAbility);
    if (Dex[curPoke]['abilities']['1'] !== undefined) {
        let secondAbility = document.createElement('li');
        secondAbility.className = 'result';
        let secCategory = document.createElement('span');
        secCategory.innerText = '일반 특성';
        secCategory.className = 'col abilitycategory';
        secondAbility.appendChild(secCategory);
        let secAbilityName = document.createElement('span');
        secAbilityName.className = 'col abilityname';
        secAbilityName.innerText = Dex[curPoke]['abilities']['1'];
        secondAbility.appendChild(secAbilityName);
        secondAbility.addEventListener('click', function(){
            e.target.value = Dex[curPoke]['abilities']['1'];
        })
        listSetter.appendChild(secondAbility);
    }
    if (Dex[curPoke]['abilities']['H'] !== undefined) {
        let hiddenAbility = document.createElement('li');
        hiddenAbility.className = 'result';
        let hiddenCategory = document.createElement('span');
        hiddenCategory.innerText = '숨겨진 특성';
        hiddenCategory.className = 'col abilitycategory';
        hiddenAbility.appendChild(hiddenCategory);
        let hiddenAbilityName = document.createElement('span');
        hiddenAbilityName.className = 'col abilityname';
        hiddenAbilityName.innerText = Dex[curPoke]['abilities']['H'];
        hiddenAbility.appendChild(hiddenAbilityName);
        hiddenAbility.addEventListener('click', function(){
            e.target.value = Dex[curPoke]['abilities']['H'];
        })
        listSetter.appendChild(hiddenAbility);
    }
    bottomDiv.appendChild(listSetter);
}
export default abilityListLoader;