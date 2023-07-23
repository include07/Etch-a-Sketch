"use strict";
const edgeSize = 600;
let userSize;
let divSize;

const input = document.querySelector("#myInputField");

const pad = document.querySelector(".pad");

const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener('click',function (e){
    let parentElement = document.querySelector(".pad");
    while(parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
    userSize = Number(input.value);
    divSize = edgeSize/userSize;
    console.log(divSize);
    let grid = [];
    for (let i=0;i<userSize*userSize;i++){
        let element = document.createElement('div');
        element.classList.add("unit");
        element.style.height=`${divSize}px`;
        element.style.width=`${divSize}px`;
        pad.appendChild(element);
        grid.push(element);
    }
})

const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener('click',function (e){
    grid.array.forEach(element => {
        element.style.backgroundColor = "";
    });
})
