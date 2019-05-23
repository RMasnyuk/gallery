let thumbs = document.querySelector('#thumbs');
let bigImage = document.querySelector('#largeImg');

thumbs.onclick = function (event) {
    event.preventDefault();
    let target = event.target;
    if (target.nodeName === 'DIV') {
        return;
    } else if (target.nodeName === 'IMG') {
        bigImage.alt = target.parentElement.title;
        bigImage.src = target.parentElement.href;
        return;
    }
    bigImage.alt = target.title;
    bigImage.src = target.href;
}
