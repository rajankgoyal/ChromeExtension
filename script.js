document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', event => {
        //handle click
        myFunction(item.id);
    })
})

function myFunction(id) {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}
