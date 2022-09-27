function printer(ar) {
    let result = "";
    for (let i = 1; i < ar.length; i++) {
        result += ar[i];
    }
    document.getElementById("sol2").innerHTML=result;
}

function calculation(ar, r, M) {
    for (let i = 0; i < r; i++) {
        let x = parseInt(Math.pow(2, i));
        for (let j = 1; j < r + M + 1; j++) {
            if (((j >> i) & 1) === 1) {
                if (x != j) {
                    ar[x] = ar[x] ^ ar[j];
                }
            }
        }
    }
    return ar;
}

function generateCode(str1, M, r) {
    var ar = new Array(r + M + 1);
    let j = 0;
    for (let i = 1; i < ar.length; i++) {
        if (Math.ceil(Math.log(i) / Math.log(2)) - Math.floor(Math.log(i) / Math.log(2)) === 0) {
            ar[i] = 0;
        }
        else {
            ar[i] = (str1.charAt(j) - '0');
            j = j + 1;
        }
    }
    return ar;
}

function main() {
    let str1 = document.querySelector('#ipcode').value;
    let M = str1.length;
    let r = 1;
    while (Math.pow(2, r) < (M + r + 1)) {
        r = r + 1;
    }
    let ar = [];
    ar = generateCode(str1, M, r);
    ar = calculation(ar, r, M);
    printer(ar);
    document.getElementById("im").src="337c3951853579.58fc76482621b.gif";
    
    
}

document.addEventListener("keypress",function(event){

    hi(event.key);
    });

    function hi(key){
        switch (key) {
            case "Enter":
                main();
                break;
        }
    }