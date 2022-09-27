import { createContext, useState, useContext } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [allItems, setAllItems] = useState([])
  const [isView, setIsView] = useState(false)

  const saveAllItems = (elements) => {
    setAllItems(elements)
  }

  const addNewItem = (newItem) => {
    setAllItems([...allItems, newItem])
  }

  const deleteItem = (id) => {
    setAllItems(allItems.filter((item) => item.id !== id))
  }

  const handleToggle = () => setIsView(true)

  const defaultValues = {
    /* airplanes */
    allItems,
    saveAllItems,
    addNewItem,
    deleteItem,
    /* toggle view */
    isView,
    handleToggle
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
