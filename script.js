var Elements = ["C", "C++", "Java", "Python",
    "R", "Perl", "C#", "PHP"];

chrome.storage.local.get(['key'], function(result) {
    // alert(Elements.length);
    Elements.push(result.key);
    // alert(typeof result.key);
    // alert(Elements.length);
    //alert(result.key);
    addButtons();
    //alert('Value currently is ' + result.key);
});
function addButtons() {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < Elements.length; i++) {
        //alert(Elements[i]);
        var e = document.createElement("button");
        e.innerHTML = Elements[i];
        e.id = Elements[i];
        e.addEventListener('click', event => {
            //handle click
            myFunction(e.id);
        })
        fragment.appendChild(e);
    }
    var UlElement = document.getElementById('LanguagesDiv');
    UlElement.appendChild(fragment);
}

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
    var value = "iad7122";
    var key ="";

    chrome.storage.local.set({key: value},
        function() {
            //alert('Value is set to ' + value);
        });


}
