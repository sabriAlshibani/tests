function search() {
    let x = document.getElementById("searching");
    let y = x.value;
    let words = ["car", "bus", "sun", "moon"];
    if (words.includes(y)) {
        document.querySelector("#put").innerHTML = words;
    }
    else {
        document.querySelector("#put").innerHTML = "not found";

    }
}




function sayHello(userName) {
    console.log(userName);
}
sayHello("hello");
let x = document.getElementById("change"); // take the element and make it on the variable 
x.querySelector("p").innerHTML = "hossam" // take the element then change it 

function background() {
    let y = document.getElementById("test");
    y.querySelector("#color").innerHTML = "you can enter";
    y.querySelector("#color").style.backgroundColor = "red"; // change the color 
    document.getElementById("button").style.backgroundColor = "red"
}
function box() {
    document.getElementById("box").style.backgroundColor = "red";
    document.getElementById("box").style.width = "fit-content";

let div = document.getElementById("box");
div.querySelector("#new").innerHTML = "hello guys";
} 