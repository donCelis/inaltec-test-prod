import { useAppContext } from '../context'
import Table from './common/Table'

const List = () => {
  const { handleToggle } = useAppContext()

  return (
    <section className='list comp bg-dark'>
      <div className='d-flex'>
        <h3>Lista Aeronaves</h3>
        <button className='btn-plus' onClick={handleToggle}>
          +
        </button>
      </div>
      <Table />
    </section>
  )
}

export default List
