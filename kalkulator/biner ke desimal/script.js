function convertBinaryToDecimal() {
    var binaryInput = document.getElementById("binaryInput").value;
    var decimalResult = parseInt(binaryInput, 2);
    document.getElementById("result").innerHTML = "Hasil: " + decimalResult;
}