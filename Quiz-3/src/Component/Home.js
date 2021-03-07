import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        axios.get(`http://backendexample.sanbercloud.com/api/books`)
        .then(result => {
            console.log(result.data.id)
            this.setState({
                books: result.data
            })
        })
    }

    render() {
        return(
            <>
            
            <div>
                <h1>Daftar Buku-buku Pilihan</h1>
                {this.state.books.map(book => {
                    return(
                        <>
                        <h2>{book.title}</h2>
                        <div className="book-info">
                            <img className="book-img" src={book.image_url} alt="book cover" />
                            <div className="book-text">
                                <p>Tahun Terbit: {book.release_year}</p>
                                <p>Harga: Rp. {book.price.toLocaleString('id')},-</p>
                                <p>Jumlah Halaman: {book.totalPage}</p>
                            </div>
                        </div>
                        <p><strong>Deskripsi:</strong> {book.description}</p>
                        <p><strong>Review:</strong> {book.review}</p>
                        <hr />
                        </>
                    )
                })}
            </div>
            </>
        );
    }
}

export default Home