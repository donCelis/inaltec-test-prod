import { useRef } from 'react'
import { fetcher } from '../services'

const Form = () => {
  const idRef = useRef()
  const descriptionRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      id: Number(idRef.current.value.trim()),
      descripcion: String(descriptionRef.current.value.trim())
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }

    const response = await fetcher({
      url: 'Adicionar',
      options
    })

    console.log(response)
  }

  return (
    <form className='register comp bg-dark' onSubmit={handleSubmit}>
      <h3>Registro Aeronave</h3>
      <div>
        <label htmlFor='idValue'>Id</label>
        <input
          ref={idRef}
          type='number'
          min={0}
          placeholder=''
          id='idValue'
          required
        />
      </div>
      <div>
        <label htmlFor='description'>Descripción</label>
        <textarea
          ref={descriptionRef}
          name='description'
          id='description'
          required
        />
      </div>
      <div className='move-right'>
        <button>Guardar</button>
      </div>
    </form>
  )
}

export default Form
