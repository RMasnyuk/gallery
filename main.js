let thumbs = document.querySelector('#thumbs');
let bigImage = document.querySelector('#largeImg');

thumbs.onclick = function (event) {
    event.preventDefault();
    let target = event.target;
    if (target.tagName !=='IMG') {
        return;
    }
        bigImage.alt = target.parentElement.title;
        bigImage.src = target.parentElement.href;

}
