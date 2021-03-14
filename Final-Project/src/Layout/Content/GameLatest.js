import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './List.css'



const GameLatest = () => {
    const [daftarGame, setDaftarGame] = useState(null)

    useEffect( () => {
        if(daftarGame === null) {
            axios.get(`https://backendexample.sanbersy.com/api/data-game`)
            .then(res => {
                let data = res.data;
                setDaftarGame(
                    data.map(el => { return {
                        genre: el.genre,
                        image_url: el.image_url,
                        name: el.name,
                        platform: el.platform, 
                        created_at: el.created_at
                    }
                    }))
                })
        }
    }, [daftarGame])
    
    const latestGamesDisplay = () => {
        
        const sortByRating = daftarGame.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        let latestGames = []
        for(let i=0; i<4; i++) {
            latestGames.push(sortByRating[i])
        }
        return(
            <>
            {
                latestGames.map((el, idx) => { return (
                    <div className='card'>
                        <img src={el.image_url} alt={el.name} />
                        <h1  style={{fontSize:"1.1em"}}>{el.name}</h1>
                        <p>{el.genre}</p>
                        <p>{el.platform}</p>
                    </div>
                )
                })
            }
            </>
        )
    }
    
       
  

return(
  <>
  <h1>Latest Games</h1>
  {
      daftarGame !== null && (
          <>
          <div className="container">
          {latestGamesDisplay()}
          </div>
          </>
      )
  }
  
  </>
)
}
        

export default GameLatest
