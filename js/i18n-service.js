'use strict'

var gTrans = {
    gallery:{
        en: 'Gallery',
        he: 'גלריה'
    },
    memes:{
        en: 'Memes',
        he: 'מימס'
    },
    about:{
        en: 'About',
        he: 'אודות'
    },
    'meme-tag':{
        en: 'Enter search keyword',
        he: 'הזן את האשטאג לחיפוש'
    },
    'add-line-placeholder':{
        en: 'Enter Text',
        he: 'הכנס טקסט'
    },
    download:{
        en:'download',
        he:'שמירת תמונה'
    },
    'footer-txt':{
        en: 'All rights reserved to Moshe Dabush',
        he: 'כל הזכויות שמורות למשה דאבוש'
    },
    'error-log-first':{
        en:'Opss !!! we dosent have picture with the tag : ',
        he:'אופס !! אין לנו במאגר תמונה עם האשטאג : '
    },
    'error-log-second':{
        en:'please try another tag ',
        he:'בבקשה תנסה/י אשטאג אחר '
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
