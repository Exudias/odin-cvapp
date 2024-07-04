import EducationFieldSet from "./EducationFieldSet"
import ExperienceFieldSet from "./ExperienceFieldSet"

function FieldSetContainer({sets, setter})
{
    if (sets.length === 0) return null;
    const isExperience = sets[0].responsibilities;

    function handleChange(index, newVal)
    {
        let newSets = [...sets];
        newSets[index] = newVal;
        setter(newSets);
    }

    function handleDelete(index)
    {
        let newSets = [...sets];
        newSets.splice(index, 1);
        setter(newSets);
    }

    return <>
        {sets.map((e, index) => 
            (isExperience ? 
            <ExperienceFieldSet key={e.id} values={e} onChange={(e) => handleChange(index, e)} del={() => handleDelete(index)}/>
            :
            <EducationFieldSet key={e.id} values={e} onChange={(e) => handleChange(index, e)} del={() => handleDelete(index)}/>)
        )}
    </>
}

export default FieldSetContainer