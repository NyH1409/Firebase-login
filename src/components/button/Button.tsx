import React from "react";

export const Button : React.FC<any> = ({attribut, title, login, logo})=>{
    return(
        <>
            <button className={attribut} onClick={login}><i className={logo}></i>{title}</button>
        </>
    )
}