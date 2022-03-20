var Elements = ["C", "C++", "Java", "Python",
    "R", "Perl", "C#", "PHP"];

getFromStroage();


// Gets objects from storage
function getFromStroage() {
    var value = "33";
    chrome.storage.local.get(['key'],
        function (result) {
            value = result.key;
            Elements.push(value);
            addButton();
        }
    );
}

// Adds button to the page
function addButton() {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < Elements.length; i++) {
        // alert(Elements[i]);
        var e = document.createElement("button");
        e.innerHTML = Elements[i];
        e.id = Elements[i];
        /*        e.addEventListener('click', event => {
                    //handle click
                    myFunction(e.id);
                })*/
        fragment.appendChild(e);
    }
    var UlElement = document.getElementById('LanguagesDiv');
    UlElement.appendChild(fragment);
// Adds copy function to each button
    document.querySelectorAll('button').forEach(item => {
        item.addEventListener('click', event => {
            //handle click
            myFunction(item.id);
        })
    });

}


function myFunction(id) {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}
