import { useState } from 'react'

function Locally({ name }) {
     const [editName,setEditName] = useState(name)
  return (
    <div>
        <h2>{editName}</h2>

        <input 
        type="text"
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
         />
    </div>
  )
}

export default Locally