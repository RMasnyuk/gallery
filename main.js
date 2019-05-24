let thumbs = document.querySelector('#thumbs');
let bigImage = document.querySelector('#largeImg');

thumbs.onclick = function (event) {
    event.preventDefault();
    let target = event.target;
<<<<<<< HEAD
    if (target.nodeName === 'DIV') {
        return;
    } else if (target.nodeName === 'IMG') {
        bigImage.alt = target.parentElement.title;
        bigImage.src = target.parentElement.href;
=======
    if (target.tagName !== 'IMG') {
>>>>>>> develop
        return;
    }
    bigImage.alt = target.parentNode.title;
    bigImage.src = target.parentNode.href;
}
