import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



// export default function Update() {
      
// const [viewcompany,setviewcompany]=useState([]);
// const [name, setname] = useState('');
// useEffect(()=>{
//     fetch('http://localhost:3006/edit')
//     .then(response => response.json())
//     .then(result => {
//       if (result.length > 0) {
//         const customer = result[0];
//         setname(customer.username);
//       }
//     })
// }, []);
//         const handlesubmit=(e)=>{
//            e.preventDefault();
//            var datastring=new FormData(e.target);
//            axios.put('http://localhost:3006/update',datastring)
//            .then((respons)=>{
//             if (respons.data.status==='error'){
               
//                 alert('error')
//             }
//             else if (respons.data.status==='updated'){
//                 alert('updated')
//                 window.location.href='v'

//             }
//             else{
//                 alert('no')
//             }
//            })
//         }

// return(
//     <>
//     <form onSubmit={handlesubmit}> 

//      <input type="text" name="name" value={name} onChange={(e)=>setname(e.target.value)}></input>
//      <button onSubmit={handlesubmit}>submit</button>
//     </form>
     
//     </>
// )
// }

export default function Update(){
    const {id}=useParams();
    const i = localStorage.getItem('firstInputValue');
    const[name,setname]=useState('');
    // const[id,setid]=useState('');

    useEffect(()=>{
        fetch('http://localhost:3006/edit/'+id)
        .then((response)=>response.json())
        .then((result)=>{
            if (result.length>0){
                     const name=result[0]
                     setname(name.username);
            }
        })
    },[i])
    const handlesubmit=(g)=>{
        g.preventDefault();
        var datastring=new FormData(g.target);
        axios.put('http://localhost:3006/update/'+id,datastring)
    }
    const handleFirstInputChange = (e) => {
        const inputValue = e.target.value;
        // setid(inputValue);
        
        
        // Update the value for the first input field in local storage
        // localStorage.setItem('firstInputValue', inputValue);
      };
    return(
        <>
        <form onSubmit={handlesubmit}> 
        <input
          type="text"
          placeholder="First Input"
          onChange={handleFirstInputChange}
        />
       <input type="text" name="name" value={name} onChange={(e)=>setname(e.target.value)}/>
      <button type="submit">submit</button>  
    </form>
        </>
)}
