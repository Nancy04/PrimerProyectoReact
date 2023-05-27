//import logo from './logo.svg';
import './App.css';
import imagen1 from '../src/img/ricki.png';
import { useState } from 'react';

import Charaters from './Componentes/Charaters';

function App() {
 const [characters,setCharaters] = useState (null);
 
  const reqApi =  async()=>{

    const api = await fetch("https://rickandmortyapi.com/api/character");
//console.log(api);


const characterApi = await api.json ();
//console.log(characterApi);

//console.log(characters);
setCharaters(characterApi.results);
console.log(characters)
}
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty </h1>
        {characters ?(
        <Charaters characters={characters}/>
       ):(
        <>
<img src={imagen1} alt='Rick and Morty' className='img-home'></img>
      
      <button onClick={reqApi} className='btn-search'>
        Buscar Personajes
      </button>
      </>
       ) 
       } 
      </header>
    </div>
  );
      }
export default App;
