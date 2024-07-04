import InputField from "./InputField";
import '../styles/FieldSet.css';
import { useState } from "react";

function ExperienceFieldSet({onChange, values, del})
{
    const [name, setName] = useState(values.name);
    const [title, setTitle] = useState(values.title);
    const [responsibilities, setResponsibilities] = useState(values.responsibilities);
    const [duration, setDuration] = useState(values.duration);

    function handleNameChange(e)
    {
        setName(e.target.value);
        onChange({id: values.id, name: e.target.value, title, responsibilities, duration});
    }

    function handleTitleChange(e)
    {
        setTitle(e.target.value);
        onChange({id: values.id, name, title: e.target.value, responsibilities, duration});
    }
    
    function handleResponsibilitiesChange(e)
    {
        setResponsibilities(e.target.value);
        onChange({id: values.id, name, title, responsibilities: e.target.value, duration});
    }

    function handleDurationChange(e)
    {
        setDuration(e.target.value);
        onChange({id: values.id, name, title, responsibilities, duration: e.target.value});
    }

    return <div className="field-set">
        <InputField name="company-name" label="Company name" placeholder="Apple" value={name} onChange={handleNameChange}/>
        <InputField name="title-position" label="Title of position" placeholder="Web developer" value={title} onChange={handleTitleChange}/>
        <InputField name="responsibilities" label="Responsibilities" placeholder="Creating websites" value={responsibilities} onChange={handleResponsibilitiesChange}/>
        <InputField name="duration-position" label="Duration of experience" placeholder="2022-2024" value={duration} onChange={handleDurationChange}/>
        <button onClick={del}>X</button>
    </div>
}

export default ExperienceFieldSet;