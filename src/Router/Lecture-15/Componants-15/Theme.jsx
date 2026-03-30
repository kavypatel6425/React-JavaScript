import React, { useState } from 'react'
import { createContext } from 'react'
import ThemeChild from './ThemeChild';

export const ThemeContext = createContext();
function Theme() {
  const [theme,setTheme] = useState(true)

  const toggleTheme = ()=>{
    setTheme(theme ? "dark" : "light")
  }
  return (
    <>
      <ThemeContext.Provider>
        <ThemeChild />
      </ThemeContext.Provider>
    </>
  )
}

export default Theme