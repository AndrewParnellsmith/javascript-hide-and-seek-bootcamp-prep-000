function getFirstSelector(selector) {
   return document.querySelector(selector);
}

function nestedTarget() {
    return document.getElementsByTagName('div')[4];
}


function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
        for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = ((parseInt(lis[i].innerHTML) + n));
} 
}

function deepestChild() {
const divs = document.querySelector('#grand-node').querySelectorAll('div')
return divs[3]
}
