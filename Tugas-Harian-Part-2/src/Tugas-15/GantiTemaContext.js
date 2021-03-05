import React, {useState, createContext} from "react"


const GantiTemaContext = createContext()

const GantiTemaProvider = props => {
    const [tema, setTema] = useState({
        backgroundColor: "white",
        color: "grey"
    })

    return(
        <GantiTemaContext.Provider value={[tema, setTema]}>
        {props.children}
        </GantiTemaContext.Provider>
    )
}

export {GantiTemaContext, GantiTemaProvider}