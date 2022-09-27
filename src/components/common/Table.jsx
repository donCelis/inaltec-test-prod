import { useEffect } from 'react'
import { toast } from 'react-toastify'
// services
import { fetcher } from '../../services'
import { converDate } from '../../utils'
// context
import { useAppContext } from '../../context'
// hooks
import useGetData from '../../hooks/useGetData'
// components
import Loading from './Loading'

const Table = () => {
  const { deleteItem, allItems } = useAppContext()

  const { isLoading, error } = useGetData()

  useEffect(() => {
    error && toast.error(error)
  }, [error])

  const handleDelete = async (id) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    }

    const subPathDel = 'Retirar'
    const response = await fetcher({
      url: subPathDel,
      options
    })

    if (response?.operacionExitosa) {
      deleteItem(id)
      toast.info('Elemento borrado')
    } else {
      toast.error('Error')
    }
  }

  const handleUpdate = () => {
    console.log('update')
  }

  if (isLoading) return <Loading />

  return (
    <table>
      <thead>
        <tr>
          <th />
          <th>Id</th>
          <th>Descripción</th>
          <th>Fecha de registro</th>
        </tr>
      </thead>
      <tbody>
        {allItems.length === 0 && (
          <tr>
            <td colSpan={4}>Sin elementos</td>
          </tr>
        )}
        {allItems.map(({ id, descripcion, fechaRegistro }) => (
          <tr key={id} onDoubleClick={handleUpdate}>
            <th>
              <button className='btn-minus' onClick={() => handleDelete(id)}>
                -
              </button>
            </th>
            <td>{id}</td>
            <td>{descripcion}</td>
            <td>{converDate(fechaRegistro)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
