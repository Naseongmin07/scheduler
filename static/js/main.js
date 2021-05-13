
var index = 0;
function fc1(){
    var cb = document.querySelector('.hide');
    if (index == 1){
        cb.setAttribute('class','hide on');
    }
    if (index >= 2){
        index = 0;
    }
    if (index == 0){
        cb.setAttribute('class','hide off');
    }
    index++;
}