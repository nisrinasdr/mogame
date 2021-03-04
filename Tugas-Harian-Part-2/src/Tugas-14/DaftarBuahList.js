import React, {useContext, useEffect} from "react"
import axios from "axios"
import {DaftarBuahContext} from "./DaftarBuahContext"
import "../Tugas-13/DaftarHargaBuah.css"

const DaftarBuahList = () => {
  const [daftarBuah, setDaftarBuah, , setInput, , setCurrentId] = useContext(DaftarBuahContext)

  useEffect(() => {
    if(daftarBuah === null) {
      axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
      .then(res => {
        let data = res.data;
        setDaftarBuah(
          data.map(el => {return {
            id: el.id,
            name: el.name,
            price: el.price,
            weight: el.weight
          }})
        )
      })
    }
  });

  const handleEdit = (event) => {
    let idBuah = event.target.value
    axios.get(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
      .then(res => {
        let data = res.data;
        setInput({
          name: data.name,
          price: data.price,
          weight: data.weight
        })
        setCurrentId(data.id)
      })
      
  }

  const handleDelete = (event) => {
    let idBuah = parseInt(event.target.value)
    axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
      .then(() => {
        let daftarBuahBaru = daftarBuah.filter(el => {return el.id !== idBuah})
        setDaftarBuah([...daftarBuahBaru])
      })
  }

  return(
    <>
    {
      daftarBuah !== null && (
        <>
           <h1>Daftar Harga Buah</h1>
      <table style={{margin: "auto", textAlign: "left"}}>
        <thead >
          <tr >
            <th className="thDaftar">No</th>
            <th className="thDaftar" style={{width:"200px"}}>Nama</th>
            <th className="thDaftar">Harga</th>
            <th className="thDaftar">Berat</th>
            <th className="thDaftar">Aksi</th>
          </tr>
        </thead>
        <tbody >
            {
              daftarBuah.map((val, index)=>{
                return(                    
                  <tr key={val.id}>
                    <td className="tdDaftar">{index+1}</td>
                    <td className="tdDaftar">{val.name}</td>
                    <td className="tdDaftar">{val.price}</td>
                    <td className="tdDaftar">{val.weight/1000} kg</td>
                    <td className="tdDaftar"> 
                        <button onClick={handleEdit} value={val.id}>Edit</button>
                        <button onClick={handleDelete} value={val.id}>Delete</button>
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
   
    </>
  )
}


export default DaftarBuahList