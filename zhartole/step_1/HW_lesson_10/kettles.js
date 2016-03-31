/**
 * Created by zhartole on 08.12.2015.
 */

    var classic = document.querySelector('#classic'),
        electric = document.querySelector('#electric');

        function hide(name) {
            for (var i = 0; i < arguments.length; i++) {
                var elem = document.getElementById("" + arguments[i] + "");
                elem.className = "hide";
            }
        }

        function show(name) {
           for (var i = 0; i < arguments; i++) {
                var elem = document.getElementById("#"+arguments[i]+"");
                elem.className = ""+arguments[1]+"-show";
           }
        }


    /* -- Classic Teapot --*/

    function DoKettles() {
        this.isBoiling = false;
        this.name = "classic";
    }

    DoKettles.prototype.turnOn = function () {
        this.isBoiling = true;
        hide("messageMotivate","messageDone","cupInSink");        //setTimeout(hide, 1000);
        show("messageRun");                                       //setTimeout(show, 1000);
        hide("messageRun");                                       //setTimeout(hide, 5000);
        show("messageDone", "cup");                               //setTimeout(show, 5000);
    };
    DoKettles.prototype.turnOff = function () {
        this.isBoiling = false;
        hide("cup", "classic", "electric");                       //setTimeout(hide, 1000);
        show("cupInSink");                                        //setTimeout(show, 1000);
    };

    var classicKettle = new DoKettles();

    /* -- Electric Kettle --*/

    var electricKettle = Object.create(classicKettle);

    electricKettle.turnOn = function () {

    };

    function runKettles() {

        classic.addEventListener("click", classicKettle.turnOn());
        electric.addEventListener("click", classicKettle.turnOff() );
    }
    //runKettles();
