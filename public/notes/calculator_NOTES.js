//NOTES ARE AT THE BOTTOM 

var buttons = document.getElementsByClassName("buttons");
//THE ABOVE LINE RETURNS AN ARRAY!!!!! ayiyiyi
//it says ELEMENTS PLURAL, hence the array

var spot1Holder = "";
var spot2Holder = "";
var operand = "";
var fieldLeft = document.getElementById("fieldLeft");
var fieldRight = document.getElementById("fieldRight");
var result = "";

//THIS ITERATION ADDS A LISTENER TO EVERY BUTTON
//MAKE IT < BUTTONS.LENGTH.  = IS ASSIGNING. 
for (var i = 0; i < buttons.length; i++){
    console.log("logging button" + buttons[i]);
    buttons[i].addEventListener("click", listener, false);
}

function listener (event){
    console.log("listened");
    console.log(this.value + "above the iffies");
    var value = this.value; 
    if (this.value === "c"){
        clearFields();
    }
    else if (this.value === "="){
        evaluateFields();
    }
    else if (isNaN(this.value)){
        console.log(this.value + " isn't number");
        operand = this.value;
        document.getElementById("operand").value = operand;
    }
    else if (operand != ""){
        console.log(this.value + " this is a number");
        fieldRight.value += this.value;
        console.log(fieldRight + " is fieldRight");
        // document.getElementById("fieldRight").value = fieldRight; 
    } else {
        console.log(this.value + " this is for fieldLeft");
        fieldLeft.value += this.value;
        console.log(fieldLeft + " is fieldLeft");
    }
} 
var clearFields = function (){
    document.getElementById("fieldLeft").value = "";
    document.getElementById("fieldRight").value = "";
    document.getElementById("operand").value = "";
    console.log("clearFields ran");
}
var evaluateFields = function(){
    console.log("found evaluateFields");
    console.log(fieldLeft.value + " is fieldLeft value");
    console.log(fieldRight.value + " is fieldRight value");
    operand = document.getElementById("operand");
    console.log(operand.value + " is operand value");
    if (operand.value == "+"){
        fieldLeft.value = parseInt(fieldLeft.value) + parseInt(fieldRight.value);
        fieldRight.value = "";
    } else if (operand.value == "-"){
        fieldLeft.value = parseInt(fieldLeft.value) - parseInt(fieldRight.value);
        fieldRight.value = "";
    } else if (operand.value == "*"){
        fieldLeft.value = parseInt(fieldLeft.value) * parseInt(fieldRight.value);
        fieldRight.value = "";
    } else if (operand.value == "/"){
        fieldLeft.value = parseInt(fieldLeft.value) / parseInt(fieldRight.value);
        fieldRight.value = "";
    }
}