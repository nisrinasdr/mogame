import React, {useState, useEffect} from "react"
import axios from "axios"
import "../Tugas-13/DaftarHargaBuah.css"

const DaftarHargaBuah = () => {
  const [daftarBuah, setDaftarBuah] = useState(null)

  const [input, setInput] = useState({
    id: "",
    name: "",
    price: "",
    weight: ""
  })

  const [currentId, setCurrentId] = useState(null)

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
  }, [daftarBuah]);

  const handleChange = (event) => {
    let inputValue = {...input}
    inputValue[event.target.name] = event.target.value
    setInput(inputValue)
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
      )
    }
   
    </>
  )
}


export default DaftarHargaBuah