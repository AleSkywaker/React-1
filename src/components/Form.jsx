

const Form = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>
      <p className='text-center text-lg mt-3 mb-5'>
        Añade pacientes y {''}
        <span className='text-indigo-600 font-bold'>administralos</span>
      </p>

      <form className='bg-white shadow-md rounded-md py-10 px-5'>
        <div>
          <label htmlFor="mascota" className='block text-gray-700 uppercase'>Nombre mascota</label>
          <input
            id="mascota"
            type='text'
            placeholder='nombre mascota'
            className='border-2 border-gray-400 p-2 w-full rounded-md mt-2 placeholderbg-gray-800'
          />
        </div>
      </form>
    </div>
  );
}

export default Form;

