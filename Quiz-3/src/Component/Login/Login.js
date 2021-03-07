import React, { useContext, useState } from 'react'
import { LoginContext } from './LoginContext'
import { useHistory } from 'react-router-dom'

const Login = () => {

    const history = useHistory();
    let loggedIn = false;
    const [, setLogin] = useContext(LoginContext)
    const [input, setInput] = useState({
        username: "",
        password: "",
        loggedIn
    })

    const handleChange = (event) => {
        let inputValue = {...input}
        inputValue[event.target.name] = event.target.value
        console.log(inputValue)
        setInput(inputValue)
    }

    const handleLogin = () => {
        if(input.username === "admin" && input.password  === "admin") {
            setLogin({
                username: input.username,
                password: input.password,
                loggedIn: true
            });

            // alert('Yay')
            let path = `/`; 
            history.push(path);
        }
        else{
            alert(`Username atau password salah`)
        }
        setInput({
            username: "",
            password: ""
        })
    }
   
    return( 
        
    <div  style={{display:"flex", alignItems:"center", flexDirection:"column"}}> 
        <div>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" value={input.username} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={input.password} onChange={handleChange}/>
        </div>
        <input type="submit" value="Login" onClick={handleLogin} />
    </div>
    )
}

export default Login