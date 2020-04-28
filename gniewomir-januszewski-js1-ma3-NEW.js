// Question 1
(a, b) => {return a - b};

// Question 2
const baseUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(baseUrl)
.then(function(response){
    return response.json()
})
.then(function(json){
    console.dir(json)
})
.catch(function(){
    window.location.href="error.html"
});

// Question 3
let cats = "These cats are outrageous.";
let giraffes = cats.replace("cats", "giraffes"); 

// Question 4
const userUrl = "https://my.site.com?userId=7";
fetch(userUrl)
.then(function(response){
    return response.json()
})
.then(function(json){
   checkUserId(json);
})

const userId = 7;
function checkUserId(userId){
    
        if(userId >= 10){
            window.location.href="second.html"
            
        }else if(userId < 10){
            window.location.href="first.html"
        }else(userId == null)
            window.location.href="third.html"
        
    
}

// Question 5
function removeButton(){
    const container = document.querySelector(".container");
    const button = document.querySelector(".btn");

    container.removeChild(button);
}
removeButton();

// Question 6

function createParrots(){
    const ul = document.querySelector("ul");
    const cows = document.querySelector(".cows");

    const li = document.createElement("li");
    li.className = "parrots";
    li.innerText = "Parrots";
    ul.appendChild(li);
    cows.after(li)
    
}
createParrots();

//Question 7
const url = "https://api.rawg.io/api/games/3801";

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(json){
    assignGameRating(json)
})
.catch(function(error){
    console.log(error)
});

function assignGameRating(game){
    const gameName = game.name;
    const rating = game.rating;
    let newHtml ="";
    const divRating = document.querySelector(".rating");
   for( let i = 0; i < game.lenght; i++){
       
       
   }
   
    
    

    console.log(gameName, rating);
}
