import { useAppContext } from '../../context'

const Toggle = ({ children }) => {
  const { isView } = useAppContext()
  return isView && children
}

export default Toggle
