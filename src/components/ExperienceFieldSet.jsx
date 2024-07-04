import InputField from "./InputField";
import '../styles/FieldSet.css';

function ExperienceFieldSet()
{
    return <div className="field-set">
        <InputField name="company-name" label="Company name" placeholder="Apple"/>
        <InputField name="title-position" label="Title of position" placeholder="Web developer"/>
        <InputField name="responsibilities" label="Responsibilities" placeholder="Creating websites"/>
        <InputField name="duration-position" label="Duration of experience" placeholder="2022-2024"/>
    </div>
}

export default ExperienceFieldSet;