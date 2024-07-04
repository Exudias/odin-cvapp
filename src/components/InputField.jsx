import '../styles/InputField.css'

function InputField({name, placeholder, label, type, value, onChange, id})
{
    const idStr = id ? id : "";

    return <div className="input-field">
        <label htmlFor={name + idStr}>{label}</label>
        <input id={name + idStr} placeholder={"e.g. " + placeholder} type={type} value={value} onChange={onChange}/>
    </div>
}

export default InputField;