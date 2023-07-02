/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
    console.log("hello rigo from the console!");
  });

  let generateExcuse = () => {
    let pronoun = ["a", "the"];
    let subject = ["jogger", "racoon", "dog", "driver", "comedian"];
    let action = ["took my", "threw my", " stole my"];
    let where = ["on the street", "in my house", "in my driveway"];
    let possetion = ["homework", "toe", "car", "shoe"];

    let proIndx = Math.floor(Math.random() * pronoun.length);
    let subjIndx = Math.floor(Math.random() * subject.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whereIndex = Math.floor(Math.random() * where.length);
    let possetionIndx = Math.floor(Math.random() * possetion.length);

    return `${pronoun[proIndx]}${subject[subjIndx]}${action[actionIndex]}${possetion[possetionIndx]}${where[whereIndex]}`;
  };
};
