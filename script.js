var Elements = [];
// Initiates the data
getInitData();

// Gets objects from storage
function getInitData(){
    chrome.storage.local.get({ElementArray: []},
        function (result) {
            Elements = result.ElementArray;
            //Creates buttons from Elements array data
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
        e.addEventListener("click", () => {
            //handle click
            myFunction(e.id);
        });
        fragment.appendChild(e);
    }
    var UlElement = document.getElementById('LanguagesDiv');
    UlElement.appendChild(fragment);
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
    //Removes data if the input Text exists in the Elements Array
    if (Elements.includes(inputText)) {
        Elements = removeItemOnce(Elements, inputText);
        saveData();
    }

    // If the data doesn't exist in the Element Array, it adds data and saves it.
    else if(inputText !== ''){
        Elements.push(inputText);
        saveData();
    }
}
// Saves the Element array in the chrome local storage
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