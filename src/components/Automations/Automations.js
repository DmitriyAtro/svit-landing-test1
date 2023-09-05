import React from "react";
import "./Automations.css";

// function changeIt(elem) {
//   let pic = document.getElementById("pic");
//   if (elem.id === "btn1") {
//     pic.classList = ["btnOne"];
//   }
//   if (elem.id === "btn2") {
//     pic.classList = ["btnTwo"];
//   } else {
//     pic.classList = ["btnThree"];
//   }
// }        <div id="btn1" onclick={changeIt(this)}>
//   Button 1
// </div>
// <div id="btn2" onclick={changeIt(this)}>
//   Button 2
// </div>
// <div id="btn3" onclick={changeIt(this)}>
//   Button 3
// </div>
const Automations = () => {
  return (
    <div id="pic" className="automations-container btnOne">
      <div className="automations-info">
        <h1>Automate your routine</h1>
        <p>Lorem ipsum dolor sit amet some text goes here</p>
        <ul>
          <li>
            <a href="">Morning</a>
          </li>
          <li>
            <a href="">Day</a>
          </li>
          <li>
            <a href="">Night</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Automations;
