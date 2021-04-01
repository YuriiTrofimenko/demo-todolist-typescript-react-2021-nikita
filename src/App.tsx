import React, { useState, useEffect } from 'react'

/* Functional Root Component */
function App () {
  // State
  const [date, setDate] = useState(<div>{new Date().toLocaleTimeString('ru')}</div>)
  // Lifecycle Handlers
  useEffect(() => {
    console.log('useEffect')
    setInterval(() => {
      setDate(<div>{new Date().toLocaleTimeString('ru')}</div>)
      console.log(new Date().toLocaleTimeString('ru'))
    }, 1000)
  }, [])
  // Temporary constants, variables and logic
  // ...
  // View
  return (
    <>
      <h1>Hello React!</h1>
      {date}
    </>
  )
}

export default App
