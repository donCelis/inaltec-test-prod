import { useRef } from 'react'
import { toast } from 'react-toastify'
import { useAppContext } from '../context'
import { fetcher } from '../services'

const Form = () => {
  const { addNewItem } = useAppContext()
  const idRef = useRef()
  const descriptionRef = useRef()

  const handleRegister = async (e) => {
    e.preventDefault()

    const data = {
      id: Number(idRef.current.value.trim()),
      descripcion: String(descriptionRef.current.value.trim()),
      fechaRegistro: new Date()
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      body: JSON.stringify(data)
    }

    const subPathAdd = 'Adicionar'
    const response = await fetcher({
      url: subPathAdd,
      options
    })

    if (response?.operacionExitosa) {
      toast.info(`El elemento ${data.descripcion} fue agreado`)
      addNewItem(data)
      e.target.reset()
    } else {
      toast.error(response?.mensaje || 'No se pudo guardado el elemento')
    }
  }

  return (
    <form className='register comp bg-dark' onSubmit={handleRegister}>
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
