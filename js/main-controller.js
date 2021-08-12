'use strict'

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
    setCanvasImg();
    // let imgUrl = getImgUrl(id);
    // console.log(imgUrl);
    document.querySelector('.img-editor').hidden = false;
    // let srtHtml = `<img src="${imgUrl}" alt="" style="display: none;">`;
    // document.querySelector('img-url').innerHTML = srtHtml;
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
}