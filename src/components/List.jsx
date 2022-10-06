import Table from './common/Table'

const List = ({ modify }) => {
  return (
    <section className='list comp bg-dark'>
      <div className='d-flex'>
        <h3>Lista Aeronaves</h3>
        <button className='btn-plus' onClick={modify}>
          +
        </button>
      </div>
      <Table />
    </section>
  )
}

export default List
