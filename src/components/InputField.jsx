import '../styles/InputField.css'

function InputField({name, placeholder, label})
{
    return <div className="input-field">
        <label htmlFor={name}>{label}</label>
        <input id={name} placeholder={"e.g." + placeholder}/>
    </div>
}

export default InputField;