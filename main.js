function CalculateGGT(){
var x = parseInt(document.getElementById('num1').value)
var y = parseInt(document.getElementById('num2').value)
if(x % y == 0 || y % x == 0){
    if(x < y){
        alert(x)
        return
        }
        else{
            alert(y)
            return
        }
    }
else{
    var rest = x%y
    while(rest!= 0){
        rest =x%y
        if(rest == 0){
            alert(y)
            return
            }
        x = y
        y = rest
        }
    }
}
