const Paciente = () => {
  return (
    <div className='bg-white shadow-md rounded-md py-10 px-5 mb-8'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        {' '}
        Nombre: {''}
        <span className='text-indigo-600 font-normal normal-case'>Paciente 1</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        {' '}
        Propietario: {''}
        <span className='text-indigo-600 font-normal normal-case'>Alex</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        {' '}
        Email: {''}
        <span className='text-indigo-600 font-normal normal-case'>alex@email.com</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        {' '}
        Fecha alta: {''}
        <span className='text-indigo-600 font-normal normal-case'>10 junio de 2022</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        {' '}
        Síntomas: {''}
        <span className='text-indigo-600 font-normal normal-case'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam illum, doloremque autem
          praesentium dolore quo.
        </span>
      </p>
    </div>
  );
}

export default Paciente