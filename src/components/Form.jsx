import { useRef } from 'react'
import { toast } from 'react-toastify'
import { useAppContext } from '../context'
import { fetcher } from '../services'

const Form = () => {
  const { addNewItem, editItem, isEdit, handleUpdateItem } = useAppContext()

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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }

    const subPathAdd = !isEdit ? 'Adicionar' : 'Modificar'

    const response = await fetcher({
      url: subPathAdd,
      options
    })

    if (response?.operacionExitosa) {
      toast.info(`El elemento fue ${!isEdit ? 'agregado' : 'actualizado'}`)
      !isEdit ? addNewItem(data) : handleUpdateItem(data.descripcion)
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
          disabled={isEdit}
          defaultValue={isEdit ? editItem?.id : ''}
        />
      </div>
      <div>
        <label htmlFor='description'>Descripción</label>
        <textarea
          ref={descriptionRef}
          name='description'
          id='description'
          required
          defaultValue={isEdit ? editItem?.descripcion : ''}
        />
      </div>
      <div className='move-right'>
        <button>{!isEdit ? 'Guardar' : 'Actualizar'}</button>
      </div>
    </form>
  )
}

export default Form
