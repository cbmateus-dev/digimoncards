
import './styles.css';

import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Search } from '../../components/Search';
import { Corpo } from '../../components/Corpo';





function Home() {

  const [digimon, setDigimon] = useState('')
  const [data, setData] = useState([])
  const [morepost, setMorePost] = useState('')
 

  
  



  useEffect(() => {

    axios.get(`https://digimoncard.io/api-public/search.php?n=${digimon}&type=digimon`)
      .then((Response) => {
        console.log(Response.data)
        setData(Response.data)
        setMorePost(12)
        
      })
  },
    [digimon]);

  return (

    <div className="App" >

      <h1>Buscar Digimon</h1>
      <div className='inputb'>
        <Search onblur={(e) => {
          setDigimon(e.target.value)
        }} />

      </div>

      <h1>Digimons</h1>

      <div className='container'>
        {data.slice(0, morepost).map((val, index) => {
          return (
            <div key={index}>
              <Corpo val={val} />
            </div>
          )
        })}

      </div>
      <div>
        <button onClick={() => {
          setMorePost(morepost+12)

        }}>Load More Post</button>
      </div>


    </div>
  );
}

export default Home;
