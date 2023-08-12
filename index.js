

const handOptions = {
    "rock": "Pics/Rock.png",
    "paper": "Pics/Paper.png",
    "scissors": "Pics/Scissors.png"
}

const pickUserHand = (hand) => {

    //hide current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    //show the next page with hand u picked
    let contest = document.querySelector(".contest");
    contest.style.display = "flex"

    //set the user pick
    document.getElementById("userPickImage").src = handOptions[hand];

    pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * hands.length)];
    
    // set computer image 
    document.getElementById("cmpPickImage").src = handOptions[cpHand]

};