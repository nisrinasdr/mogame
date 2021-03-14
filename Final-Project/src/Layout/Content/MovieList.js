import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Layout } from 'antd';
import './List.css'

const { Content } = Layout;


const MovieList = () => {
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
    
    
       
  

return(
  <>
  <Layout className="site-layout-background" >
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
      <h1 style={{textAlign: 'center', margin: '1rem'}}>Movies</h1>
      
  {
      daftarFilm !== null && (
          <>
          <div className="container">
          {
                daftarFilm.map((el, idx) => { return (
                    <div className='card'>
                        <img src={el.image_url} alt={el.title} />
                        <div className='card-text'>
                        <h2>{el.title}</h2>
                        <p style={{maxWidth:"100ch", overflow: "hidden", textOverflow: "ellipsis",whiteSpace: 'nowrap' }}>{el.description}</p>
                        </div>
                        <p className="rating">{el.rating}&#9733;</p>
                    </div>
                )
                })
            }
          </div>
          
          </>
      )
  }
  </Content>   
  
 </Layout>
  </>
)
}
        

export default MovieList
