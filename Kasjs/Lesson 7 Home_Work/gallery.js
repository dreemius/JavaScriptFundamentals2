var newData = [],
    count = 0,
    container = selector('#result'),
    total = selector('#count'),
    newData = data,
    FROM, TO, NUM_OF_ELEMENT;

function formatDate(oldDate){
    var formDate = new Date(oldDate);
    var year = formDate.getFullYear();
    var month = formDate.getMonth() + 1;
    var day = formDate.getDate();
    var hour = formDate.getHours();
    var minutes = formDate.getMinutes();
    return year + "/" + month + "/" + day + " " + (hour < 10 ? "0" + hour : hour) + ":" + (minutes < 10 ? "0" + minutes : minutes);
}

function capitalizeLetter(oldName){
    oldName = oldName.toLowerCase();
    oldName = oldName.replace(/[^w]/,oldName.charAt(0).toUpperCase());
    return oldName;
}
function cuttingLetter(oldDescription){
    oldDescription = oldDescription.slice(0, 15);
    return oldDescription;
}
// format object to required layout
function transformObject(item){
    item.name = capitalizeLetter(item.name);
    item.description = cuttingLetter(item.description);
    item.date = formatDate(item.date);
}
function formatObject () {
    for (var i = 0; i < newData.length; i++) {
        transformObject(newData[i]);
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
function fillDiv(newObj) {

    var outerContainer = create("div");
    container.appendChild(outerContainer);
    outerContainer = formatDiv({
        className: 'col-sm-3 col-xs-6'
    }, outerContainer);

    var imageNew = create('img');
    outerContainer.appendChild(imageNew);
    imageNew = formatDiv({
        className: 'img-thumbnail',
        src: newObj.url,
        alt: newObj.name
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
        innerHTML: newObj.id + ". " + newObj.name
    }, numberAndName);

    var description = create('div');
    innerContainer.appendChild(description);
    description = formatDiv({
        className: 'text-muted',
        innerHTML: newObj.description
    }, description);

    var dateLine = create('div');
    innerContainer.appendChild(dateLine);
    dateLine = formatDiv({
        className: 'text-muted',
        innerHTML: newObj.date
    }, dateLine);
}

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
    formatObject();
    var addBut = selector('#addBut');
    var disableButton = function () {addBut.className = 'btn btn-sm btn-danger disabled';}
    function createElHandler() {
        if (count < 10) {
            newData = data
            fillDiv(newData[count]);
            total.innerHTML = count + 1;
            count += 1 ;
        } else {
            disableButton();
        }
    }
    addBut.addEventListener('click', createElHandler)
}

function removeElement() {
    var addBut = selector('#addBut');
    var activeButton = function(){addBut.className = 'btn btn-sm btn-success';};
    container.addEventListener('click', function (event) {
        if (event.target.tagName == 'A') {
            event.preventDefault();
            event.currentTarget.removeChild(event.target.parentNode);
            count -= 1;
            total.innerHTML = count ;
        }
        if(total.innerHTML == 0){
            activeButton();
        }
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
    sum.addEventListener('input', function (event) {
        NUM_OF_ELEMENT = event.target.value;

    });
}
function addCollElement() {
    inputAndDisplay();
    var addElem = selector('#addElem');
    addElem.addEventListener('click', function () {
        newData = newData.slice(FROM - 1, TO);
        newData.splice(NUM_OF_ELEMENT);
        total.innerHTML = newData.length + count;
        for (var i = 0; i < newData.length; i++) {
            fillDiv(newData[i]);
            count = i + 1;
        }
        addElem.style.display = 'none';
    });

}
displayAndClear();
addElement();
removeElement();
addCollElement();











			