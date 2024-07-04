import './App.css'
import InputField from './components/InputField'
import InputPanel from './components/InputPanel'
import InputSection from './components/InputSection'
import ResultPanel from './components/ResultPanel'
import { useState } from 'react'
import FieldSetContainer from './components/FieldSetContainer'

function App() {
  const [educationId, setEducationId] = useState(0);
  const [experienceId, setExperienceId] = useState(0);

  const sampleEducation = {
    id: educationId,
    name: "Harvard", 
    title: "BSc Computer Science", 
    duration: "2020-2024"
  };
  const sampleExperience = {
    id: experienceId,
    name: "Apple", 
    title: "Web developer", 
    responsibilities: "Creating websites", 
    duration: "2022-2024"
  };

  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@mail.com");
  const [phone, setPhone] = useState("+44 113 496 0123");
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  function handleNameChange(e)
  {
    setName(e.target.value);
  }

  function handleEmailChange(e)
  {
    setEmail(e.target.value);
  }
  
  function handlePhoneChange(e)
  {
    setPhone(e.target.value);
  }

  function addEducation()
  {
    setEducationId(educationId + 1);
    setEducation([...education, sampleEducation]);
  }

  function addExperience()
  {
    setExperienceId(experienceId + 1);
    setExperience([...experience, sampleExperience]);
  }

  return (
    <>
      <InputPanel>
        <InputSection title="General">
          <InputField name="name" label="Name" placeholder="John Doe" value={name} onChange={handleNameChange}/>
          <InputField type="email" name="e-mail" label="E-mail" placeholder="john.doe@mail.com" value={email} onChange={handleEmailChange}/>
          <InputField type="tel" name="phone" label="Phone number" placeholder="+44 113 496 0123" value={phone} onChange={handlePhoneChange}/>
        </InputSection>
        <InputSection title="Education">
          <FieldSetContainer sets={education} setter={setEducation}/>
          <button onClick={addEducation}>+</button>
        </InputSection>
        <InputSection title="Experience">
          <FieldSetContainer sets={experience} setter={setExperience}/>
          <button onClick={addExperience}>+</button>
        </InputSection>
      </InputPanel>
      <ResultPanel name={name} email={email} phone={phone} education={education} experience={experience}/>
    </>
  )
}

export default App
