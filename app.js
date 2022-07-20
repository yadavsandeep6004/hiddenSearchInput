const input = document.getElementById('box');
const button = document.getElementById('btn');

let flag =true
button.addEventListener('click',()=>{
    flag ? input.style.width='200px':input.style.width='0px'
   flag = !flag
})