import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './List.css'



const MovieTop = (props) => {
    const [daftarFilm, setDaftarFilm] = useState(null)

    useEffect( () => {
        if(daftarFilm === null) {
            axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
            .then(res => {
                let data = res.data;
                setDaftarFilm(
                    data.map(el => { return {
                        description: el.description,
                        duration: el.duration,
                        genre: el.genre,
                        image_url: el.image_url,
                        rating: el.rating,
                        review: el.review,
                        title: el.title,
                        year: el.year }
                    }))
                })
        }
    }, [daftarFilm])
    
    const topMoviesDisplay = () => {
        const sortByRating = daftarFilm.sort((a, b) => b.rating - a.rating)
        let topMovies = []
        for(let i=0; i<4; i++) {
            topMovies.push(sortByRating[i])
        }
        return(
            <>
            {
                topMovies.map((el, idx) => { return (
                    <div className='card'>
                        <img src={el.image_url} alt={el.title} />
                        <h1 style={{fontSize:"1.1em"}}>{el.title}</h1>
                        <p style={{maxWidth:"100%", overflow: "hidden", textOverflow: "ellipsis",whiteSpace: 'nowrap' }}>{el.description}</p>
                        <p className="rating">{el.rating}</p>
                    </div>
                )
                })
            }
            </>
        )
    }
    
       
  

return(
  <>
  <h1>Top Movies</h1>
  {
      daftarFilm !== null && (
          <>
          <div className="container">
          {topMoviesDisplay()}
          </div>
          </>
      )
  }
  
  </>
)
}
        

export default MovieTop
