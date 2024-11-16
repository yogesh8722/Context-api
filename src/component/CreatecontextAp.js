import React, { createContext } from 'react'

export const Name=createContext();

 function CreatecontextAp({children}) {
    const myname="Yogesh";
    const lastname="Dhanera"
  return (
    <Name.Provider value={{myname,lastname}}>{children}</Name.Provider>
  )
}
export default CreatecontextAp;