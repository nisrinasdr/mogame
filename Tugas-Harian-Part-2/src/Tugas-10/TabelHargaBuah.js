import React from "react";

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]

class TabelHargaBuah extends React.Component {
    render() {
        return (
            <>
            <h1 style={{fontSize:"2em", textAlign:"center"}}>Tabel Harga Buah</h1>
            <table style={{border:"1px solid black", margin:"auto"}}>
            <tr style={{backgroundColor:"#AAA", fontWeight:"bold", textAlign:"center"}}>
                <td style={{width:"300px", padding:"0px"}}>Nama</td>
                <td style={{width:"150px", padding:"0px"}}>Harga</td>
                <td style={{width:"150px", padding:"0px"}}>Berat</td>
            </tr>
            {dataHargaBuah.map((el,index) =>{
                return (
                    <>
                        <tr style={{backgroundColor:"#FF7F50"}}>
                            <td style={{padding:"0px"}}>{el.nama}</td>
                            <td style={{padding:"0px"}}>{el.harga}</td>
                            <td style={{padding:"0px"}}>{el.berat/1000} kg</td>
                        </tr>
                    </>
                )
            })}
            </table>
            </>
        )
    }
}

export default TabelHargaBuah;