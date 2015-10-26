

var total = 0;
run();
/*создать главную run() функцию в которой будет выполняться основной код (цикл)*/
function run(){
    for(var i=0;i<=15;i++){
        var first = getRndNumber();
        var second = getRndNumber();
        printString(createExceptions(first,second)) ;
        total+=first+second;
    }
    totalPrint(total);
}
/*сделать get функции для генераторов чисел (getRndNumber)*/
function getRndNumber(){
    return Math.floor((Math.random() * 6) + 1);
}
function printString(string){
     document.getElementById("result").innerHTML += string;
}
/*сделать функцию для вывода специфических результатов (совпадения 1==1, 2==2,.... 6==6). Она будет проверять все условия и выводить данные.*/
function createExceptions(stg1,stg2){
     if(stg1==1&&stg2==1){
        return "Two equal numbers : " + stg1 + "<br>";
    }
    else if(stg1==2&&stg2==2){
        return "Two equal numbers : " + stg1+ "<br>";
    }
    else if(stg1==3&&stg2==3){
        return "Two equal numbers : " + stg1+ "<br>";
    }
    else if(stg1==4&&stg2==4){
        return "Two equal numbers : " + stg1+ "<br>";
    }
    else if(stg1==5&&stg2==5){
        return "Two equal numbers : " + stg1+ "<br>";
    }
    else if(stg1==6&&stg2==6){
        return "Two equal numbers : " + stg1+ "<br>";
    }
    else{
        return  "First_Dice: " + stg1 + " "+"Second_Dice: " + stg2 + "<br>";
    }
}
/*сделать функцию для вывода результата total*/
function totalPrint(total){
    printString(total > 100 ? "You win " + total : "You lose " + total)

}