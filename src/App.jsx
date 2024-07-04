import './App.css'
import InputField from './components/InputField'
import InputPanel from './components/InputPanel'
import InputSection from './components/InputSection'
import ResultPanel from './components/ResultPanel'
import EducationFieldSet from './components/EducationFieldSet'
import ExperienceFieldSet from './components/ExperienceFieldSet'

function App() {
  return (
    <>
      <InputPanel>
        <InputSection title="General">
          <InputField name="name" label="Name" placeholder="John Doe"/>
          <InputField name="e-mail" label="E-mail" placeholder="john.doe@mail.com"/>
          <InputField name="phone" label="Phone number" placeholder="+44 113 496 0123"/>
        </InputSection>
        <InputSection title="Education">
          <EducationFieldSet/>
        </InputSection>
        <InputSection title="Experience">
          <ExperienceFieldSet/>
        </InputSection>
      </InputPanel>
      <ResultPanel/>
    </>
  )
}

export default App
