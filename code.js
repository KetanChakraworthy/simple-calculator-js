function getHistory(){
    //Return The Value of History Div
    return document.getElementById('history').innerHTML;
}
function setHistory(num){
    //Print the Value of History Div
    document.getElementById('history').innerHTML = num;
}
function getOutput(){
    //Return The Value Of Output Div
    return document.getElementById('output').innerHTML;
}
function setOutput(num){
    //Print the Value of Output Div in En Format
   if(num==''){
    document.getElementById('output').innerHTML = num;
   }else{
       document.getElementById('output').innerHTML = getFormattedNumber(num);
   }
}
function getFormattedNumber(num){
    //Change The Value Into En Format
    return Number(num).toLocaleString('en');
}

function getReverseFormattedNumber(num){
    //Change The Formatted Value into Simple Number
    return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName('operator');
for(var i =0;i<operator.length;i++){
    //Setting Click Event to Operator
    operator[i].addEventListener('click',function(){
        if(this.id == 'c'){
            //Clear Button Click Event
            setOutput('');
            setHistory('');
        }
        if(this.id == 'ce'){
            //Backspace Button Click Event
            if(getOutput() =='' && getHistory().length >0){
                var tempHistory = getHistory().substring(0,getHistory().length-1);
               setOutput(tempHistory);
               setHistory('');
            }else{
                var output = getReverseFormattedNumber(getOutput());
                var stringOutput = String(output);
                setOutput(stringOutput.substring(0,stringOutput.length-1));
            }
        }
        if(this.id == 'equal'){
            //Equal Button Click Event
            var oparand1 = getHistory();
            var oparand2 = getReverseFormattedNumber(getOutput());
            var stringForEval = oparand1+oparand2;
            setOutput(eval(stringForEval));
            setHistory('');
        }
        if(this.id == '%'){
            //Percentage Button Click Event
            var oparand1 = getHistory();
            var oparand2 = getReverseFormattedNumber(getOutput());
            var stringForEval = oparand1+oparand2;
            stringForEval = eval(stringForEval)/100;
            setOutput(stringForEval);
            setHistory('');
          
        }
        if(this.id !='c'&& this.id !='ce' && this.id !='equal' && this.id != '%'){
            //+,-,*,/ Buttons Click Events
            if(getHistory()!='' && getOutput()==''){
                var newHistory = getHistory();
                setHistory(newHistory.substring(0,newHistory.length-1) + this.id);
            }else{
               var history = getHistory() + getReverseFormattedNumber(getOutput()) + this.id;
                setHistory(history);
                setOutput('');
            }
        
        }
    });
}
var number = document.getElementsByClassName('number');
for(var i =0;i<number.length;i++){
    //Number Button Click Event
    number[i].addEventListener('click',function(){
        output = getReverseFormattedNumber(getOutput());
        if(output != NaN ){
            output = output+this.id;
            setOutput(output);
        }
    });
}