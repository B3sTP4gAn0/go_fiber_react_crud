import React from "react";

function App(){
  return(
    <div>
      <h1>Hello word/</h1>
      <button onClick={async () => {
        //http://localhost:3000/ agregado como proxy en package.json
        //Ahora se pueden colocar solo los endpoint
        const response = await fetch('/users')
        const data = await response.json()
        console.log(data)
      }}>Obtener</button>
    </div>
  )
}

export default App