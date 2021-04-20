var sampleCreator = function(pokeName, RVs, EVs, moves) {
    var arr = ['체력', '공격', '방어', '특수공격', '특수방어', '스피드'];
    var exportBoard = document.getElementById('board');
    var divSample = document.createElement('div');
    divSample.style ="margin-top: 10px"
    var pokeNameLabel = document.createElement('label');
    pokeNameLabel.style = "text-align:center; float:left; font-size:8px; width:75px";
    pokeNameLabel.innerHTML = pokeName;
    divSample.appendChild(pokeNameLabel);
    var divMoves = document.createElement('div');
    divMoves.style = "text-align:center; float:left; width:75px;";
    for (var i=0; i<moves.length; i++) {
        console.log(moves[i]);
        var oneMove = document.createElement('div');
        oneMove.style = "font-size:8px";
        oneMove.innerText = moves[i];
        divMoves.appendChild(oneMove);
    }
    divSample.appendChild(divMoves);
    var sampleTable = document.createElement('table');
    sampleTable.className = 'sampleTable';
    for (var i=0; i<arr.length; i++) {
        var sampleTr = document.createElement('tr');
        sampleTr.className = 'sampletr';
        var labelTd = document.createElement('td');
        labelTd.innerHTML = arr[i];
        labelTd.className = "sampletd";
        sampleTr.appendChild(labelTd);
        var resTd = document.createElement('td');
        resTd.innerHTML = RVs[i]  // 실수치 적용 자리
        resTd.className = "sampletd";
        sampleTr.appendChild(resTd);
        var EVsTd = document.createElement('td');
        EVsTd.innerHTML = EVs[i]  // 노력치 적용자리
        EVsTd.className = "sampletd";
        sampleTr.appendChild(EVsTd);
        sampleTable.appendChild(sampleTr);
    }
    divSample.appendChild(sampleTable);
    exportBoard.appendChild(divSample);
}
export default sampleCreator;