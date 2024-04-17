// import axios from 'axios';
// export default function Comp(){



    
//     const handlesubmit = (event) => {
//         event.preventDefault();
      
//         var datastring = new FormData(event.target);
//         // var config = {headers:{"enctype":"multipart/form-data"}};

//         axios.post('http://localhost:3006/Entryform',datastring)
//         .then(function(response){
//             if(response.error){
//                 alert('Errror');
//                 // window.location.href="./addstudent";

//             }
//             else if(response){
             
//                 alert('Successfully Registered');
//                 window.location.href='v';
              
//                 // window.location.href="./addstudent";
              
           
//             }
//             else{
//                 alert('Contact Admin');
//                 window.location.href="./addstudent";
//             }
//         })
//         .catch(function(error){
//             alert('Err');
//             window.location.href="./";
//         })
        

//     }
//     return(
//         <>
//         <form onSubmit={handlesubmit}>

//       <div >
//         <label htmlFor="name">Remaining amount:</label>
//       </div>
//       <div >
//         <input type="text" name="studentname" id="name"  />
//       </div>
       
//         <button type="submit" name="data_submit" id="data_submit"
//                                value="submit" >
//                                    Register
//                                </button>
//         </form>
//         </>
//     )
// }

import axios from "axios";
export default function Comp(){

    const handlesubmit=(event)=>{
          event.preventDefault();
          var datastring=new FormData(event.target)
                    axios.post('http://localhost:3006/cri',datastring)

    }
    
    return(
        <>
<div>
        <form  onSubmit={handlesubmit}>

        <input type="text" name="username" />
        <input type="text" name="email" />
        <input type="text" name="password" />
        <button type="submit">submit</button>
        </form>
</div>
        </>
    )
}