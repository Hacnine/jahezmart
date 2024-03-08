"use client"
import React from 'react'

const ErrorBoundary = ({error, reset}) => {

  return (
    <div>
     {error.message} <button className=' bg-colorRed p-4 rounded-md' ocClick={reset}>Try again</button>
    </div>
  )
}

export default ErrorBoundary
