// Displaying input

function buttonclick(val){

    document.getElementById('screen').value=document.getElementById('screen').value+val;
}
// clear result
function cleardisplay(){

    document.getElementById('screen').value=""
}
// solving

function equalclick(){
    
    var text= document.getElementById('screen').value
    var result=eval(text)
    
    document.getElementById('screen').value=result
 }
