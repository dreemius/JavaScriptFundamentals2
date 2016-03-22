/**
 * Created by zhartole on 01.12.2015.
 */


var isKettles = (function() {
    var classic = document.querySelector('#classic'),
        electric = document.querySelector('#electric');

    /* -- Classic Teapot --*/

    function DoKettles() {
        this.isBoiling = false;
        this.name = "Classic";
    }

    DoKettles.prototype.turnOn = function () {
        this.isBoiling = true;
        console.log("Teapot " + this.name + " inclusions");
        console.log(this.isBoiling)
    };
    DoKettles.prototype.turnOff = function () {
        this.isBoiling = false;
        console.log("Teapot " + this.name + " off");
        console.log(this.isBoiling)
    };

    var classicKettle = new DoKettles();

    function showClassic() {
        console.log(classicKettle.turnOn());
        console.log(classicKettle.turnOff());
    }

    /* -- Electric Kettle --*/

    var electricKettle = Object.create(classicKettle);

    electricKettle.turnOn = function () {
        console.log("button is pressed");
        classicKettle.name = "Electric";
        classicKettle.turnOn();
    };

    function showElectric() {
        console.log(electricKettle.turnOn());
        console.log(electricKettle.turnOff());
    }

    function runKettles() {
        classic.addEventListener("checked", showClassic());
        electric.addEventListener("click", showElectric());
    }

    return {
        initKettles : function(){
            runKettles();
        }
    }
}());

isKettles.initKettles();