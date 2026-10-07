let temperature = -1;

// The program
if (temperature  >= 0 && temperature <= 15.0) {
    console.log("The weather is very Cold");                                                                            
}
else if (temperature >= 15.1 && temperature <= 25.0 ) {
    console.log("The weather today is Mild");
}
else if (temperature > 25.0 && temperature <= 35.0) {
    console.log("The weather is a bit hot");
}
else if (temperature < 0) {
    console.log("It's freezing");
}