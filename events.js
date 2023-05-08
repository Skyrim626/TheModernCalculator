
// Global variable
let numbers = "0";
let countDecimal = 0;
let currentOperation = '';
let recentNumber = "";

/**
 * A function that gets the inputted number value that was prompted by the user
 * @param {string} number a string value prompted by the user
 */
function clickNumber(number) {
    /**
     * This checks if the first character of the string is zero and the second character is empty
     * NOTE:: The default value of numbers is 0. If the user prompts a number value instead of zero then the value of the variable(numbers) is set empty then adds the current number(prompted) into that variable
     * 
     * If the user prompts the decimal first then the default zero value of variable(numbers) is not removed
     * (THIS APPLIES WHEN YOU CALCULATE Decimal Values but the whole number is 0)
     * 
     */
    if(numbers.charAt(0) === '0' && numbers.charAt(1) == '') {
        numbers = "";
    }

    numbers += number; // String concatenation
    document.getElementById('inputValue').value = numbers;
    
}

/**
 * A function that gets the decimal point that was button prompted by the user
 * @param {string} decimal a string value that only contains '.'
 */
function clickDecimal(decimal) {   
    /**
     * This checks the counter if the user already prompted a decimal value
     * 
     * If the user prompts a decimal button then the counter(countDecimal) is incremented by 1 if the condition is true
     * NOTE:: The default value of the counter(countDecimal) is 0
     */
    if(countDecimal !== 1) {
        numbers += decimal;
        document.getElementById('inputValue').value = numbers;
        countDecimal++; // Adds 1 in the counter
    }

}

/**
 * A method that calculates the value based on the operation selected
 */
function calculate() {

    let result = 0; // Default value (NOTE: THIS VARIABLE IS USED FOR CALCULATION)

    switch(currentOperation) {
        case '+':
            result = Number.parseFloat(recentNumber) + Number.parseFloat(numbers);
            document.getElementById('recentInput').value = recentNumber + " + " + numbers + " = ";
            break;
        case '-':
            result = Number.parseFloat(recentNumber) - Number.parseFloat(numbers);
            document.getElementById('recentInput').value = recentNumber + " - " + numbers + " = ";
            break;
        case '*':
            result = Number.parseFloat(recentNumber) * Number.parseFloat(numbers);
            document.getElementById('recentInput').value = recentNumber + " * " + numbers + " = ";
            break;
        case '/':
            result = Number.parseFloat(recentNumber) / Number.parseFloat(numbers);
            document.getElementById('recentInput').value = recentNumber + " / " + numbers + " = ";
            break;
    }

    // Replaces the current value with a result value
    numbers = result.toString();
    currentOperation = "";
    document.getElementById('inputValue').value = result;

}

/**
 * A function that adds an arithmetic operation for calculation
 * This function also replace the recent operation that was prompted
 * @param {string} op 
 */
function operation(op) {
    
    // Checks if the user prompts an  arithmetic operation
    /**
     * If the user is not yet prompt an arithmetic operation then that's his/her current opearation.
     * But, if the user already prompted an arithmetic operation then he/she wants to change it, then an else statement is executed changing the recent arithmetic operation into a current operation
     */
    if(currentOperation === '') {

        switch(op) {
            case '+':
            document.getElementById('recentInput').value = numbers + op;
            currentOperation = op;
            break;
        case '-':
            document.getElementById('recentInput').value = numbers + op;
            currentOperation = op;
            break;
        case '*':
            document.getElementById('recentInput').value = numbers + op;
            currentOperation = op;
            break;
        case '/':
            document.getElementById('recentInput').value = numbers + op;
            currentOperation = op;
            break;
        case '=':
            document.getElementById('recentInput').value = numbers + op;
            currentOperation = op;
            break;

        }

        recentNumber = numbers;
        numbers = '0';
        countDecimal = 0;

        document.getElementById('inputValue').value = numbers;  

    }

    else {

        let tempRecentArray = document.getElementById('recentInput').value.split("");

        for(let i = 0; i < tempRecentArray.length; i++) {
            if(tempRecentArray[i] === '+' || tempRecentArray[i] === '-' || tempRecentArray[i] === '*' || tempRecentArray[i] === '/') {
                tempRecentArray[i] = op;
                currentOperation = op;
                break;
            }
        }

        let newValue = "";
        for(let i = 0; i < tempRecentArray.length; i++) {
            newValue += tempRecentArray[i];
        }

        document.getElementById('recentInput').value = newValue;

    }

}

/**
 * A function that removes all the values in the input
 */
function clearAll() {

    document.getElementById("recentInput").value = "";
    document.getElementById("inputValue").value = "0";
    numbers = "0";
    countDecimal = 0;
    currentOperation = "";
    
}

/**
 * A function that removes the last value of prompted number
 */
function eraseLast() {

    let tempArrary = numbers.split(""); // Splits the characters into an array
    tempArrary.pop(); // Removes the last element in the array

    numbers = "";
    for(let i = 0; i < tempArrary.length; i++) {
        numbers += tempArrary[i];
    }

    // Checks if the number has no value
    // Sets the default value to zero
    if(numbers.charAt(0) === '') {
        numbers = '0';
    }

    document.getElementById('inputValue').value = numbers;

}