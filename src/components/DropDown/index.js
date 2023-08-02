import "./DropDown.css"

const DropDown = ({onChanged, label, required, value, items}) => {
    const onChange = (event) => {
        if (onChanged) {
            onChanged(event.target.value);
        }
    }

    return (
        <div className="dropdown">
            <label>{label}</label>
            <select required={required} value={value} onChange={onChange}>
                <option value=""></option>
                {items.map(
                    (item) => <option key={item.value} value={item.value}> {item.name} </option>
                )}
            </select>
        </div>

    );
};

export default DropDown;