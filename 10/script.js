let inp = document.getElementById("pass");

// console.log(btn.className);



function show() {
    if (inp.type == 'password') {
        inp.type = 'text';
    } else {
        inp.type = 'password';
    }
}

let spn = document.getElementById("spn");

function text() {
    if (inp.value.length <= 8) {
        spn.innerHTML = "sifre zeifdir"
        spn.className = "badge bg-danger mt-3"
    } else {
        spn.innerHTML = "sifre gucludur"
        spn.className = "badge bg-success mt-3"
    }
}




// let inp2 = document.getElementById("test");

// function test(){
//     alert(inp2.value);
// }