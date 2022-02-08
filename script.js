"use strict";
const tip = document.querySelector(".label-tips");
const price = document.querySelector(".label-price");
const person = document.querySelector(".label-person");
const cost = document.querySelector(".cost");
const btn = document.querySelector(".check");
const changePerson = Number(person.value);
const changeTips = Number(tip.value);
const changePrice = Number(price.value);

const calcTip = () => {
  {
    const changePerson = Number(person.value);
    const changeTips = Number(tip.value);
    const changePrice = Number(price.value);
    if (
      changePerson > 0.1 &&
      changeTips > 0.1 &&
      changePrice > 0.1 &&
      Number.isInteger(changePerson) &&
      changePrice * 10 > changePerson
    ) {
      console.log(changeTips);
      console.log(price.value);
      console.log(person.value);
      cost.textContent = `Each person should pay: ${(
        (changePrice * changeTips) /
        changePerson
      ).toFixed(2)}$`;
    } else alert("Incorrect data!");
  }
};
btn.addEventListener("click", calcTip);

//typeof changePerson === "number"
