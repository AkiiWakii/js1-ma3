// Question 1
(a, b) => {return a - b}

// Question 2
const baseUrl = "https://api.rawg.io/api/games?genres=sports"

fetch(baseUrl)
.then(function(response){
    return response.json()
})
.then(function())
