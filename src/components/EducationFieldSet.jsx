import InputField from "./InputField";
import '../styles/FieldSet.css';
import { useState } from "react";

function EducationFieldSet({onChange, values, del})
{
    const [name, setName] = useState(values.name);
    const [title, setTitle] = useState(values.title);
    const [duration, setDuration] = useState(values.duration);

    function handleNameChange(e)
    {
        setName(e.target.value);
        onChange({id: values.id, name: e.target.value, title, duration});
    }

    function handleTitleChange(e)
    {
        setTitle(e.target.value);
        onChange({id: values.id, name, title: e.target.value, duration});
    }
    
    function handleDurationChange(e)
    {
        setDuration(e.target.value);
        onChange({id: values.id, name, title, duration: e.target.value});
    }

    return <div className="field-set">
        <InputField name="school-name" label="School name" placeholder="Harvard University" value={name} onChange={handleNameChange} id={values.id}/>
        <InputField name="title-study" label="Title of study" placeholder="BSc Computer Science" value={title} onChange={handleTitleChange} id={values.id}/>
        <InputField name="duration-study" label="Duration of study" placeholder="2020-2024" value={duration} onChange={handleDurationChange} id={values.id}/>
        <button onClick={del}>X</button>
    </div>
}

export default EducationFieldSet;