import React, {useState, useEffect} from "react"
import axios from "axios"

const BookListEditor = () => {
  
  const [daftarBuku, setDaftarBuku] = useState(null)

  const [input, setInput] = useState({
    id: "",
    title: "",
    description: "",
    review: "",
    release_year: 2020,
    totalPage: 0,
    price: 0,
    image_url: ""
  })

  const [currentId, setCurrentId] = useState(null)

  const [search, setSearch] = useState(null)

  useEffect(() => {
    if(daftarBuku === null || search === null) {
      axios.get(`http://backendexample.sanbercloud.com/api/books`)
      .then(res => {
        let data = res.data;
        setDaftarBuku(
          data.map(el => {return {
            id: el.id,
            title: el.title,
            description: el.description,
            review: el.review,
            release_year: el.release_year,
            totalPage: el.totalPage,
            price: el.price,
            image_url: el.image_url
          }})
        )
      }) } 
  });


  const handleChange = (event) => {
    let inputValue = {...input}
    inputValue[event.target.name] = event.target.value
    setInput(inputValue)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    //Update data baru
    if(currentId === null) {
      axios.post(`http://backendexample.sanbercloud.com/api/books`, 
      {id: input.id,
        title: input.title,
        description: input.description,
        review:input.review,
        release_year: input.release_year,
        totalPage: input.totalPage,
        price: input.price,
        image_url: input.image_url})
      .then(res => {
          let data = res.data
          setDaftarBuku([...daftarBuku, {
            id: data.id,
            title: data.title,
            description: data.description,
            review: data.review,
            release_year: data.release_year,
            totalPage: data.totalPage,
            price: data.price,
            image_url: data.image_url
          }])
      })
    } else {
      // Untuk edit/update data yang sudah ada
      axios.put(`http://backendexample.sanbercloud.com/api/books/${currentId}`,
      {id: input.id,
        title: input.title,
        description: input.description,
        review:input.review,
        release_year: input.release_year,
        totalPage: input.totalPage,
        price: input.price,
        image_url: input.image_url})
      .then(res => {
        let singleData = daftarBuku.find(el => el.id === currentId);
        singleData.title = input.title;
        singleData.description = input.description;
        singleData.review = input.review;
        singleData.release_year = input.release_year;
        singleData.price = input.price;
        singleData.image_url = input.image_url;
        setDaftarBuku([...daftarBuku])
      })
    }
    setInput({
        title: "",
        description: "",
        review: "",
        release_year: 2020,
        totalPage: 0,
        price: 0,
        image_url: ""
    })
    setCurrentId(null)
  }
  

  const handleEdit = (event) => {
    let idBuah = event.target.value
    axios.get(`http://backendexample.sanbercloud.com/api/books/${idBuah}`)
      .then(res => {
        let data = res.data;
        setInput({
            id: data.id,
            title: data.title,
            description: data.description,
            review: data.review,
            release_year: data.release_year,
            totalPage: data.totalPage,
            price: data.price,
            image_url: data.image_url
        })
        setCurrentId(data.id)
      })
  }

  const handleDelete = (event) => {
    let idBuah = parseInt(event.target.value)
    axios.delete(`http://backendexample.sanbercloud.com/api/books/${idBuah}`)
      .then(() => {
        let daftarBukuBaru = daftarBuku.filter(el => {return el.id !== idBuah})
        setDaftarBuku([...daftarBukuBaru])
      })
  }
  
  const handleChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault();
    axios.get(`http://backendexample.sanbercloud.com/api/books`)
    .then(res => {
      let data = res.data;
      setDaftarBuku(
        data.filter(el => {
           return el.title.toLowerCase().includes(search.toLowerCase())
        }).map(el => {return {
          id: el.id,
          title: el.title,
          description: el.description,
          review: el.review,
          release_year: el.release_year,
          totalPage: el.totalPage,
          price: el.price,
          image_url: el.image_url
        }})
      )
    })
  }
 

  return(
    <>
    <div className="search">
        <input type="text" name="search" value={search} onChange={handleChangeSearch}/>
        <button onClick={handleSearch} value={search}>Search</button>
    </div>
    
    {
      daftarBuku !== null && (
        <>
      <h1>Daftar Buku</h1>
      <table style={{margin: "auto", textAlign: "left"}}>
        <thead >
          <tr >
            <th className="thDaftar">No</th>
            <th className="thDaftar" style={{width:"200px"}}>Title</th>
            <th className="thDaftar">Description</th>
            <th className="thDaftar">Review</th>
            <th className="thDaftar">Release Year</th>
            <th className="thDaftar">Total Page</th>
            <th className="thDaftar">Price</th>
            <th className="thDaftar">Action</th>
          </tr>
        </thead>
        <tbody >
            { 
              daftarBuku.map((val, index)=>{
                return(                    
                  <tr key={val.id}>
                    <td className="tdDaftar">{index+1}</td>
                    <td className="tdDaftar">{val.title}</td>
                    <td className="tdDaftar">{val.description}</td>
                    <td className="tdDaftar">{val.review}</td>
                    <td className="tdDaftar">{val.release_year}</td>
                    <td className="tdDaftar">{val.totalPage}</td>
                    <td className="tdDaftar">{val.price}</td>
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
    <h1>Books Form</h1>
    <form onSubmit={handleSubmit}>
        <table>
            <tbody>
                <tr>
                    <td><label htmlFor="title">Title:</label></td>
                    <td><input type="text" name="title"  value={input.title} onChange={handleChange}/></td>
                </tr>
                
                <tr>
                    <td><label htmlFor="description">Description:</label></td>
                    <td><textarea name="description" value={input.description} onChange={handleChange}/></td>
                </tr>
                
                <tr>
                    <td><label htmlFor="review">Review:</label></td>
                    <td><textarea name="review" value={input.review} onChange={handleChange}/></td>
                </tr>

                <tr>
                    <td><label htmlFor="release_year">Release Year:</label></td>
                    <td><input type="number" name="release_year" min="1985" value={input.release_year} onChange={handleChange}/></td>
                </tr>
                
                <tr>
                    <td><label htmlFor="totalPage">Total Page:</label></td>
                    <td><input type="number" name="totalPage" value={input.totalPage} onChange={handleChange}/></td>
                </tr>
                
                <tr>
                    <td><label htmlFor="price">Price:</label></td>
                    <td><input type="number" name="price" value={input.price} onChange={handleChange}/></td>
                </tr>

                <tr>
                    <td><label htmlFor="image_url">Image Url:</label></td>
                    <td><input type="text" name="image_url" value={input.image_url} onChange={handleChange}/></td>
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


export default BookListEditor