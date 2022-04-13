
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';


function App() {

  const [digimon, setDigimon] = useState('')
  const [data, setData] = useState([])


  useEffect(() => {

    axios.get(`https://digimoncard.io/api-public/search.php?n=${digimon}&type=digimon`)
      .then((Response) => {
        console.log(Response.data)
        setData(Response.data)

      })
  },
    [digimon]);

  return (

    <div className="App" >

      <h1>Buscar Digimon</h1>
      <div className='inputb'>
      
        <TextField id="filled-basic" label="Digite o Nome" variant="filled" 
          onBlur={(e) => {
            setDigimon(e.target.value)
          }}
        />
      </div>

      <h1>Digimons</h1>

      <div className='container'>

        {data.map((val, index) => {
          return (
            <div key={index}>
              <img className='img' src={val.image_url} onClick={()=> console.log(val)} alt='Digimon' />

            </div>

          )
        })}

      </div>

    </div>
  );
}

export default App;
