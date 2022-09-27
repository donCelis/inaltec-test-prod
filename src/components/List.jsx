import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useAppContext } from '../context'
import useGetData from '../hooks/useGetData'
import Loading from './common/Loading'
import Table from './common/Table'

const List = () => {
  const { handleToggle } = useAppContext()

  const {
    data: items,
    isLoading,
    error
  } = useGetData()

  useEffect(() => {
    error && toast.error(error)
  }, [error])

  return (
    <section className='list comp bg-dark'>
      <div className='d-flex'>
        <h3>Lista Aeronaves</h3>
        <button className='btn-plus' onClick={handleToggle}>
          +
        </button>
      </div>
      {isLoading ? <Loading /> : <Table items={items} />}
    </section>
  )
}

export default List
