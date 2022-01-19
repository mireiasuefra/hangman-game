import { useState } from 'react';
import '../styles/App.scss';
import '../styles/main.scss';

function App() {
  const [errors, setErrors]= useState([]);
  const [lastLetter, setLastLetter] = useState('');
  const [userLetters, setUserLetters]= useState([]);
  const [dummy, setDummy] = useState(0);

 // const letters = [];
 const word = "katacroker"; 
//  const wrong = "fqhpx";

// const numberOfErrors = (ev) => {
//   ev.preventDefault();
// }

//  const numberOfErrors = (ev) => {
//   ev.preventDefault();
//   if (ev.keyCode === 8) {
//     setErrors(errors);
//   } else {
//     setErrors(errors + 1);
//   }
// };

  const handleUserInput= (ev) => {
    ev.preventDefault();
    const lastLetterValue = ev.target.value;
    if (lastLetterValue.match('^[a-zA-ZñÑ]?$')) {
      setLastLetter(lastLetterValue);
      if(lastLetterValue !== '') {
        if (word.includes(lastLetterValue)) {
        setUserLetters([...userLetters, lastLetterValue]);
      } else {
        setErrors([...errors, lastLetterValue]);
      }
    }
    setLastLetter(lastLetterValue);
  }
  };

  const renderSolutionLetters = () => {
    const wordLetter = word.split('');
    return wordLetter.map((letter, index) => {
      if (userLetters.includes(letter)) {
        return (<li className="letter" key={index}>{letter}</li>);
      } else {
        return (<li className="letter" key={index}></li>)
      }
    });
  };

  const renderErrorLetters = () => {
    return errors
    // .filter((error) => error.length > );
    .map((letter, index) => {
      return (<li className="letter" key={index}>{letter}</li>);
    });
  };

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              {renderSolutionLetters()}
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              {renderErrorLetters()}
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
              // onKeyUp= {numberOfErrors}
              onChange={handleUserInput}
              value={lastLetter}
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
            />
          </form>
        </section>
        <section className={`dummy error-${errors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  );
}

export default App;
