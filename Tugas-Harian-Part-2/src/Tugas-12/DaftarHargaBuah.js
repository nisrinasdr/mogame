import React from "react"
import "../Tugas-12/DaftarHargaBuah.css"

class DaftarHargaBuah extends React.Component{

    constructor(props){
      super(props)
      this.state = {
       daftarBuah: [
        {nama: "Semangka", harga: 10000, berat: 1000},
        {nama: "Anggur", harga: 40000, berat: 500},
        {nama: "Strawberry", harga: 30000, berat: 400},
        {nama: "Jeruk", harga: 30000, berat: 1000},
        {nama: "Mangga", harga: 30000, berat: 500} ],
        
        daftarBuahBaru: {
            nama: "",
            harga: "",
            berat: ""
        },

        formIndex: -1
      };
      
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleEdit = this.handleEdit.bind(this)
    }
    
    handleChange(event){
        let input = {...this.state.daftarBuahBaru}
        input[event.target.name] = event.target.value
        this.setState({
            daftarBuahBaru: input
        })
    }
 
    handleSubmit(event){
      event.preventDefault();
      
      let daftarBuahBaru = this.state.daftarBuahBaru;
      if (daftarBuahBaru['nama'].replace(/\s/g, "") !== "" && 
          daftarBuahBaru['harga'].toString().replace(/\s/g, "") !== "" && 
          daftarBuahBaru['berat'].toString().replace(/\s/g, "") !== ""){
          let daftarBuahUpdate = this.state.daftarBuah
          let index = this.state.formIndex
 
          if (index === -1) {
              daftarBuahUpdate = [...daftarBuahUpdate, daftarBuahBaru]
          } else {
              daftarBuahUpdate[index] = daftarBuahBaru
          }
            
          this.setState(
              {daftarBuah: daftarBuahUpdate,
              daftarBuahBaru: {
                  nama: "",
                  harga: "",
                  berat: ""
                },

                formIndex: -1
              })
      } 
    }

    handleDelete(event){
      let index = event.target.value
      let daftarBuahUpdate = this.state.daftarBuah
      let editedDaftarBuah = daftarBuahUpdate[this.state.formIndex]
      daftarBuahUpdate.splice(index, 1)
      if (editedDaftarBuah !== undefined) {
        let newIndex = daftarBuahUpdate.findIndex((el) => el === editedDaftarBuah)
        this.setState({daftarBuah: daftarBuahUpdate, formIndex: newIndex})
      } else {
        this.setState({daftarBuah: daftarBuahUpdate})
      }
    }

    handleEdit(event){
      let index = event.target.value
		  let buahSelected = this.state.daftarBuah[index]
      console.log(buahSelected)
      this.setState({
        daftarBuahBaru: {
          nama: buahSelected.nama,
          harga: buahSelected.harga,
          berat: buahSelected.berat				
        },
        formIndex: index
      })
    }

    
  
    render(){
      return(
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
                  this.state.daftarBuah.map((val, index)=>{
                    return(                    
                      <tr key={index}>
                        <td className="tdDaftar">{index+1}</td>
                        <td className="tdDaftar">{val.nama}</td>
                        <td className="tdDaftar">{val.harga}</td>
                        <td className="tdDaftar">{val.berat/1000} kg</td>
                        <td className="tdDaftar"> 
                            <button onClick={this.handleEdit} value={index}>Edit</button>
                            <button onClick={this.handleDelete} value={index}>Delete</button>
                        </td>
                      </tr>
                    )
                  })
                }
            </tbody>
          </table>

        {/* Form */}
        <h1>Form Daftar Harga Buah</h1>
        <form onSubmit={this.handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td><label htmlFor="nama">Nama:</label></td>
                        <td><input type="text" name="nama"  value={this.state.daftarBuahBaru.nama} onChange={this.handleChange}/></td>
                    </tr>
                    
                    <tr>
                        <td><label htmlFor="harga">Harga:</label></td>
                        <td><input type="text" name="harga" value={this.state.daftarBuahBaru.harga} onChange={this.handleChange}/></td>
                    </tr>
                    
                    <tr>
                        <td><label htmlFor="berat">Berat (dalam gram):</label></td>
                        <td><input type="text" name="berat" value={this.state.daftarBuahBaru.berat} onChange={this.handleChange}/></td>
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
  }

export default DaftarHargaBuah