// styles
import '../styles/App.css'
// components
import Form from './Form'
import List from './List'
import Toggle from './common/Toggle'

function App () {
  return (
    <div className='app'>
      <List />
      <Toggle>
        <Form />
      </Toggle>
    </div>
  )
}

export default App
