'use strict'

var gKeywords = { 'happy': 3,'politics':4,'cute':4,'pets':4,'baby':5,'crazy':5,'reaction':10,'mood':6};
var gImgs = [
    { id: 1, url: 'img/memes/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'img/memes/2.jpg', keywords: ['politics','crazy'] },
    { id: 3, url: 'img/memes/3.jpg', keywords: ['cute','pets'] },
    { id: 4, url: 'img/memes/4.jpg', keywords: ['cute','funny','baby'] },
    { id: 5, url: 'img/memes/5.jpg', keywords: ['cute','pets','baby'] },
    { id: 6, url: 'img/memes/6.jpg', keywords: ['pets','cute'] },
    { id: 7, url: 'img/memes/7.jpg', keywords: ['mood','happy'] },
    { id: 8, url: 'img/memes/8.jpg', keywords: ['happy','crazy','baby'] },
    { id: 9, url: 'img/memes/9.jpg', keywords: ['mood','crazy','reaction'] },
    { id: 10, url: 'img/memes/10.jpg', keywords: ['mood','reaction'] },
    { id: 11, url: 'img/memes/11.jpg', keywords: ['reaction','crazy'] },
    { id: 12, url: 'img/memes/12.jpg', keywords: ['reaction','funny'] },
    { id: 13, url: 'img/memes/13.jpg', keywords: ['reaction','baby','funny'] },
    { id: 14, url: 'img/memes/14.jpg', keywords: ['politics','funny'] },
    { id: 15, url: 'img/memes/15.jpg', keywords: ['baby','funny'] },
    { id: 16, url: 'img/memes/16.jpg', keywords: ['pets','funny'] },
    { id: 17, url: 'img/memes/17.jpg', keywords: ['politics','funny'] },
    { id: 18, url: 'img/memes/18.jpg', keywords: ['mood','funny'] },
    { id: 19, url: 'img/memes/19.jpg', keywords: ['reaction','mood'] },
    { id: 20, url: 'img/memes/20.jpg', keywords: ['reaction'] },
    { id: 21, url: 'img/memes/21.jpg', keywords: ['reaction','mood'] },
    { id: 22, url: 'img/memes/22.jpg', keywords: ['funny','crazy'] },
    { id: 23, url: 'img/memes/23.jpg', keywords: ['reaction','funny'] },
    { id: 24, url: 'img/memes/24.jpg', keywords: ['politics'] },
    { id: 25, url: 'img/memes/25.jpg', keywords: ['reaction','funny'] }
];
var gMeme = {selectedImgId: 5,selectedLineIdx: 0,
    lines: [{
        txt: 'I never eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
    }]
}
var gCanvas;
var gCtx;


function setCanvasImg(){
    gCanvas = document.getElementById('canvas');
    gCtx = gCanvas.getContext('2d');
    // var elImg = document.querySelector('editImg');
    var elImg = document.querySelector('img');
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
}



// function getImgUrl(id){
//     let img = gImgs.findIndex(function (img) {
//         return img.id === id;
//     })
//     return img.url;
// }


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

