var domElements = {
    name        : document.querySelector('#inputName'),
    email       : document.querySelector('#inputEmail'),
    password    : document.querySelector('#inputPassword'),
    submitBtn   : document.querySelector('#submit'),
    tableWrapper: document.querySelector('#tableWrapper')

};




function nodeCreator(param){

    var newNode = document.createElement(param.type);
    param.className && (newNode.className =  param.className);
    param.src && (newNode.src = param.src);
    param.alt && (newNode.alt = param.alt);
    param.innerHTML && (newNode.innerHTML = param.innerHTML);

    return newNode;

}

function validate() {

    function createTableLine() {

        var tr = nodeCreator({type: 'tr'});


        tr.appendChild(nodeCreator({type: 'td', innerHTML: domElements.name.value}));
        tr.appendChild(nodeCreator({type: 'td', innerHTML: domElements.email.value}));
        tr.appendChild(nodeCreator({type: 'td', innerHTML: domElements.password.value}));
        tr.lastChild.appendChild(nodeCreator({type: 'button', innerHTML: 'show'}));


        domElements.tableWrapper.appendChild(tr);
    }

    return createTableLine();

}

domElements.submitBtn.addEventListener("click",validate);