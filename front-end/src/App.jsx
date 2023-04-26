import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios";
import './App.css'
import { useEffect } from 'react';

function App() {
  const [data, setData] = useState();
  const  [teste, setTeste] = useState("");



async function getData(){
  const response = await axios .get("http://localhost:3000/users");
  setData(response.data);
}

useEffect (()=> {
  console.log(data)
  console.log(teste)
},[data])

  return (
<div>
  <button onClick={getData}>Clique aqui</button>
</div>
  )
}

export default App
