var newData = [],
    count = 0,
    container = selector('#result'),
    total = selector('#count'),
    newData = data,
    FROM, TO, NUM_OF_ELEMENT;

function formatDate(index) {
    var formDate = new Date(newData[index].date);
    var year = formDate.getFullYear();
    var month = formDate.getMonth() + 1;
    var day = formDate.getDate();
    var hour = formDate.getHours();
    var minutes = formDate.getMinutes();
    newData[index].date = year + "/" + month + "/" + day + " " + (hour < 10 ? "0" + hour : hour) + ":" + (minutes < 10 ? "0" + minutes : minutes);
}
function preparingObj(index) {
    newData[index].name = newData[index].name.toLowerCase();
    newData[index].name = newData[index].name.replace(/[^abc]/, newData[index].name.charAt(0).toUpperCase());
    newData[index].description = newData[index].description.slice(0, 15);
}
// format object to required layout
function formatObject() {
    for (var i = 0; i < newData.length; i++) {
        preparingObj(i);
        formatDate(i);
    }
}
function create(el) {
    return document.createElement(el);
}
function selector(tag) {
    return document.querySelector(tag);
}
function formatDiv(objProperty, elem) {
    (objProperty.className) && (elem.className = objProperty.className);
    (objProperty.src) && (elem.src = objProperty.src);
    (objProperty.alt) && (elem.alt = objProperty.alt);
    (objProperty.innerHTML) && (elem.innerHTML = objProperty.innerHTML);
    (objProperty.href) && (elem.href = objProperty.href);
    return elem;
}
function fillDiv(i) {

    var outerContainer = create("div");
    container.appendChild(outerContainer);
    outerContainer = formatDiv({
        className: 'col-sm-3 col-xs-6'
    }, outerContainer);

    var imageNew = create('img');
    outerContainer.appendChild(imageNew);
    imageNew = formatDiv({
        className: 'img-thumbnail',
        src: newData[i].url,
        alt: newData[i].name
    }, imageNew);

    var innerContainer = create('div');
    outerContainer.appendChild(innerContainer);
    innerContainer = formatDiv({
        className: 'info-wrapper'
    }, innerContainer);

    var link = create('a');
    outerContainer.appendChild(link);
    link = formatDiv({
        href: '#',
        className: 'delLink',
        innerHTML: 'remove'
    }, link);

    var numberAndName = create('div');
    innerContainer.appendChild(numberAndName);
    numberAndName = formatDiv({
        className: "text-muted",
        innerHTML: newData[i].id + ". " + newData[i].name
    }, numberAndName);

    var description = create('div');
    innerContainer.appendChild(description);
    description = formatDiv({
        className: 'text-muted',
        innerHTML: newData[i].description
    }, description);

    var dateLine = create('div');
    innerContainer.appendChild(dateLine);
    dateLine = formatDiv({
        className: 'text-muted',
        innerHTML: newData[i].date
    }, dateLine);
}
formatObject();
//-----------------------------------------------------------------------------
function displayAndClear() {
    var inPut = selector('#exampleInputName2');
    var textArea = selector('#text');
    var delText = selector('#del');
    inPut.addEventListener('keyup', function () {
        textArea.value = inPut.value;
    });
    delText.addEventListener('click', function () {
        textArea.value = "";
        inPut.value = "";
    });
}
function addElement() {
    var adBat = selector('#addB');
    var disableButton = function () {
        adBat.className = 'btn btn-sm btn-danger disabled';
    }
    function createElHandler() {
        if (count < 10) {
            fillDiv(count);
            total.innerHTML = count + 1;
            count++;
        } else {
            disableButton();
        }
    }
    adBat.addEventListener('click', createElHandler)
}

function removeElement() {
    container.addEventListener('click', function (event) {
        if (event.target.tagName == 'A') {
            event.preventDefault();
            event.currentTarget.removeChild(event.target.parentNode);
            count--;
        }
        total.innerHTML = count;
    });
}
//--------------------------------------------------------------------------
function inputAndDisplay() {
    var start = selector('#from'),
        end = selector('#to'),
        sum = selector('#quantity');
    start.addEventListener('change', function (event) {
        FROM = event.target.value;
    });
    end.addEventListener('input', function (event) {
        TO = event.target.value;
    });
    /* don`t work
    sum.addEventListener('input', function (event) {
        NUM_OF_ELEMENT = event.target.value;
    });
    */
}
function addCollElement() {
    inputAndDisplay();
    var addElem = selector('#addE');
    addElem.addEventListener('click', function () {
        newData = newData.slice(FROM - 1, TO);
        //newData = newData.splice(NUM_OF_ELEMENT);
        total.innerHTML = newData.length;
        console.log(newData);
        for (var i = 0; i < newData.length; i++) {
            fillDiv(i);
        }
    });
}
function delColElement() {
    var delElem = selector('#delE');
    delElem.addEventListener('click', function (event) {
        console.log(newData);
        var childDiv = document.getElementsByClassName('col-sm-3 col-xs-6');
        container.removeChild(childDiv[0]);
        total.innerHTML = container.childNodes.length;
    });
}
displayAndClear();
addElement();
removeElement();
addCollElement();
delColElement();









			