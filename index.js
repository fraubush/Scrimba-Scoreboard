let homeScore = document.getElementById("homeScore")

let guestScore = document.getElementById("guestScore")

let guestPoints = 0
let homePoints = 0

function homeOne() {
    homePoints += 1
    homeScore.textContent = homePoints
}

function homeTwo() {
    homePoints += 2
    homeScore.textContent = homePoints
}

function homeThree() {
    homePoints += 3
    homeScore.textContent = homePoints
}

function guestOne() {
    guestPoints += 1
    guestScore.textContent = guestPoints
}

function guestTwo() {
    guestPoints += 2
    guestScore.textContent = guestPoints
}

function guestThree() {
    guestPoints += 3
    guestScore.textContent = guestPoints
}