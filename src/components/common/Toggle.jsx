import { forwardRef, useImperativeHandle, useState } from 'react'

const Toggle = forwardRef(({ children }, ref) => {
  const [isView, setIsView] = useState(false)

  const handleToggle = () => {
    setIsView(!isView)
  }

  useImperativeHandle(ref, () => { return { handleToggle } })

  return isView && children
})

export default Toggle
