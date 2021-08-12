'use strict'

var gCanvas;
var gCtx;


function onInit() {
    renderGallery();
    // renderKeywords();
}

function renderGallery() {
    let imgs = getImgs();
    let strHtml = '<div class="memes-layout flex">';
    strHtml += imgs.map((img) => {
        return `<img src="${img.url}" onclick="onChooseImg(${img.id})">`;
    }).join('');
    strHtml += '</div>';
    document.querySelector('.memes-container').innerHTML = strHtml;
}

function renderKeywords() {
    let keywords = getKeywords();
    // let strHtml = keywords;
    let strHtml = keywords.map((keyword) => {
        return `<a href="#" onclick="onClickKeyword('${keyword}')" style="font-size:15px">${keyword}</a>`;
    }).join('');
    document.querySelector('.keywords-container').innerHTML = strHtml;
}

function onChooseImg(id = -1) {
    gCanvas = document.getElementById('canvas');
    gCtx = gCanvas.getContext('2d');
    setCanvasImg(id);
    document.querySelector('.img-editor').hidden = false;
    document.querySelector('.main-page').style.display = 'none';
    renderCanvas();
}

function renderCanvas(){
    let img = new Image();
    img.src = `img/memes/${getCanvasImg()}.jpg`;
    gCanvas.width = img.width;
    gCanvas.height = img.height;
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
}

function onSetLang(lang) {
    setLang(lang);
    if (lang === 'he') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
    doTrans();
}

function onAboutModal() {
    let elAboutModal = document.querySelector('.about-modal');
    let aboutInfo = `<div class="margin-center">
    <button onclick="onCloseAboutModal()"">X</button>
    <p>Created by:</p>
    <p>Moshe Dabush</p>  
    <p> visit my git hub:</p>
    <a href=" https://github.com/moshedabush?tab=repositories" target="_blank">To Moshe's github</a>
    </div>`
    elAboutModal.innerHTML = aboutInfo;
    elAboutModal.hidden = false;
}

function onCloseAboutModal() {
    document.querySelector('.about-modal').hidden = true;
}

function onShowGallery() {
    document.querySelector('.img-editor').hidden = true;
    document.querySelector('.main-page').style.display = 'block';
}








function drawText(x = 200, y = 100) {
    let memeLine = document.querySelector('[name=meme-line]').value;
    setMemeLines(memeLine);
    let txt = getMemeLines();
    gCtx.font = '48px IMPACT';
    gCtx.fillStyle = 'white'
    gCtx.fillText(txt, x, y);
}