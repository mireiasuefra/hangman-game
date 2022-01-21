import '../styles/components/_app.scss';
import '../styles/components/_form.scss';

function UserLetter(props) {
    return (
        <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              onKeyUp={props.handleUserInput}
              value={props.lastLetter}
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
            />
             <p>{props.smsError}</p>
          </form>
    );
}

export default UserLetter;