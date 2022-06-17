//Controller
function getString(){
    let userString = document.getElementById("userString").value;
    displayString(reverseString(userString));
}

//reverse the input string
function reverseString(origString){
    let reversedString = [];
    for (i=origString.length; i>0; i--) {
        reversedString += origString[i-1];
    };
    return reversedString;
}

//display the reversed string
function displayString(reversedString){
    document.getElementById("message").innerHTML = `Your reversed string is: <b>${reversedString}</b>`;
    document.getElementById("alert").classList.remove("invisible");
}

// clear form
function clearForm(){
    location.reload();
}