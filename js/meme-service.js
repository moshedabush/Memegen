'use strict'

var gKeywords = { 'happy': 1,'politics':1,'cute':1};

var gImgs = [
    { id: 1, url: 'img/memes/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'img/memes/2.jpg', keywords: ['politics','crazy'] },
    { id: 3, url: 'img/memes/3.jpg', keywords: ['cute','pets'] }
];

var gMeme = {selectedImgId: 5,selectedLineIdx: 0,
    lines: [{
        txt: 'I never eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
    }]
}



function setMemeImg(id, imgSrc) {
    if (id < 0) {
        id = makeId();
        gImgs.push({ id, url: imgSrc, keywords: ['custom'] });
    }
    gMeme.selectedImgId = id;
}

function getKeywords(){
    return gKeywords;
}

function getImgs(){
    return gImgs;
}

