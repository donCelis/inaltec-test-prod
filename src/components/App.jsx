import { useRef } from 'react'
// styles
import '../styles/App.css'
// components
import Form from './Form'
import List from './List'
import Toggle from './common/Toggle'

function App () {
  const toggleRef = useRef()

  const changeView = () => {
    toggleRef.current.handleToggle()
  }

  return (
    <div className='app'>
      <List modify={changeView} />
      <Toggle ref={toggleRef}>
        <Form />
      </Toggle>
    </div>
  )
}

export default App
