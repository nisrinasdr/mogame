import React from 'react';
import '../App.css';

class FormBuah extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="form">
                <h1 style={{fontSize: "2em"}}>Form Pembelian Buah</h1>
                    <div className="table">
                    <table>
                    <tr>
                    <td>
                        <label style={{width:"200px"}} htmlFor="nama"><strong>Nama Pelanggan</strong></label>
                    </td>
                    <td>
                        <input type="text" id="nama" name="nama"></input>
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <span style={{width:"200px"}}><strong>Daftar Item</strong></span>
                    </td>
                    <td>
                        <input style={{width:"auto"}} type="checkbox" id="semangka" value="semangka" name="item"></input>
                        <label style={{width:"auto"}} htmlFor="semangka">Semangka</label> <br></br>
                        <input style={{width:"auto"}} type="checkbox" id="jeruk" value="jeruk" name="item"></input>
                        <label style={{width:"auto"}} htmlFor="jeruk">Jeruk</label> <br></br>
                        <input style={{width:"auto"}} type="checkbox" id="nanas" value="nanas" name="item"></input>
                        <label style={{width:"auto"}} htmlFor="nanas">Nanas</label> <br></br>
                        <input style={{width:"auto"}} type="checkbox" id="salak" value="salak" name="item"></input>
                        <label style={{width:"auto"}} htmlFor="salak">Salak</label> <br></br>
                        <input style={{width:"auto"}} type="checkbox" id="anggur" value="anggur" name="item"></input>
                        <label style={{width:"auto"}} htmlFor="anggur">Anggur</label>
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <input type="submit" value="Kirim"></input>
                    </td>
                    </tr>
                </table>
                    </div>
                </div>
                </div>
        )
    }
}

export default FormBuah;