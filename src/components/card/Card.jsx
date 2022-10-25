import React from 'react';
import "../card/Card.css";
import { useState,useEffect } from 'react';
import axios from "axios"



const Card = () => {
const [user,setUser]=useState([])	
const url = "https://randomuser.me/api/";
const getUser = async()=>{
const {data} = await axios(url);
setUser(data.results[0])
console.log(data)
}
// getUser();
useEffect(()=>{
	getUser();
},[])
const handleUser =(()=>{
	getUser();
})

  return (
	<>
	
		<div className="card">
				<img src={user?.picture?.large} alt="..." />
			<div className="text">
				<h3>{user?.name?.title} {user?.name?.first} {user?.name?.last}</h3>
				<p><i className="fa-solid fa-envelope me-2"/>{user?.email}</p>
				<p><i class="fa-solid fa-phone me-3"/>{user?.phone}</p>
				<p><i class="fa-sharp fa-solid fa-city me-3"></i>{user?.location?.city}-{user?.location?.city}</p>
				<p><i class="fa-regular fa-calendar-days me-3"/>Age:{user?.dob?.age}</p>
				<p><i class="fa-solid fa-handshake me-2"></i>Register Date: {new Date (user?.registered?.date).toLocaleDateString()}</p>
			</div>
		</div>
		<button onClick={handleUser}>New User</button>
	
	</>
  )
}

export default Card;