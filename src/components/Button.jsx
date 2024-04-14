import React from 'react'

export default function Button ({
  children,
  className = '',
  type = 'button',
  textColor = 'text-white',
  bgColor = 'bg-blue-600',
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
