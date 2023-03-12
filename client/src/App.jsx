import React from "react";

function App(){
  return(
    <div>
      <h1>Hello word/</h1>
      <button onClick={async () => {
        const response = await fetch('http://localhost:3000/users')
        const data = await response.json()
        console.log(data)
      }}>Obtener</button>
    </div>
  )
}

export default App