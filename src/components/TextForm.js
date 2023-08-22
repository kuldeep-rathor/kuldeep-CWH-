import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    props.showAlert("The text is converted to upper case", "success");

    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("The text is converted to lower case", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("The Text is cleared", "danger");
  };
  const handleOnchange = (event) => {
    console.log("changed ");
    setText(event.target.value);
  };

  const speakHandler = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("He spoke", "warning");
  };

  const reverseText = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("the text is reversed", "success");
  };

  const handleCamelCaseOnClick = () => {
    let camelCaseText = text
      .split(" ")
      .map(function (word, index) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
    setText(camelCaseText);
  };
  const handleExtraSpaces = () => {
    let words = text.split(" ");
    let joinedWords = "";
    words.forEach((elem) => {
      if (elem[0] != undefined) {
        joinedWords += elem + " ";
      }
    });
    setText(joinedWords);
  };
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  let countChar = 0,
    countCons = 0;

  // Function to count Vowels:

  const handleVoClick = () => {
    for (count = 0; count <= text.length; count++) {
      if (text.charAt(count).match(`[aeiouAEIOU]`)) {
        countChar++;
        setCount(countChar);
      }
    }
  };

  // Function to count Consonants:
  const handleCoClick = () => {
    for (count1 = 0; count1 <= text.length; count1++) {
      if (
        text
          .charAt(count1)
          .match(`[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]`)
      ) {
        countCons++;
        setCount1(countCons);
      }
    }
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("The text is copied", "success");
  };

  const [text, setText] = useState(" ");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleLoClick}>
          Lowercase
        </button>
        <button className="btn btn-success mx-2" onClick={reverseText}>
          Reverse Text
        </button>
        <button className="btn btn-info mx-2" onClick={handleCamelCaseOnClick}>
          CamelCase
        </button>
        <button className="btn btn-light mx-2" onClick={handleExtraSpaces}>
          Extra-Space
        </button>

        <button
          type="submit"
          onClick={speakHandler}
          className="btn btn-warning mx-2 my-2"
        >
          Speak
        </button>
        <button className="btn btn-danger mx-1" onClick={handleVoClick}>
          Vowels
        </button>

        <button className="btn btn-primary mx-1" onClick={handleCoClick}>
          Consonants
        </button>
        <button
          type="submit"
          onClick={handleCopy}
          className="btn btn-warning mx-2 my-2"
        >
          Copy
        </button>

        <button className="btn btn-dark mx-2" onClick={handleClearClick}>
          Clear
        </button>
      </div>

      <div className="container my-2">
        <h2>Your Text Summary </h2>
        <p style={{ color: "greens" }}>
          {text.trim() === "" ? 0 : text.match(/\S+/g).length} words and{" "}
          {text.replace(/\s+/g, "").length} characters
        </p>
        <p style={{ color: "purple" }}>
          <strong>
            {0.008 * text.split(" ").length}mins , Time taken to read.
          </strong>
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview here "}</p>
        <h2>You have entered:</h2>
        <p>{count} No. of Vowels</p>
        <p>{count1} No. of Consonants</p>
      </div>
    </>
  );
}
