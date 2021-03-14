import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import './List.css'

const { Content } = Layout;


const MovieListEdit = () => {
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
    }, [daftarFilm, setDaftarFilm])
    
    

return(
  <>
  <Layout className="site-layout-background" >
      <Sidebar />
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
      <h1 style={{textAlign: 'center', margin: '1rem'}}>Movie List</h1>
      
  {
      daftarFilm !== null && (
        <>
       
   <table style={{margin: "auto", textAlign: "left"}}>
     <thead >
       <tr >
         <th className="thDaftar">No</th>
         <th className="thDaftar">Title</th>
         <th className="thDaftar">Description</th>
         <th className="thDaftar">Duration</th>
         <th className="thDaftar">Genre</th>
         <th className="thDaftar">Review</th>
         <th className="thDaftar">Rating</th>
         <th className="thDaftar">Year</th>
         <th className="thDaftar">Image URL</th>
       </tr>
     </thead>
     <tbody >
     
                       
         {
                   daftarFilm.map((val, index)=>{
                     return(                    
                       <tr key={val.id}>
                         <td className="tdDaftar">{index+1}</td>
                         <td className="tdDaftar">{val.title}</td>
                         <td className="tdDaftar" style={{maxWidth:"30ch", overflow: "hidden", textOverflow: "ellipsis",whiteSpace: 'nowrap' }}>{val.description}</td>
                         <td className="tdDaftar">{val.duration}</td>
                         <td className="tdDaftar">{val.genre}</td>
                         <td className="tdDaftar" style={{maxWidth:"30ch", overflow: "hidden", textOverflow: "ellipsis",whiteSpace: 'nowrap' }}>{val.review}</td>
                         <td className="tdDaftar">{val.rating}</td>
                         <td className="tdDaftar">{val.year}</td>
                         <td className="tdDaftar" style={{maxWidth:"10ch", overflow: "hidden", textOverflow: "ellipsis",whiteSpace: 'nowrap' }}>{val.image_url}</td>
                         <td className="tdDaftar"> 
                             <button  value={val.id}>Edit</button>
                             <button  value={val.id}>Delete</button>
                         </td>
                       </tr>
                     )
                   })
                 }
             </tbody>
           </table>
         
             </>
            
         
      )
  }
  </Content>   
  
 </Layout>
  </>
)
}
        

export default MovieListEdit
