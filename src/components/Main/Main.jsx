import React, { useState,useEffect } from 'react'
import  "bootstrap/dist/css/bootstrap.min.css";
import "../Main/Main.css"
import axios from "axios"

const Main = () => {
const [user,setUser]= useState([])
 const url= "https://randomuser.me/api/";
 const random = async()=>{
	const {data} = await axios(url);
	// setUser(data.results[0]);
 }
 console.log(user)
 useEffect(()=>{
	random();
 },[])
 const handleUser =(()=>{
	random()

	});
  return (
	<div className="container" >
	<div className='card ' style={{width: '18rem'}}>
        <img src={user?.picture?.large} className="card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title">{user?.name?.title}  {user?.name?.first}  {user?.name?.last}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
		  <i className="fa-solid fa-envelope me-2"></i>
			{user.email}</li>
          <li className="list-group-item"><i class="fa-solid fa-phone me-3"></i>{user.phone}</li>
          <li className="list-group-item"><i class="fa-sharp fa-solid fa-city me-3"></i>{user.location?.city}</li>
		  <li className="list-group-item"><i class="fa-regular fa-calendar-days me-3"></i>{user.dob?.age}</li>
          <li className="list-group-item"><i class="fa-solid fa-handshake me-2"></i>{new Date (user.registered?.date).toLocaleDateString()}</li>
        </ul>
		<button onClick={handleUser} className='p-3 border border-none bg-success'>New User</button>
      </div>
	  
	  </div>
  )
}

export default Main;
