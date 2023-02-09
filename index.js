let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homeScore = 0
let guestScore = 0


function newGame(){
    homeScore = 0
    guestScore = 0
    homeEl.textContent = homeScore
    guestEl.textContent = guestScore
    updateScore()
}

function updateScore(){
    homeEl.textContent = homeScore
    guestEl.textContent = guestScore
    colorWinner()
}

function colorWinner(){
    if(homeScore > guestScore){ 
    homeEl.className = "winning-team"
    guestEl.className = "losing-team"
    } else if (homeScore < guestScore) {
    homeEl.className = "losing-team"
    guestEl.className = "winning-team"
    } else {
        homeEl.className = ""
        guestEl.className = ""
    }
 
}


function add1PointToHome(){
    homeScore += 1
    updateScore()
}
function add2PointsToHome(){
    homeScore += 2
    updateScore()
    
}
function add3PointsToHome(){
    homeScore += 3
    updateScore()
}

function add1PointToGuest(){
    guestScore += 1
    updateScore()
}
function add2PointsToGuest(){
    guestScore += 2
    updateScore()
    
}
function add3PointsToGuest(){
    guestScore += 3
    updateScore()
}

newGame()