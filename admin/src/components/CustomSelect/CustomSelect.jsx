import "./customSelect.css";

function CustomSelect(props) {
    const {label, options, name} = props;
    return (
        <div className="customSelect">
            <label>{label}</label>
            <select name={name} id={name}>
                {options.map(item => (
                    <option value={item.value}>{item.text}</option>
                ))}
            </select>
        </div>
    );
}

export default CustomSelect;