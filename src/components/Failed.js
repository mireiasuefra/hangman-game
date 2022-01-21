import '../styles/components/_app.scss';
import '../styles/components/_letters.scss';

function Failed(props) {
    
    const renderErrorLetters = () => {
        return props.errors.map((letter, index) => {
          return (
            <li className="letter" key={index}>
              {letter}
            </li>
          );
        });
      };

    return (
        <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">{renderErrorLetters()}</ul>
          </div>
    );
}

export default Failed;