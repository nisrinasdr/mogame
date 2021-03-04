import React, {useState, createContext} from "react"


const DaftarBuahContext = createContext()

const DaftarBuahProvider = props => {
    const [daftarBuah, setDaftarBuah] = useState(null)
    const [input, setInput] = useState({
        id: "",
        name: "",
        price: "",
        weight: ""
    })
    const [currentId, setCurrentId] = useState(null)

    return(
        <DaftarBuahContext.Provider value={[daftarBuah, setDaftarBuah, input, setInput, currentId, setCurrentId]}>
        {props.children}
        </DaftarBuahContext.Provider>
    )
}

export {DaftarBuahContext, DaftarBuahProvider}