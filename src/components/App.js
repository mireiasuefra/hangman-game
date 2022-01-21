import { useState } from "react";
import "../styles/App.scss";
import "../styles/main.scss";
import Dummy from "./Dummy";
import Failed from "./Failed";
import Header from "./Header";
import Solution from "./Solution";
import UserLetter from "./UserLetter";

function App() {
  const [errors, setErrors] = useState([]);
  const [lastLetter, setLastLetter] = useState("");
  const [userLetters, setUserLetters] = useState([]);
  const [dummy, setDummy] = useState(0);
  const [smsError, setSmsError] = useState("");

  const word = "katacroker";

  const handleUserInput = (ev) => {
    ev.preventDefault();
    const lastLetterValue = ev.key;
    const sms = "Has perdido!";

    if (errors.length < 13) {
      if (lastLetterValue.match("^[a-zA-ZñÑ]?$")) {
        setLastLetter(lastLetterValue);
        if (lastLetterValue !== "") {
          if (word.includes(lastLetterValue)) {
            setUserLetters([...userLetters, lastLetterValue]);
          } else {
            setErrors([...errors, lastLetterValue]);
            setDummy(errors.length + 1);
          }
        }
        setLastLetter(lastLetterValue);
      }
    } else {
      setSmsError(sms);
    }
  };

  return (
    <div className="page">
      <Header />

      <main className="main">
        <section>
          <Solution userLetters={userLetters} word={word} />
          <Failed errors={errors} />
          <UserLetter
            handleUserInput={handleUserInput}
            lastLetter={lastLetter}
            smsError={smsError}
          />
        </section>
        <Dummy dummy={dummy}/>
      </main>
    </div>
  );
}

export default App;
