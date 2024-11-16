import React, { useContext } from 'react'
import { Name } from './CreatecontextAp'

export default function Home() {
    const {myname,lastname}=useContext(Name)
  return (
    <div>
      <h1>Home {myname} {lastname}</h1>
    </div>
  )
}
