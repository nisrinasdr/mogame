import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="form">
      <h1>Form Pembelian Buah</h1>
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
            <input type="checkbox" id="semangka" name="semangka" name="item"></input>
            <label for="semangka">Semangka</label> <br></br>
            <input type="checkbox" id="jeruk" name="jeruk" name="item"></input>
            <label for="jeruk">Jeruk</label> <br></br>
            <input type="checkbox" id="nanas" name="nanas" name="item"></input>
            <label for="nanas">Nanas</label> <br></br>
            <input type="checkbox" id="salak" name="salak" name="item"></input>
            <label for="salak">Salak</label> <br></br>
            <input type="checkbox" id="anggur" name="anggur" name="item"></input>
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
  );
}

export default App;
