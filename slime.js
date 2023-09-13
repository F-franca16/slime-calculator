let numberScreen = "";
let number1 = 0;
let number2 = 0;
let operator = "0";
let screen = "";
const bigSlimerror = ["res/Slimes green/Wrong/Slimewrong1.png","res/Slimes fire/Wrong/Slimewrong3.png","res/Slimes purple/Wrong/Slimewrong5.png"];
const bigSlimesrc = ["res/Slimes green/idle/greengifidle.gif","res/Slimes fire/Idle/firegifidle.gif","res/Slimes purple/Idle/purplegifidle.gif"];
const bigSlimeresult = ["res/Slimes green/Result/Slimeresult1.png","res/Slimes fire/Result/Slimeresult3.png","res/Slimes purple/Result/Slimeresult5.png"];
const smallSlime = ["res/Slimes green/idle/smallgreengifidle.gif","res/Slimes fire/Idle/smallfiregifidle.gif","res/Slimes purple/Idle/smallpurpleidle.gif"];
const backgroundColor = ["#1ce500","#e30000","#9b00e3"]

let currentindex = 0;
$("#smallSlimegif").click(()=>{
    currentindex >= 2?currentindex = 0 : currentindex+=1;
    $("#smallSlimegif img").attr("src", smallSlime[currentindex]).attr("id", currentindex);
    change_slime_body(bigSlimesrc,false);  
    $("body").css("background-color",backgroundColor[currentindex]);
   
})


//Operações
$("#teclado button").click(e => {
    let currentCaracter = e.currentTarget.id;

    if(currentCaracter !== "+" && currentCaracter !== "-" && currentCaracter !== "*" && currentCaracter !== "/"){
        numberScreen = numberScreen + currentCaracter;
    }else if(operator === "0"){
        number1 = parseFloat(numberScreen);
        operator = currentCaracter;
        numberScreen = "";
    }

    screen = numberScreen;

    if(currentCaracter === "="){
        change_slime_body(bigSlimeresult);

        let result = "";
        number2 = parseFloat(numberScreen);

        if(operator == "/" && number2 == 0){
                result = "error";
                change_slime_body(bigSlimerror);       
        }else{
            switch (operator) {
                case "+":
                        result = number1 + number2;
                    break;
                case "-":
                        result = number1 - number2;
                    break;
                case "*":
                        result = number1 * number2;
                    break;
                case "/":
                        result = number1 / number2;
                    break;
                default:
                    break;
            }
        }

        screen = result.toString();
        
        numberScreen = "";
        operator = "0";
    }

    $(".text").html(screen.slice(0,7));
})

function change_slime_body(slimearray, timeoutchoice = true){
    $("#calculatorBody img").attr("src", slimearray[currentindex]);
    if(timeoutchoice){
    setTimeout(() => {$("#calculatorBody img").attr("src", bigSlimesrc[currentindex])},2000);
    }
}


