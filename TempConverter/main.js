// TEMPERATURE CONVERTER ASSIGNMENT

//Event listeners
document.getElementById("tempBtn").addEventListener("click",calculateTemp);

//Functions
function calculateTemp() {

    //Input
    let tempF = Number(document.getElementById("inputF").value);

    //Process Input
    let tempC = (tempF - 32) * 5/9;
    
    //Math.round() converts to nearest integer.
    tempC = Math.round(tempC);


    //Use console.log() to check output in the console mid-way to ensure code works
    console.log("tempC: " + tempC);

    //Output
    document.getElementById("outputC").innerHTML = tempC;

}
