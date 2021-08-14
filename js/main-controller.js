'use strict'

var gCanvas;
var gCtx;
var gCurrImg;


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
    document.querySelector('footer').classList.add('position-fixed');
    renderCanvas();
}

function renderCanvas() {
    gCurrImg = new Image();
    gCurrImg.src = `img/memes/${getCanvasImg()}.jpg`;
    gCanvas.width = gCurrImg.width;
    gCanvas.height = gCurrImg.height;
    gCtx.drawImage(gCurrImg, 0, 0, gCanvas.width, gCanvas.height);
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
    document.querySelector('footer').classList.remove('position-fixed');
}

function editMemeTxt(elTxtInput) {
    const txt = elTxtInput.value;
    setMemeLines(txt);
    renderCanvas();
    addLine();
}

function updateTxtChanges(){
    renderCanvas();
    addLine();
}

function addLine() {
    // let memeLine = document.querySelector('[name=meme-line]').value;
    // setMemeLines(memeLine);
    let txt = getMemeLines();
    let fontSize = getFontSize();
    let txtWidth = gCtx.measureText(txt).width;
    let txtColor = getTxtColor();
    let fontType = getFontType();
    let strokeColor = getStrokeColor();
    let x = getLineXpos(txtWidth,fontSize);
    let y = getLineYPos();
    gCtx.font = `${fontSize}px ${fontType}`;
    gCtx.strokeStyle = `${strokeColor}`;
    gCtx.fillStyle = `${txtColor}`;
    gCtx.fillText(txt, x, y);
    gCtx.strokeText(`${txt}`, x, y);
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-meme';
}