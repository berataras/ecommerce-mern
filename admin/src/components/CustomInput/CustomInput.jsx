import "./customInput.css"

function CustomInput(props) {
    const {label, type} = props;
    return (
        <div className="customInput">
            <label>{label}</label>
            <input {...props} type={type} />
        </div>
    );
}

CustomInput.defaultTypes = {
    type: 'text'
}

export default CustomInput;