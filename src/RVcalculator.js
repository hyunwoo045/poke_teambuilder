var RVCalculator = function() {
    const SampleTable = document.getElementById('sample table');
        for (var i=1; i<SampleTable.children.length; i++) {
            var curCol = SampleTable.children[i];
            var base = Number(curCol.children[1].firstChild.value);
            var IV = Number(curCol.children[2].firstChild.value);
            var EV = curCol.children[3].firstChild.value;
            if (i===1) {
                curCol.children[4].firstChild.value = Math.floor(((base * 2 + IV + EV / 4) * 0.5) + 10 + 50);
            } else {
                var corr = 1;
                if (EV.slice(-1) === '+') {
                    EV = EV.substring(0, EV.length - 1);
                    corr = 1.1;
                } else if (EV.slice(-1) === '-') {
                    EV = EV.substring(0, EV.length - 1);
                    corr = 0.9;
                }
                EV = Number(EV);
                curCol.children[4].firstChild.value = Math.floor(((base * 2 + IV + EV / 4) * 0.5 + 5) * corr);
            }
        }
}
export default RVCalculator;