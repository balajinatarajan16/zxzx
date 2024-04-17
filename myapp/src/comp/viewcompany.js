// import {useState,useEffect} from 'react'
// import axios from 'axios';

import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

// export default function View(){
    
// const [viewcompany,setviewcompany]=useState([]);
//     useEffect(()=>{
//         fetch('http://localhost:3006/view')
//         .then((response)=>response.json())
//         .then((dat)=>setviewcompany(dat))
//     },[])
//     let data_delete=()=>{
//         axios.delete('http://localhost:3006/delete/')

//     }
//     return(
//         <>
//          {viewcompany.map((v,i)=>(
//             <>
//             {v.studentname}
//             <td><button onClick={() => data_delete()}>delete </button></td>
//             </>
         
//         ))} 
       
//         </>
//     )
// }

export default function View(){
    const [view,setview]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3006/view')
        .then((response)=>response.json())
        .then((json)=>setview(json))
    },[])
    let dele=(id)=>{
        axios.delete('http://localhost:3006/delete'+id)
    }
    return(
        <>
       {view.map((v,i)=>(
        <>
        {v.id}
        {v.username}
        {v.email}
        {v.password}
       <td><button><Link to ={`/u/${v.id}`}>edit</Link></button><button onClick={()=>dele(v.id)}>delete</button></td>

        </>
       ))}
       {view.map((v,i)=>(
        <>
            
        </>
       ))}
        </>
    )
}