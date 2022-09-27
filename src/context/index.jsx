import { createContext, useState, useContext } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isView, setIsView] = useState(false)
  const [allItems, setAllItems] = useState([])
  const [editItem, setEditItem] = useState({})
  const [isEdit, setIsEdit] = useState(false)

  const handleToggle = (e) => {
    const validateEdit = isEdit && e.target.textContent
    setIsView(true)
    setIsEdit(validateEdit && false)
  }

  const saveAllItems = (elements) => {
    setAllItems(elements)
  }

  const addNewItem = (newItem) => {
    setAllItems([...allItems, newItem])
  }

  const deleteItem = (id) => {
    setAllItems([...allItems].filter((item) => item.id !== id))
  }

  const handleEditItem = (id) => {
    setEditItem([...allItems].find((item) => item.id === id))
    setIsEdit(true)
  }

  const handleUpdateItem = (str) => {
    setAllItems(
      [...allItems].map((item) =>
        item.id === editItem?.id
          ? { ...item, descripcion: str }
          : item
      )
    )
    setIsEdit(false)
  }

  const defaultValues = {
    /* airplanes */
    allItems,
    saveAllItems,
    addNewItem,
    deleteItem,
    editItem,
    handleEditItem,
    isEdit,
    setIsEdit,
    handleUpdateItem,
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
