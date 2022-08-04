import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import PacientList from './components/PacientList'

function App() {

  const [pacientes, setPacientes] = useState([])


  return (
    <div className='container mx-auto mt-4'>
      <Header />
      <div className='mt-8 md:flex'>
      <Form
        pacientes={pacientes}
        setPacientes={setPacientes}
      />
      <PacientList />
      </div>
    </div>
  )
}

export default App
