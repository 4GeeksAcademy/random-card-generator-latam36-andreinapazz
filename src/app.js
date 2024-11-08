/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let suits = ["♠", "♥", "♣", "♦"];
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let card = document.getElementById("card");
  let topSuit = document.getElementById("top-suit");
  let valueCard = document.getElementById("value");
  let bottomSuit = document.getElementById("bottom-suit");

  let randmSuit = Math.floor(Math.random() * 4);
  let randmValue = Math.floor(Math.random() * 13);

  valueCard.innerHTML = values[randmValue];
  topSuit.innerHTML = suits[randmSuit];
  bottomSuit.innerHTML = suits[randmSuit];

  if (suits[randmSuit] == "♥" || suits[randmSuit] == "♣") {
    topSuit.style.color = "red";
    bottomSuit.style.color = "red";
  }

  topSuit.style.textAlign = "left";
  topSuit.style.fontSize = "7em";

  bottomSuit.style.textAlign = "left";
  bottomSuit.style.fontSize = "7em";
  bottomSuit.style.rotate = "180deg";

  valueCard.style.fontSize = "10em";
};
