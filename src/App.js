import './App.css';
import { useState } from 'react';
import $ from 'jquery';


function App() {
  return (
    <div>
      <Header />
      <GradingScaleCalculator />
    </div>
  );
}

function GradingScaleCalculator() {
  const [userInput, setUserInput] = useState(
    {
      "totalProblems": 15,
      "rangeStart": 10,
      "rangeEnd": 15,
      "increment": 0.5,
      "roundTo": 1
    }
  );
  // const [totalProblems, setTotalProblems] = useState(0);
  // const [rangeStart, setRangeStart] = useState(0);
  // const [rangeEnd, setRangeEnd] = useState(0);
  // const [increment, setIncrement] = useState(0);


  // let onClickButton = function(setTotalProblems, setRangeStart, setRangeEnd, setIncrement) {
  //   // error catching?
  //   // set state for all the stuff
  // }
  
  return(
    <div className="calculator-container">
      <ConfigEntryBox userInput={userInput} setUserInput={setUserInput} />
      <ScaleDisplay userInput={userInput} />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Grading Percentage Calculator</h1>
    </header>
  );
}

function ConfigEntryBox( { userInput, setUserInput } ) {

  function onButtonClick() {
    let totalProblems = document.getElementById("total-problems-input").value;
    let rangeStart = document.getElementById("range-start-input").value;
    let rangeEnd = document.getElementById("range-end-input").value;
    let increment = document.getElementById("increment-input").value;
    let roundTo = document.getElementById("round-to-input").value;
    
    // TODO: error handing

    setUserInput(
      {
        "totalProblems": Number(totalProblems),
        "rangeStart": Number(rangeStart),
        "rangeEnd": Number(rangeEnd),
        "increment": Number(increment),
        "roundTo": Number(roundTo)
      }
    );
    console.log(userInput);
  }

  return (
    <div className="config-container">
      <form>
        <label>Total problems: </label>
        <input type="text" id="total-problems-input"/><br/><br/>
        <label>Correct answers: </label>
        <input type="text" id="range-start-input"></input>
        <label> to </label>
        <input type="text" id="range-end-input"></input><br/><br/>
        <label>Increment by: </label>
        <input type="type" id="increment-input"/><br/><br/>
        <label>Round to </label>
        <input type="type" id="round-to-input"/>
        <label>decimals.</label><br/><br/>
        
      </form>
      <button id="calculate-button" onClick={() => onButtonClick()}>Calculate</button>
    </div>
  )
}

function ScaleDisplay( { userInput }) {
  
  let valuesArray = [];
  // console.log(userInput.rangeStart);
  // console.log(userInput.rangeEnd);
  for (let i = userInput.rangeStart; i <= userInput.rangeEnd; i += userInput.increment) {
    // console.log(i);
    // console.log(i + " / " + userInput.totalProblems + " = " + i/userInput.totalProblems);
    let percentage = i/userInput.totalProblems * 100;
    // console.log(userInput.roundTo);
    let roundedNumber = percentage.toFixed(userInput.roundTo);
    console.log(i%1);
    let value = i + " / " + userInput.totalProblems + " = " + roundedNumber + "%";
    
    // alternate colors
    if(i%1 === 0) {
      valuesArray.push(
        <li key={i}>{value}</li>
      )
    } else {
      valuesArray.push(
        <li key={i} className="colored-li">{value}</li>
      )
    }
  }
  console.log(valuesArray);

  return (
    <div className="display-container">
        <ul id="values-list">{valuesArray}</ul>
    </div>
  );
}


export default App;
