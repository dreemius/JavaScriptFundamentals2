/*
"????????? ?????"
 1. ???????? ???? for, ??????? ??????? 15 ????????.
 ?????? ????? ?? ?????? ???????? ????? ?????????? ???????????? ??? ????????? ?????,
 ??? ????? ?????????????? ????????? ?????:
        var first = Math.floor((Math.random() * 6) + 1);
        var second = Math.floor((Math.random() * 6) + 1);
 2. ? ?????? ???????? ????? ?????????? ???????? ?????????? ???? ?????????? ? ???????:
        "?????? ?????:" + first + "?????? ?????:" + second;
 3. ???????? ?????????? ? ??? ? ??????? ???????:
        document.getElementById("result").innerHTML += "?????? ?????:" + first + "?????? ?????:" + second + "<br>";
 4. ????????????? ?????????? ????? ??????????:
        ???? ?????????? ??? ????????? ????????????? ???????: "????? ?????. ????? <number>"
        document.getElementById("result").innerHTML += "????? ?????. ????? <number>"
 5. ????????? ???????? ????????? (|| &&) ???? ??? ????? ????? 1 ?? ???????:
        "??? ???????"
 */
for (var i = 1; i <= 15; i++){
    var FirstVar = Math.floor((Math.random() * 6) + 1);
    var SecondVar = Math.floor((Math.random() * 6) + 1);
    document.getElementById("result").innerHTML += "?????? ?????:" + FirstVar + "?????? ?????:" + SecondVar + "<br>";
}