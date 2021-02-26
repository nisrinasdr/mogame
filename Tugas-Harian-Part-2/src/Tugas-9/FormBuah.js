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
                        <label for="nama"><strong>Nama Pelanggan</strong></label>
                    </td>
                    <td>
                        <input type="text" id="nama" name="nama"></input>
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <span><strong>Daftar Item</strong></span>
                    </td>
                    <td>
                        <input type="checkbox" id="semangka" value="semangka" name="item"></input>
                        <label for="semangka">Semangka</label> <br></br>
                        <input type="checkbox" id="jeruk" value="jeruk" name="item"></input>
                        <label for="jeruk">Jeruk</label> <br></br>
                        <input type="checkbox" id="nanas" value="nanas" name="item"></input>
                        <label for="nanas">Nanas</label> <br></br>
                        <input type="checkbox" id="salak" value="salak" name="item"></input>
                        <label for="salak">Salak</label> <br></br>
                        <input type="checkbox" id="anggur" value="anggur" name="item"></input>
                        <label for="anggur">Anggur</label>
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