function E(id) {
    return document.getElementById(id);
}

window.onload = function () {
    var bytesField = E('bytes'),
        hexChecksumField = E('hexChecksum'),
        decChecksumField = E('decChecksum');

    function calculateChecksum() {
        var bytes = bytesField.value,
            checksum = 0,
            bytesCount = Math.floor(bytes.length / 2),
            i, b;

        for (i = 0; i < bytesCount; i ++) {
            b = parseInt(bytes[i] + bytes[i + 1], 16);
            checksum = (checksum + b) & 0xFF;
        }

        checksum = (((checksum ^ 0xFF) + 1) & 0xFF);
        decChecksumField.value = checksum;
        hexChecksumField.value = checksum.toString(2);
        document.getElementById("im").src="337c3951853579.58fc76482621b.gif";
    }

    E('btn').onclick = calculateChecksum;
    //bytesField.onchange = calculateChecksum;
    //bytesField.onkeyup  = calculateChecksum;

    bytesField.onfocus = function () { bytesField.select(); };
    decChecksumField.onfocus = function () { decChecksumField.select(); };
    hexChecksumField.onfocus = function () { hexChecksumField.select(); };
};
document.addEventListener("keypress",function(event){

    hi(event.key);
    });

    function hi(key){
        switch (key) {
            case "Enter":
                calculateChecksum();
                break;
        }
    }