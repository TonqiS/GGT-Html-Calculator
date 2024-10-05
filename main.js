function CalculateGGT(){
var x = parseInt(document.getElementById('num1').value)
var y = parseInt(document.getElementById('num2').value)
if(isNaN(x) || isNaN(y)){
    alert('Bitte beide Zahlen eingeben')
    return
}
if(x % y == 0 || y % x == 0){
    if(x < y){
        alert('GGT: ' + x)
        return
        }
        else{
            alert('GGT: ' + y)
            return
        }
    }
else{
    var rest = x%y
    while(rest!= 0){
        rest =x%y
        if(rest == 0){
            alert('GGT: ' + y)
            return
            }
        x = y
        y = rest
        }
    }
}
