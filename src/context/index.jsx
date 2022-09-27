import { createContext, useState, useContext } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isView, setIsView] = useState(false)

  const defaultValues = {
    isView,
    setIsView
  }

  return (
    <AppContext.Provider value={defaultValues}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
