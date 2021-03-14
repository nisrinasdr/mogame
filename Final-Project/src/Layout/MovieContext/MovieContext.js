import React, {useState, createContext} from "react"


const MovieContext = createContext()

const MovieProvider = props => {
    const [daftarFilm, setDaftarFilm] = useState(null)
    const [input, setInput] = useState({
        id: "",
        description: "",
        duration: "",
        genre: "",
        image_url: "",
        rating: "",
        review: "",
        title: "",
        year: ""
    })
    const [currentId, setCurrentId] = useState(null)

    return(
        <MovieContext.Provider value={[daftarFilm, setDaftarFilm, input, setInput, currentId, setCurrentId]}>
        {props.children}
        </MovieContext.Provider>
    )
}

export {MovieContext, MovieProvider}