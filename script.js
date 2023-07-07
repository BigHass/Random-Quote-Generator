let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const api = "https://api.quotable.io/random";

async function getQuote() {
    try{
        const response = await fetch(api);
        const data = await  await response.json();
        showData(data);
    }catch(e){
        console.log("Error: ", e.message);
    }
}
function showData(data){
    quote.innerText = data.content;
    author.innerText = data.author;
}
window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);