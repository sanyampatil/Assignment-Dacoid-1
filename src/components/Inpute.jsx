import React, { useId } from 'react'

const Input = React.forwardRef(function Input (
  { className = '', type = 'text', ...props },
  ref
) {
  const id = useId()
  return (
    <input
      type={type}
      className={` ${className}`}
      id={id}
      {...props}
      ref={ref}
    />
  )
})

export default Input
