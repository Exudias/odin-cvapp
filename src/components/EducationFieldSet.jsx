import InputField from "./InputField";
import '../styles/FieldSet.css';

function EducationFieldSet()
{
    return <div className="field-set">
        <InputField name="school-name" label="School name" placeholder="Harvard University"/>
        <InputField name="title-study" label="Title of study" placeholder="BSc Computer Science"/>
        <InputField name="duration-study" label="Duration of study" placeholder="2020-2024"/>
    </div>
}

export default EducationFieldSet;