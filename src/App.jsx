import Header from './components/Header'
import Form from './components/Form'
import PacientList from './components/PacientList'

function App() {

  return (
    <div className='container mx-auto mt-4'>
      <Header />
      <div className='mt-8 md:flex'>
      <Form />
      <PacientList />
      </div>
    </div>
  )
}

export default App
