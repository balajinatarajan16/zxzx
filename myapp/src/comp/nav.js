import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'

import logo from '../image/logo192.png'
import '../comp/rr.css'

import { FaUser } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Nav(){

  const[sovi,setsovi]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:3006/sovi')
    .then((response)=>response.json())
    .then((json)=>setsovi(json))
  },[])

    const handlesubmit=(e)=>{
      e.preventDefault();
      var datastring=new FormData(e.target)
      axios.post('http://localhost:3006/signup',datastring)

    }
    return(
        <>
       
{/* 
       <nav class="navbar navbar-expand-lg navbar-light bg-secondary align-items-center ">
  <div class="container-fluid">

    <img src={logo} style={{height:'50px'}}/>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" style={{textDecoration:'none'}}>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" >
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    

    </div>
   
  </div>
</nav> */}


<form onSubmit={handlesubmit}>

<div  className="container-fluid d-flex justify-content-center  align-item-center">
  

  
<div className="col-lg-6 mt-5 card b row">
  <div className="col-lg-12 row">

<div className="col-lg-6">&nbsp;</div>
<div className="i  text-center col-lg-6"><FaUser /></div>
  </div>
<div className="row  mt-5">
       
     
      <div className="col-lg-6  ">
        <div className="row">

        <div className="col-lg-1">

        <label htmlFor="name"> username</label>
        </div>
        <div className="col-lg-11 ">

        <input type='text' name="name" id="name" className="form-control custom-bg rounded-0" />
        </div>
        </div>

      </div>
      <div className="col-lg-6 ">
      <div className="row">

<div className="col-lg-12">
<label htmlFor="password"> password</label>

<input type='text' name="sname" id="name" className="form-control rounded-pill custom-bg" />
</div>
</div>
      </div>
     
    </div>
    <div className="row mt-5">

      </div>
    <td className="mt-5">  <button type='submit' className="btn btn-primary">submit</button></td>
  </div>
            

</div>


    
</form>

{sovi.map((v,i)=>(
  <>
  {v.name}
  </>
)

)}
       
        </>
    )
}