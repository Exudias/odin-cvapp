import '../styles/InputField.css'

function InputField({name, placeholder, label, type, value, onChange})
{
    return <div className="input-field">
        <label htmlFor={name}>{label}</label>
        <input id={name} placeholder={"e.g. " + placeholder} type={type} value={value} onChange={onChange}/>
    </div>
}

export default InputField;