import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Layout } from 'antd';
import './List.css'

const { Content } = Layout;


const GameList = () => {
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

return(
  <>
   <Layout className="site-layout-background" >
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
  <h1>Top Movies</h1>
  {
      daftarGame !== null && (
          <>
          <div className="container">
          {
                daftarGame.map((el, idx) => { return (
                    <div className='card'>
                    <img src={el.image_url} alt={el.name} />
                    <div className='card-text'>
                    <h2>{el.name}</h2>
                    <p>{el.genre} </p>
                    <p style={{fontSize: '0.7rem'}}>{el.platform}</p>
                    </div>
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
        

export default GameList
