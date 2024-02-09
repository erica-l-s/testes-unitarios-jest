import { useState } from "react"
function App() {
const [ list, setList] = useState(['Erica', 'Ellen', 'Bruna'])

function addToList(){
  setList(state => [...state, 'Novo'])
}
  return (
      <>
      <ul>{list.map((i)=><li key={i}>{i}</li>)}</ul>
     <button onClick={addToList}>Adicionar</button>
     </>
  )
}

export default App
