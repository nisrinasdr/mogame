import React, { useContext, useState } from "react"
import {GantiTemaContext} from "./GantiTemaContext"

const GantiTema = () => {
    const [namaTema, setNamaTema] = useState("Dark")
    const [tema, setTema] = useContext(GantiTemaContext)
    const changeTheme = () => {
        if(tema.backgroundColor === "white") {
            setTema({
                backgroundColor: "navy",
                color: "white"
            })
            setNamaTema("Light")
        } else {
            setTema({
                backgroundColor: "white",
                color: "grey"
            })
            setNamaTema("Dark")
        }
    }

    return(
        <div style={{display:"flex"}}>
        <button style={{width:"200px", height:"35px", borderRadius:"10px", 
        margin:"auto",cursor:"pointer"}}
        onClick={changeTheme}>
            Change Navbar to {namaTema} theme
        </button>
        </div>
    )
}

export default GantiTema