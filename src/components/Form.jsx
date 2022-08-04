import { useState } from 'react';


const Form = ({pacientes, setPacientes}) => {
  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if([mascota, propietario, email, fecha, sintomas].includes('')){
      setError(true);
      return
    }
    setError(false);
    const datosPaciente = {
      mascota,
      propietario,
      email,
      fecha,
      sintomas
    }
    setPacientes([...pacientes, datosPaciente])

    setMascota('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-2'>
      <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>
      <p className='text-center text-lg mt-3 mb-5'>
        Añade pacientes y {''}
        <span className='text-indigo-600 font-bold'>administralos</span>
      </p>

      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-md py-10 px-5 mb-8'>
       { error && (
        <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md"><p>Rellene todos los campos</p></div>
       )}
        <div>
          <label htmlFor='mascota' className='block text-gray-700 uppercase'>
            Nombre mascota
          </label>
          <input
            id='mascota'
            type='text'
            placeholder='nombre mascota'
            className='border-2 border-gray-400 p-2 w-full rounded-md mt-2 placeholderbg-gray-800'
            value={mascota}
            onChange={(e) => setMascota(e.target.value)}
          />
        </div>
        <div className='mt-5'>
          <label htmlFor='propietario' className='block text-gray-700 uppercase'>
            Nombre propietario
          </label>
          <input
            id='propietario'
            type='text'
            placeholder='nombre propietario'
            className='border-2 border-gray-400 p-2 w-full rounded-md mt-2 placeholderbg-gray-800'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className='mt-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase'>
            Email
          </label>
          <input
            id='email'
            type='email'
            placeholder='email contacto propietario'
            className='border-2 border-gray-400 p-2 w-full rounded-md mt-2 placeholderbg-gray-800'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mt-5'>
          <label htmlFor='alta' className='block text-gray-700 uppercase'>
            Fecha de alta
          </label>
          <input
            id='alta'
            type='date'
            className='border-2 border-gray-400 p-2 w-full rounded-md mt-2 placeholderbg-gray-800'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className='mt-5'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase'>
            Sintomas
          </label>
          <textarea
            className='border-2 border-gray-400 p-2 w-full rounded-md mt-2 placeholderbg-gray-800'
            id='sintomas'
            placeholder='describe los sintomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type='submit'
          className='bg-indigo-400 w-full p-3 text-white uppercase rounded-md mt-3 font-bold hover:bg-indigo-800 cursor-pointer transition-shadow'
          value='Añadir paciente'
        />
      </form>
    </div>
  );
}

export default Form;

