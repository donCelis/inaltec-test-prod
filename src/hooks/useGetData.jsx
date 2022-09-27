import { useEffect, useState } from 'react'
import { useAppContext } from '../context'
import { fetcher } from '../services'

const useGetData = () => {
  const { saveAllItems } = useAppContext()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const getList = async () => {
    try {
      const subPathGet = 'Lista'
      const response = await fetcher({ url: subPathGet })
      saveAllItems(response)
    } catch (error) {
      setError(error.toString())
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => { getList() }, [])

  return { isLoading, error }
}

export default useGetData
