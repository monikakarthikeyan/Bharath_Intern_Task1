let result=document.getElementById('result');
let input=document.getElementById('input')
function convert(){
    let c= input.value;
    let f=(c * 1.8)+32;
    result.innerText= `${c}  C =${f} F`
}