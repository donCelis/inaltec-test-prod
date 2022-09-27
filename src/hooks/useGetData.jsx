import { useEffect, useState } from 'react'
import { fetcher } from '../services'

const useGetData = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const getList = async () => {
    try {
      const response = await fetcher({ url: 'Lista' })
      setData(response)
    } catch (error) {
      setError(error.toString())
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => { getList() }, [])

  return { data, isLoading, error }
}

export default useGetData
