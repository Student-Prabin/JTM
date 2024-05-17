const url = 'https://v2.jokeapi.dev/joke/';

let category = document.querySelector("select");
let btn = document.querySelector("button");

const output1 = document.querySelector("#setup");
const output2 = document.querySelector("#punchline");

async function jokes() {
    const response = await fetch(`https://v2.jokeapi.dev/joke/${category.value}?&type=twopart`);
    const joke = await response.json();
    console.log(joke);
    output1.innerText = joke.setup;
    output2.innerText = joke.delivery; 
}

btn.addEventListener("click",()=>{
    jokes();
});
