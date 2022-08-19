import React, { useState } from "react";
import "./main.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword, signInWithFacebook, signInWithGithub, signInWithGoogle } from "../../firebase/firebase"
import { useEffect } from "react";
import { Button } from "../button/Button";
import facebook from "../../fontawesome/svgs/brands/facebook.svg";

export const Login : React.FC<{}> = () => {
    const [email , setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(loading){
            return;
        }
        if (user) {
            navigate("/home")
        }
    },[user, loading])

    function log(e:any, email:string, password:string) {
        e.preventDefault();
        logInWithEmailAndPassword(email, password)
    }
    function logGoogle(e:any) {
        e.preventDefault();
        signInWithGoogle();
    }
    function logFacebook(e:any) {
        e.preventDefault();
        signInWithFacebook();
    }
    function logGithub(e:any) {
        e.preventDefault();
        signInWithGithub();
    }
    return(
        <>
            <div className="container">
                <div className="content-right">
                    <form>
                        <h1 style={{textAlign: "center", fontSize: 20, marginBottom: 30, marginTop: 30, color: "#ffc107"}}>LOGIN</h1>
                        <div>
                            <input type="email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <input type="password" placeholder="Password"value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <button className="login" onClick={(e)=>log(e,email, password)}>
                            Login
                        </button>
                        <p style={{textAlign: "center", color: "grey", fontSize: 14}}>Don't have an account? <Link to="/register">Register now</Link></p>
                        <p style={{textAlign: "center", color: "grey"}}><strong>Or</strong></p>
                        <Button attribut= "google" title="Sign in with Google" logo="fab fa-google fa-1x" login={logGoogle}/>
                        <Button attribut= "facebook" title="Sign in with Facebook" logo="fab fa-facebook fa-1x" login={logFacebook}/>
                        <Button attribut= "github" title="Sign in with Github" logo="fab fa-github fa-1x" login={logGithub}/>
                    </form>
                </div>
            </div>
        </>
    )
}