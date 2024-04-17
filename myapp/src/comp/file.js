import axios from "axios"
import { useState } from "react";





export default function File(){

    const [educationType, setEducationType] = useState(''); // State to track selected education type
    const[duration,setduration]=useState('')
    const handleRadioChange = (event) => {
      setEducationType(event.target.value);
    };
  
    const handlesubmit=(e)=>{
        e.preventDefault();
        var datastring=new FormData(e.target);
        axios.post('http://localhost:3006/cri',datastring)
    }
    const domainchange=(e)=>{
        const domain=(e.target.value)
        if (domain==='front'){
            setduration('4months')
            
        }

      
    }
    return(
        <>
        <form onSubmit={handlesubmit}>

        <input type="radio" name="sex" value='male'></input>male
        <input type="radio" name="sex" value='female'></input>female
        <select name="domain" onChange={domainchange}><option>select</option><option >front</option>
        <option >back</option></select>
        {duration}
        <label>
        <input
          type="radio"
          name="education"
          value="ssc"
          checked={educationType === 'ssc'}
          onChange={handleRadioChange}
        />
        SSC
      </label>
      <label>
        <input
          type="radio"
          name="education"
          value="hsc"
          checked={educationType === 'hsc'}
          onChange={handleRadioChange}
        />
        HSC
      </label>

      {educationType === 'ssc' && (
        <div>
          <label htmlFor="sscMarks">SSC Marks:</label>
          <input type="text" id="sscMarks" name="sscMarks" />
        </div>
      )}

      {educationType === 'hsc' && (
        <div>
          <label htmlFor="hscMarks">HSC Marks:</label>
          <input type="text" id="hscMarks" name="hscMarks" />

          <label htmlFor="hscPercentage">HSC Percentage:</label>
          <input type="text" id="hscPercentage" name="hscPercentage" />
        </div>
      )}
        <button type="submit">sub</button>

        </form>

        </>
    )
}