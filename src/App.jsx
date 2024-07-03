import './App.css'
import InputPanel from './components/InputPanel'
import InputSection from './components/InputSection'
import ResultPanel from './components/ResultPanel'

function App() {
  return (
    <>
      <InputPanel>
        <InputSection title="Education">
          <input></input>
          <input></input>
          <input></input>
        </InputSection>
        <InputSection title="Education2"/>
        <InputSection title="Education3"/>
      </InputPanel>
      <ResultPanel/>
    </>
  )
}

export default App
