let boxW = document.querySelector('.box-width')
let boxB = document.querySelector('.box-border') 
let boxC = document.querySelector('.box-color')
let box = document.querySelector('.box')

boxW.oninput = ()=>{
    box.setAttribute('style',`height:${boxW.value}px; width:${boxW.value}px`)
}
boxB.oninput = ()=>{
    box.style.borderRadius = `${boxB.value}%`
}
boxC.oninput = ()=>{
    box.style.background = boxC.value;
}
