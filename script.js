var Elements = [];

//getFromStroage();
getInitData();

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


function getInitData(){
    // localStorageElements = JSON.parse(chrome.storage.local.get('Elements'));
    // alert(localStorageElements);


    chrome.storage.local.get({ElementArray: []},
        function (result) {
            Elements = result.ElementArray;
            //Elements.push(value);
            addButton();
        }
    );
}

// Adds button to the page
function addButton() {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < Elements.length; i++) {
        // alert(Elements[i]);
        const e = document.createElement("button");
        e.innerHTML = Elements[i];
        e.id = Elements[i];
        e.addEventListener("click", event => {
            //handle click
            myFunction(e.id);
        });
        fragment.appendChild(e);
    }
    var UlElement = document.getElementById('LanguagesDiv');
    UlElement.appendChild(fragment);
// Adds copy function to each button
/*    document.querySelectorAll('button').forEach(item => {
        item.addEventListener('click', event => {
            //handle click
            myFunction(item.id);
        })

    });*/

}


function myFunction(id) {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}


const addInputButton = document.getElementById("input-add");
addInputButton.addEventListener("click", addData);

function addData() {
    const inputText = document.getElementById("input-get").value;
    //alert(inputText);
    if (Elements.includes(inputText)) {
        //alert("It's included")


        Elements = removeItemOnce(Elements, inputText);
        alert(Elements);
        saveData();
        //chrome.storage.local.remove("key",function() {
            // Your code
            // This is an asyn function
    }
    else{
        Elements.push(inputText);
        saveData();
    }
}

function saveData(){
    chrome.storage.local.set({'ElementArray': Elements});
}

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}