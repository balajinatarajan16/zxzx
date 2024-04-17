// import { Link } from "react-router-dom"
// import logo from '../image/logo192.png'
// import 'bootstrap/dist/css/bootstrap.min.css'

import axios from "axios";
import { useState } from "react";

// export default function Nav(){
//     return(
//         <>
//           <div className="container-fluid  bg-dark">
//         <nav className="navbar navbar-expand-lg nav-back fixed-top bg-dark">
//           <div className="container-fluid">
//           <Link to="/">
//               <img src={logo} className="img-fluid  " alt="logo"  style={{height:'50px',width:'50px'}} />
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
           

//             <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
//               <ul className="navbar-nav pe-lg-5">
//                 <li className="nav-item ps-lg-4">
//                   <Link className="nav-link text-white" to="/">
//                     Home
//                   </Link>
//                 </li>

//                 <li className="nav-item ps-lg-4 dropdown">
//                   <Link
//                     className="nav-link text-white dropdown-toggle"
//                     // to="/Conversational_Marketing"
//                     id="navbarDropdown"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-haspopup="true"
//                     aria-expanded="false"
      
//                  >
//                     Solutions
//                   </Link>
//                   <div
//                     className="dropdown-menu"
//                     style={{
//                       backgroundColor: "black",
//                       border: "2px solid black",
//                     }}
//                     aria-labelledby="navbarDropdown"
//                   >
//                     <Link
//                       className="dropdown-item text-white nm"
//                       style={{ border: "2px solid black" }}
//                       to="/Conversational_Marketing"
//                     >
//                       Conversational Marketing
//                     </Link>
//                     <Link
//                       className="dropdown-item text-white nm"
//                       to="/Conversational_Commerce"
//                     >
//                       Conversational Commerce
//                     </Link>
//                     <Link
//                       className="dropdown-item text-white nm"
//                       to="/Conversational_Support"
//                     >
//                       Conversational Support
//                     </Link>
//                     <Link
//                       className="dropdown-item text-white nm"
//                       to="/Conversational_Support"
//                     >
//                       KRI/KPI Solutions
//                     </Link>
//                   </div>
//                 </li>

//                 <li className="nav-item ps-lg-4 dropdown">
//                   <Link className="nav-link text-white dropdown-toggle" to="/Platform" id="platformDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Platform
//                   </Link>
//                   <div className="dropdown-menu" style={{ backgroundColor: "black", border: "2px solid black" }} aria-labelledby="platformDropdown">
//                     <Link className="dropdown-item text-white nm" style={{ border: "2px solid black" }} to="/Platform#whatsappRef">
//                      Whatsapp
//                     </Link>
//                     <Link className="dropdown-item text-white nm" to="/Platform#instagramRef">
//                     Instagram
//                     </Link>
//                     <Link className="dropdown-item text-white nm" to="/Platform#telegramRef">
//                     Telegram
//                     </Link>
//                     <Link className="dropdown-item text-white nm" to="/Platform#facebookRef">
//                     Facebook
//                     </Link>
//                     <Link className="dropdown-item text-white nm" to="/Platform#smsRef">
//                     SMS
//                     </Link>
//                   </div>
//                 </li>
//                 <li className="nav-item ps-lg-4 dropdown">
//                   <Link className="nav-link text-white dropdown-toggle" to="IndustryMain" id="IndustryMain#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                   Industries
//                   </Link>
//                   <div className="dropdown-menu" style={{ backgroundColor: "black", border: "2px solid black" }} aria-labelledby="platformDropdown">
//                     <Link className="dropdown-item text-white nm" style={{ border: "2px solid black" }} to="/IndustryMain#ecommerce">
//                     E-commerce
//                     </Link>
                    
//                     <Link className="dropdown-item text-white nm" to="/IndustryMain#Education">
//                       Education
//                     </Link>
//                     <Link className="dropdown-item text-white nm" to="/IndustryMain#Food">
//                       Food
//                     </Link>
//                     <Link className="dropdown-item text-white nm" to="/IndustryMain#Travel">
//                       Travel
//                     </Link>
//                     <Link className="dropdown-item text-white nm" to="/IndustryMain#Entertainment">
//                       Entertainment
//                     </Link>
//                     <Link className="dropdown-item text-white nm" to="/IndustryMain#RealEstate">
//                       Real Estate
//                     </Link>
//                     <Link className="dropdown-item text-white nm" to="/IndustryMain#Logistics">
//                       Logistics
//                     </Link>
//                     <Link className="dropdown-item text-white nm" to="/IndustryMain#Healthcare">
//                       Healthcare
//                     </Link>
//                   </div>
//                 </li>
//                 <li className="nav-item ps-lg-4">
//                   <Link className="nav-link text-white" to="/contact_us">
//                     ContactUs
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           <Link to="/Book_a_Demo">  <button type="button" className="text-white rounded-4 btn-book btn btn-primary ">
//               Book A Demo
//             </button></Link>
//           </div>
//         </nav>
//      </div>
     
//         </>
//     )
// }


const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      var config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      axios.post('http://localhost:3006/upload', formData, config)
      .then(response => {
        console.log('File uploaded successfully:', response.data);
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
  } else {
    console.log('No file selected');
  }
  }      
  return (
    <div>
      <form onSubmit={handleFileSubmit} encType="multipart/form-data">

      <input type="file" onChange={handleFileChange} />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
};


 
export default FileUploadComponent;