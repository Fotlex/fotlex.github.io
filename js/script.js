document.getElementById('lang').onclick = function() {
    for (let i = 0; i < pairsArray.length; i++) {
        document.querySelector(pairsArray[i][0]).innerHTML = langArr[pairsArray[i][1]][this.checked ? "ru" : "en"];
    }    
}