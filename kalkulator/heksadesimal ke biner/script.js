function convertHexToBin() {
    var hexInput = document.getElementById("hexInput").value;
    try {
        var decimalValue = parseInt(hexInput, 16);
        var binaryValue = decimalValue.toString(2);
        document.getElementById("binaryOutput").innerText = "Binary: " + binaryValue;
    } catch (error) {
        document.getElementById("binaryOutput").innerText = "Invalid Hexadecimal Value";
    }
}