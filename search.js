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
let mas = document.querySelector("#read");
mas.style.width = "fit-content"
mas.style.backgroundColor = "#ccc";
mas.style.padding = "20px"
mas.style.position = "relative"
mas.style.transition = ".5s"
let btn = document.querySelector("#click")
btn.style.position = "absolute"
btn.style.bottom = " 0 "
btn.style.color = " red "

function change() {
    mas.textContent = "and pla pla pla pla k;eehgjkre gjrhgg erghghkahg a  he;sr90tqt hoeorgre r errtwewe triutera gerrter"
    mas.style.transition = ".5s"

}

let objects = ["mouse", "laptop", "computer", "phone", "car"]
let color = ["red", "yalow", "green"]
let price = [300, 400, 500];


mainLoop: for (i = 0; i < objects.length; i++) {
    let search = "green"
    document.write("-".repeat(15));
    document.write("<p>")
    document.write(objects[i])
    document.write("<p>")

    document.write("-".repeat(15));
    document.write("<p>")


    document.write("color :")
    document.write("<p>")


    branchLoop: for (k = 0; k < color.length; k++) {
        if (color[k] === "yalow") {
            break mainLoop;
        }
        document.write(`- ${color[k]}`)
        document.write("<p>")
    }

}
let exe = document.querySelector("#exe");
let result = document.querySelector("#result")
let object = []
function enter() {
    object.push(exe.value)
    let noun = object.shift()
    if (typeof noun === "string") {
    result.innerHTML += `<p> ${noun} </p> <br>`
    result.style.backgroundColor = "red"
    result.style.width = "fit-content"
    result.style.padding = "20px"
    }
}


