import { getApiUrl } from '../config'

export const fetcher = async ({ url = '', options = {} }) => {
  const apiUrl = getApiUrl(url)
  const response = await fetch(apiUrl, options)
  return response.ok && response.json()
}
