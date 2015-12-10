function inheritense (parent, child) {
    var tempChild = child.prototype;

    if (Object.create) {
        child.prototype = Object.create(parent.prototype);
    } else {
        function F() {}
        F.prototype = parent.prototype;
        child.prototype = new F();
    }

    for(var key in tempChild) {
        if (tempChild.hasOwnProperty(key)){
            child.prototype[key] = tempChild[key];
        }
    }
}
