import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries"
};

var emojiArray = Object.keys(emojiDictionary);

export default function App() {
  var [userInput, setMeaning] = useState("");
  function inputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setMeaning(meaning);

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function clickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Fruits</h1>
      <h1>Emoji</h1>
      <h1>Interpreter</h1>
      <input
        className="input"
        placeholder="Put Your Emoji Here"
        onChange={inputHandler}
      ></input>
      <div className="output" placeholder="output will come here">
        {userInput}
      </div>
      <h3>Click Below Emojis to know their meaning</h3>
      <div className="emoji">
        {emojiArray.map((emoji) => {
          return (
            <span key={emoji} onClick={() => clickHandler(emoji)}>
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
