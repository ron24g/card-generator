/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let top = document.querySelector(".top");
  let mid = document.querySelector(".mid");
  let bot = document.querySelector(".bot");
  let cardSymbol = ["♦", "♠", "♣", "♥"];
  let cardNumber = [
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
  let targetSymbol = Math.floor(Math.random() * cardSymbol.length);
  let targetNumber = Math.floor(Math.random() * cardNumber.length);
  top.innerHTML = `${cardSymbol[targetSymbol]}`;
  mid.innerHTML = `${cardNumber[targetNumber]}`;
  bot.innerHTML = `${cardSymbol[targetSymbol]}`;
};
