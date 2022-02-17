import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/App.scss";
import "../styles/main.scss";
import Dummy from "./Dummy";
import Options from "./Options";
import Failed from "./Failed";
import Footer from "./Footer";
import Header from "./Header";
import Instructions from "./Instructions";
import Solution from "./Solution";
import UserLetter from "./UserLetter";
import ButtonReset from "./ButtonReset";
import callToApi from "../services/api";

function App() {
  const [errors, setErrors] = useState([]);
  const [lastLetter, setLastLetter] = useState("");
  const [userLetters, setUserLetters] = useState([]);
  const [dummy, setDummy] = useState(0);
  const [message, setMessage] = useState("");
  const [word, setWord] = useState("");

  useEffect(() => {
    callToApi().then((response) => {
      setWord(response);
    });
  }, []);

  const handleWord = (value) => {
    setWord(value);
    setUserLetters([]);
    setLastLetter("");
    setErrors([]);
  };

  const handleUserInput = (ev) => {
    ev.preventDefault();
    const lastLetterValue = ev.key.toLowerCase();
    const message = "Has perdido!";
    const message2 = "HAS GANADO!!!!!!!!!!";

    if (errors.length < 13) {
      if (lastLetterValue.match("^[a-zA-ZñÑ]?$")) {
        setLastLetter(lastLetterValue);

        if (lastLetterValue !== "") {
          if (word.includes(lastLetterValue)) {
            const letters = [...userLetters, lastLetterValue];
            setUserLetters(letters);

            let win = true;
            for (let index = 0; index < word.length; index++) {
              const letter = word[index];
              win = win && letters.includes(letter);
            }

            if (win) {
              setMessage(message2);
            }
          } else {
            setErrors([...errors, lastLetterValue]);
            setDummy(errors.length + 1);
          }
        }
        setLastLetter(lastLetterValue);
      }
    } else {
      setMessage(message);
    }
  };

  return (
    <div className="page">
      <Header />

      <main className="main">
        <Switch>
          <Route path="/instructions">
            <Instructions />
          </Route>
          <Route path="/options">
            <Options handleWord={handleWord} />
          </Route>
          <Route exact path="/">
            <section className="sectionCenter">
              <Solution userLetters={userLetters} word={word} />
              <Failed errors={errors} />
              <UserLetter
                handleUserInput={handleUserInput}
                lastLetter={lastLetter}
                message={message}
              />

              <ButtonReset
                setUserLetters={setUserLetters}
                setLastLetter={setLastLetter}
                setErrors={setErrors}
                setMessage= {setMessage}
              />
            </section>
          </Route>
          <Route>
            <h2>Error 404</h2>
          </Route>
        </Switch>
        <Dummy dummy={dummy} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
