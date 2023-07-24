import React, { useEffect, useState } from 'react';
import getData from './services/sw-api.js';
import StarShip from './StarShip.jsx';
const App = () => {
  const [name, setName] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setName(data.results)
        setIsLoading(true)
      } catch (error) {
        console.error('Something went wrong', error);
      }
    };

    fetchData();
  }, []);

  if(!isLoading) return <p>Loading... </p>
  
  
  return (
    <>
      <p style={{background: 'black', color:'whitesmoke'}}>STAR WARS STARSHIPS</p>
    {name.map((item, index) => {
      return (
        <div key={index}>
          <StarShip name={item.name} />
        </div>
      )
    })}
    </>
    
  );
}

export default App;

