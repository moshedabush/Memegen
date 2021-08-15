'use strict'

const KEY = 'memeDB';
const gKeywords = { 'reaction': 10, 'mood': 6, 'crazy': 5, 'baby': 5, 'politics': 4, 'cute': 4, 'pets': 4, 'happy': 3 };
const gImgs = [
    { id: 1, url: 'img/memes/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'img/memes/2.jpg', keywords: ['politics', 'crazy'] },
    { id: 3, url: 'img/memes/3.jpg', keywords: ['cute', 'pets'] },
    { id: 4, url: 'img/memes/4.jpg', keywords: ['cute', 'funny', 'baby'] },
    { id: 5, url: 'img/memes/5.jpg', keywords: ['cute', 'pets', 'baby'] },
    { id: 6, url: 'img/memes/6.jpg', keywords: ['pets', 'cute'] },
    { id: 7, url: 'img/memes/7.jpg', keywords: ['mood', 'happy'] },
    { id: 8, url: 'img/memes/8.jpg', keywords: ['happy', 'crazy', 'baby'] },
    { id: 9, url: 'img/memes/9.jpg', keywords: ['mood', 'crazy', 'reaction'] },
    { id: 10, url: 'img/memes/10.jpg', keywords: ['mood', 'reaction'] },
    { id: 11, url: 'img/memes/11.jpg', keywords: ['reaction', 'crazy'] },
    { id: 12, url: 'img/memes/12.jpg', keywords: ['reaction', 'funny'] },
    { id: 13, url: 'img/memes/13.jpg', keywords: ['reaction', 'baby', 'funny'] },
    { id: 14, url: 'img/memes/14.jpg', keywords: ['politics', 'funny'] },
    { id: 15, url: 'img/memes/15.jpg', keywords: ['baby', 'funny'] },
    { id: 16, url: 'img/memes/16.jpg', keywords: ['pets', 'funny'] },
    { id: 17, url: 'img/memes/17.jpg', keywords: ['politics', 'funny'] },
    { id: 18, url: 'img/memes/18.jpg', keywords: ['mood', 'funny'] },
    { id: 19, url: 'img/memes/19.jpg', keywords: ['reaction', 'mood'] },
    { id: 20, url: 'img/memes/20.jpg', keywords: ['reaction'] },
    { id: 21, url: 'img/memes/21.jpg', keywords: ['reaction', 'mood'] },
    { id: 22, url: 'img/memes/22.jpg', keywords: ['funny', 'crazy'] },
    { id: 23, url: 'img/memes/23.jpg', keywords: ['reaction', 'funny'] },
    { id: 24, url: 'img/memes/24.jpg', keywords: ['politics'] },
    { id: 25, url: 'img/memes/25.jpg', keywords: ['reaction', 'funny'] }
];
const gMeme = {
    selectedImgId: 5, selectedLineIdx: 0,
    lines: [{
        txt: 'Enter Text',
        size: 60,
        align: 'left',
        color: 'white',
        stroke: 'black',
        font: 'IMPACT'
    }]
}
const gMemes = (loadFromStorage(KEY)) ? loadFromStorage(KEY) : [];



function getCanvasImg() {
    return gMeme.selectedImgId;
}

function setCanvasImg(imgId) {
    gMeme.selectedImgId = imgId;
}

function setMemeLines(memeLine) {
    gMeme.lines[0].txt = memeLine;
}

function getMemeLines() {
    return gMeme.lines[0].txt;
}

function getKeywords() {
    return gKeywords;
}

function getImgs() {
    return gImgs;
}

function setUpAndDownIdxLine() {
    if (gMeme.selectedLineIdx === 0) gMeme.selectedLineIdx = 1;
    else gMeme.selectedLineIdx = 0;
}

function getLineYPos() {
    if (gMeme.selectedLineIdx === 0) return 100;
    if (gMeme.selectedLineIdx === 1) return gCurrImg.height - 100;
    else return gMeme.selectedLineIdx;
}

function lineYPosClickChange(ev) {
    gMeme.selectedLineIdx = ev.layerY;
    updateTxtChanges();
}

function getLineXpos(txtWidth, fontSize) {
    if (gMeme.lines[0].align === 'left') return 10;
    if (gMeme.lines[0].align === 'center') {
        if (fontSize > 30) fontSize = fontSize * 1.5;
        else fontSize = 0;
        return gCurrImg.width / 2 - txtWidth - fontSize;
    }
    if (gMeme.lines[0].align === 'right') {
        if (fontSize > 30) fontSize = fontSize * 2;
        if (txtWidth > 100) txtWidth = txtWidth * 1.25;
        return gCurrImg.width - txtWidth * 2 - 10 - fontSize * 2;
    }
}

function getFontSize() {
    return gMeme.lines[0].size;
}

function getFontType() {
    return gMeme.lines[0].font;
}

function getTxtColor() {
    return gMeme.lines[0].color;
}

function getStrokeColor() {
    return gMeme.lines[0].stroke;
}

function setFontType(fontType) {
    gMeme.lines[0].font = fontType;
}

function setLineLeft() {
    gMeme.lines[0].align = 'left';
}
function setLineCenter() {
    gMeme.lines[0].align = 'center';
}
function setLineRight() {
    gMeme.lines[0].align = 'right';
}

function setBiggerFontSize() {
    gMeme.lines[0].size += 10;
}

function setSmallerFontSize() {
    gMeme.lines[0].size -= 10;
}

function setTxtColor(color) {
    gMeme.lines[0].color = color;
}

function setStrokeColor(color) {
    gMeme.lines[0].stroke = color;
}


function pushLine(){
    //  gMeme.lines.unshift(gMeme.lines[0]);
    //  gMeme.lines.push(gMeme.lines[1]);
  }
  

function saveMeme() {
    gMeme.savedImg = gCanvas.toDataURL();
    gMemes.push(JSON.parse(JSON.stringify(gMeme)));
    saveToStorage(KEY, gMemes);
}

function openSavedMemes() {
    onShowGallery();
    let userMemes = loadFromStorage(KEY);
    if(!userMemes)return;
    let strHtml = '<div class="memes-layout flex">';
   strHtml += userMemes.map((meme,idx)=>{
       return `<img src="${meme.savedImg}"
               onclick="renderSavedMemes(${meme.selectedImgId},${idx})">`;
   })
    strHtml += '</div>';
    document.querySelector('.memes-container').innerHTML = strHtml;
}

function getSavedMeme(idx){
    return gMemes[idx];
}