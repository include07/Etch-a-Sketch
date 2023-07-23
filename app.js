"use strict";
const edgeSize = 600;
let userSize;
let divSize;

const input = document.querySelector("#myInputField");

const pad = document.querySelector(".pad");

let grid = [];

const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener('click',function (e){
    let parentElement = document.querySelector(".pad");
    while(parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
    userSize = Number(input.value);
    divSize = edgeSize/userSize;
    console.log(divSize);
    for (let i=0;i<userSize*userSize;i++){
        let element = document.createElement('div');
        element.classList.add("unit");
        element.style.height=`${divSize}px`;
        element.style.width=`${divSize}px`;
        pad.appendChild(element);
        grid.push([element,false]);

        // Adding mouseover event to each div element
        element.addEventListener('mouseover', function(e){
            if (e.buttons === 1) {  // Check if left mouse button is pressed
                element.style.backgroundColor = "white";
            }
        })
    }
});

const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener('click',function (e){
    grid.forEach(div => {
        div[0].style.backgroundColor = "";
    });
})

window.addEventListener('mousedown', function(e){
    console.log(1);
    grid.forEach(function(div){
        if(div[1]){
            console.log('paint');
            div[0].style.backgroundColor = "white";
        }
    })
})