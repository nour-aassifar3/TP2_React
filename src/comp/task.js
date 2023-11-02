import React from 'react'
import './style.css'
export default function Task({txt,delf}) {
  return (
    <div>
      
      <input type="text"  readOnly value={txt}  />  <input type="button" onClick={delf} value="Supprimer" className='btn' />

    </div>
  )
}



