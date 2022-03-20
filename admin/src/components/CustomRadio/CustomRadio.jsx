import "./customRadio.css";

function CustomRadio(props) {
    const {label, id, name} = props;
    return (
       <div className="customRadio">
           <input type="radio" name={name} id={id} value={id} />
           <label htmlFor={id}>{label}</label>
       </div>
    );
}

export default CustomRadio;