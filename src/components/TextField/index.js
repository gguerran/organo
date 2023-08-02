import "./TextField.css";

const TextField = (props) => {
    const onChange = (event) => {
        if (props.onChanged) {
          props.onChanged(event.target.value);
        }
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input
                value={props.value}
                onChange={onChange}
                placeholder={props.placeholder}
                required={props.required}
            />
        </div>
    );
};

export default TextField;