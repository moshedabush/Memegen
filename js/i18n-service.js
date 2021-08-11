'use strict'

var gTrans = {
    gallery:{
        en: 'Gallery',
        he: 'גלריה'
    },
    memes:{
        en: 'Memes',
        he: 'מימים'
    },
    about:{
        en: 'About',
        he: 'אודות'
    },
    'meme-tag':{
        en: 'Enter search keyword',
        he: 'הזן האשטאג לחיפוש'
    }
}
var gCurrLang = 'en';

function doTrans() {
    let els = document.querySelectorAll('[data-trans]')
    els.forEach(function (el) {
        let txt = getTrans(el.dataset.trans);
        if (el.nodeName === 'INPUT') {
            el.setAttribute('placeholder', txt);
        } else {
            el.innerText = txt;
        }
    })
}

function getTrans(transKey) {
    let keyTrans = gTrans[transKey];
    if (!keyTrans) return 'UNKNOWN';
    let txt = keyTrans[gCurrLang];
    if (!txt) txt = keyTrans['en']
    return txt;
}

function setLang(lang) {
    gCurrLang = lang;
}
