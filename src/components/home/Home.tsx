import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../firebase/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import avatar1 from "../login/image/avatar1.png"
import avatar2 from "../login/image/avatar2.png"
import avatar3 from "../login/image/avatar3.png"
import "./home.css"

export const Home : React.FC<any> = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();
  const photo = [avatar1, avatar2, avatar3]
  const index = Math.floor(Math.random()*photo.length);
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      console.log(data);
      
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <div className="content">
        <img src={photo[index]} alt="" className="picture"/>
       <div>
        Logged in as
         <div>{name}</div>
         <div>{user?.email}</div>
         <button className="logout" onClick={logout}>
          Logout
         </button>
       </div>
     </div>
  );
}