import "./customButton.css";

function CustomButton({text, style}) {
    return (
        <button style={style} type="submit" className="customButton">{text}</button>
    );
}

export default CustomButton;