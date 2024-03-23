function convert() {
    var binaryInput = document.getElementById('binaryInput').value;
    var hexOutput = document.getElementById('hexOutput');
    
    if (binaryInput.match(/^[01]+$/g) === null) {
      alert('Masukkan hanya boleh berisi digit biner (0 dan 1)');
      return;
    }
    
    var decimalValue = parseInt(binaryInput, 2);
    var hexValue = decimalValue.toString(16).toUpperCase();
    hexOutput.value = hexValue;
  }