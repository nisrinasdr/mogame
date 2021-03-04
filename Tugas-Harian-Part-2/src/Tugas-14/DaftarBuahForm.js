import React, {useContext, useEffect} from "react"
import {DaftarBuahContext} from "./DaftarBuahContext"
import axios from "axios"
import "../Tugas-13/DaftarHargaBuah.css"

const DaftarBuahForm = () => {
    const [daftarBuah, setDaftarBuah, input, setInput, currentId, setCurrentId] = useContext(DaftarBuahContext)

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

  const handleChange = (event) => {
    let inputValue = {...input}
    inputValue[event.target.name] = event.target.value
    setInput(inputValue)
    console.log(input)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //Update data baru
    if(currentId === null) {
      axios.post(`http://backendexample.sanbercloud.com/api/fruits`, 
      {name: input.name, price: input.price, weight: input.weight})
      .then(res => {
          let data = res.data
          setDaftarBuah([...daftarBuah, {
            id: data.id,
            name: data.name,
            price: data.price,
            weight: data.weight
          }])
      })
    } else {
      // Untuk edit/update data yang sudah ada
      axios.put(`http://backendexample.sanbercloud.com/api/fruits/${currentId}`,
      {name: input.name, price: input.price, weight: input.weight})
      .then(res => {
        let singleData = daftarBuah.find(el => el.id === currentId);
        singleData.name = input.name;
        singleData.price = input.price;
        singleData.weight = input.weight;
        setDaftarBuah([...daftarBuah])
      })
    }
    setInput({
      name: "",
      price: "",
      weight: ""
    })
    setCurrentId(null)
  }

  return(
    <>
    
          <>
          {/* Form */}
    <h1>Form Daftar Harga Buah</h1>
    <form onSubmit={handleSubmit}>
        <table>
            <tbody>
                <tr>
                    <td><label htmlFor="name">Nama:</label></td>
                    <td><input type="text" name="name"  value={input.name} onChange={handleChange}/></td>
                </tr>
                
                <tr>
                    <td><label htmlFor="price">Harga:</label></td>
                    <td><input type="number" name="price" value={input.price} onChange={handleChange}/></td>
                </tr>
                
                <tr>
                    <td><label htmlFor="weight">Berat (dalam gram):</label></td>
                    <td><input type="number" name="weight" value={input.weight} onChange={handleChange}/></td>
                </tr>

                <tr>
                    <td></td>
                    <td id="tdSubmit"><input type="submit" value="Submit" /></td>
                </tr>
                </tbody>
        </table>
        
    </form>  
    
          </>
      
    
        </>
      )
}


export default DaftarBuahForm