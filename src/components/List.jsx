import { useAppContext } from '../context'
import useGetData from '../hooks/useGetData'
import Loading from './common/Loading'
import Table from './common/Table'

const List = () => {
  const { setIsView } = useAppContext()

  const {
    data: items,
    isLoading,
    error
  } = useGetData()

  return (
    <section className='list comp bg-dark'>
      <div className='d-flex'>
        <h3>Lista Aeronaves</h3>
        <button className='btn-plus' onClick={() => setIsView(true)}>
          +
        </button>
      </div>
      {isLoading ? <Loading /> : <Table items={items} />}
      {error && <p className='text-center'>{error}</p>}
    </section>
  )
}

export default List
