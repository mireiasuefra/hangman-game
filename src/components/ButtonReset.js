import "../styles/components/_app.scss";

function ButtonReset(props) {
  const resetBtn = () => {
    props.setUserLetters([]);
    props.setLastLetter("");
    props.setErrors([]);
    props.setMessage("");
  };

  return (
    <button className="reset__button" onClick={resetBtn}>
      Reset
    </button>
  );
}

export default ButtonReset;
