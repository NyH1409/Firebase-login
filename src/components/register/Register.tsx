import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerWithEmailAndPassword } from "../../firebase/firebase";
import "./register.css"


export const Register : React.FC<any> = ()=> {
    const [name,  setName] = useState<string>("");
    const [email,  setEmail] = useState<string>("");
    const [password,  setPassword] = useState<string>("");

    return (
        <>
            <form className="register-form">
                <h1 style={{textAlign: "center", fontSize: 20, color: "orange"}}>REGISTRATION</h1>
                <div>
                    <label htmlFor="">Name :</label>
                    <input type="text" placeholder="Jane" value={name} onChange={(e)=>setName(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="email" placeholder="exemple@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input type="password" placeholder="**********" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <button className="create" onClick={()=>registerWithEmailAndPassword(name, email, password)}><Link to="" style={{color: "white", textDecoration: "none"}}>Register</Link></button>
                <button className="login"><Link to="/" style={{color: "white", textDecoration: "none"}}>Sign In</Link></button>
            </form>
        </>
    )
}