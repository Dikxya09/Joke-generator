
let jokeElement = document.getElementById("joke");
let buttonElement = document.getElementById("button");
let Maindiv = document.getElementById("main");

buttonElement.addEventListener("click",() =>
{
    generateJoke();
});
async function generateJoke()
{
    console.log("clicked");

    let response= await fetch ("https://icanhazdadjoke.com/",{
        headers:{
            "Accept":"application/json",
        }
    });
    let joke = await response.json();
    console.log(joke);
    Maindiv.textContent= joke.joke;
    console.log(jokeElement);
}