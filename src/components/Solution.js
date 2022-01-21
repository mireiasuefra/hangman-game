import '../styles/components/_app.scss';
import '../styles/components/_letters.scss';

function Solution(props) {
    
    const renderSolutionLetters = () => {
        const wordLetter = props.word.split("");
        return wordLetter.map((letter, index) => {
          if (props.userLetters.includes(letter)) {
            return (
              <li className="letter" key={index}>
                {letter}
              </li>
            );
          } else {
            return <li className="letter" key={index}></li>;
          }
        });
      };

    return (
        <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">{renderSolutionLetters()}</ul>
        </div>
    );
}

export default Solution;