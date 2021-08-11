'use strict'

function onAboutModal(){
    var elAboutModal = document.querySelector('.about-modal');
    var aboutInfo = `<div class="margin-center">
    <button onclick="onCloseAboutModal()"">X</button>
    <p>Created by:</p>
    <p>Moshe Dabush</p>  
    <p> visit my git hub:</p>
    <a href=" https://github.com/moshedabush?tab=repositories" target="_blank">To Moshe's github</a>
    </div>`
    elAboutModal.innerHTML = aboutInfo;
    elAboutModal.hidden = false;
}

function onCloseAboutModal(){
    let elAboutModal = document.querySelector('.about-modal').hidden = true;
}