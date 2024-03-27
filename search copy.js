



function enter() {
    let h3 = document.querySelector("#h3");
let title = h3.value
let p = document.querySelector("#para");
let para = p.value
let span = document.querySelector("#span");
let note = span.value
let cards = document.querySelector("#cards");
let div = document.createElement("div")
let color = document.querySelector("#color")
let range = document.querySelector("#range")
let size = range.value;
console.log(size)
let test = color.value;
console.log(test)
div.className = "card";
    div.innerHTML = `
<div> 
<h3> ${title} </h3>
<p> ${para} </p>
<span> ${note} </span>
</div>
`;
div.style.backgroundColor = test;
div.style.width = size + "%";
    cards.appendChild(div)

}
let cards = document.querySelector("#cards")
let item = cards.querySelectorAll("card")
console.log(item)
console.log(cards.length)
for(i = 0; i < cards.length; i++) {
console.log(cards[i].innerHTML)
}


// let myParagraph = document.createTextNode = "sabri mohammed";

