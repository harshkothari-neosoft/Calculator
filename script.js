var historyId = 0;
var result;

function addToTextArea(char) {
  if(calcScreen.value.length < 14) { 
      calcScreen.value += char;
  }
}


function calcEval() {
        historyId++;
        $("#history").append("<li id='history-" + historyId + "'>" + calcScreen.value + "</li>");
        result = eval(calcScreen.value);
        calcScreen.placeholder = result;
        $("#history-" + historyId).append(" = " + result);
        
    
    console.log(calcScreen.value);
}

function power() {
    
        historyId++;
        $("#history").append("<li id='history-" + historyId + "'>" + calcScreen.value + "<sup>2</sup></li>");
        result = eval(calcScreen.value * calcScreen.value);
        $("#history-" + historyId).append(" = " + result);

}

function backspace(value){
  var t=value.slice(0,-1);
  calcScreen.value=t;
}
