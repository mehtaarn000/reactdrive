import { useState, useRef } from "react"

export default function RegisterForm(props) {

    const [password, setPassword] = useState("")
    const [equal, setEqual] = useState("")
    const [conpassword, setConPassword] = useState("")
    const [username, setUsername] = useState("")
    const inputRef = useRef("")

    function isEqual(e) {
        if (password !== conpassword) {
            e.preventDefault()
            setEqual("Passwords don't match")
            setConPassword("")
            inputRef.current.value = ""
            return false
        }

        if (!username) {
            e.preventDefault()
            setEqual("Username field must be filled")
        }
        
        else {
            return true
        }
    }


    return (
        <div>
            <div>
                <h1>{props.error}</h1>
            </div>
            <div>
                <h1>{equal}</h1>
            </div>
            <form method="post" action="/register" onSubmit={(e) => {isEqual(e)}}>
                <input name="username" type="username" onChange={() => {setUsername(event.target.value)}}></input>
                <input name="password" type="password" onChange={() => {setPassword(event.target.value)}}></input>
                <input name="confirmpassword" type="password" onChange={() => {setConPassword(event.target.value)}} ref={inputRef}></input>
                <button type="submit"></button>
            </form> 
        </div>
    )
}
