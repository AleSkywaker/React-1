import Paciente from './Paciente';

Paciente

const PacientList = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5 mx-2'>
      <h2 className='font-black text-3xl text-center'>Listado pacientes</h2>
      <p className='text-center text-lg mt-3 mb-5'>
        Administra tus {''}
        <span className='text-indigo-600 font-bold'>Pacientes y citas</span>
      </p>
      <div className='h-screen md:overflow-y-scroll'>
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
      </div>
    </div>
  );
}

export default PacientList