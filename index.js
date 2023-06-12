document.getElementsByClassName("container")
document.getElementById("container").style.color='red';
document.getElementById("container").style.backgroundColor='#e2e2e2'

document.getElementById('text').innerHTML="My name is Rita I am 22 years old"
let child=document.getElementById("container").childNodes;
console.log(child);
let children=document.getElementById('container').children;
console.log(children);

let p=document.createElement('p');
document.getElementById('container').appendChild(p);
// addind a text to a p tag
p.innerHTML='I am new'
// setting a class
p.setAttribute('Id','paragraph')
document.getElementById('paragraph').style.color='green'
let button=document.getElementById('button');
button.addEventListener('click',function () {
    button.innerHTML="clicked"
    button.style.backgroundColor='#19ba96'
    button.style.padding='10px'
    button.style.borderRadius='5px'
    button.style.border='none'
})