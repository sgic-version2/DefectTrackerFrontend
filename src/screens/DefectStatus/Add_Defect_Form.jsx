import React from 'react'

const Add_Defect_Form = () => {
    return (
        <div>
            <form className=" "  >
    <div >

<label>Defect Status:</label>
<input type="text" id="" className="" placeholder="Defect Status"></input>
<br/>
{/* <label>Defect Status</label>
<input type="text" id=""  className="" placeholder=" status"></input>
 <br/> */}
<label>Describtion</label>
<input type="text" id=""  className="" placeholder=" describtion"></input> 

<br/>

{/* <label>Status</label>
<select id="" className="">
    <option value="open">Open</option>
    <option value="close">Closed</option>
    <option value="reopen">ReOpen</option>
    <option value="On Hold">On Hold</option>
    <option value="Resolved">Resolved</option>
    <option value="Rejected">Rejected</option>
    <option value="In progress">In progress</option>
  
          
    
  </select> */}
<br/>


</div>
</form>
        </div>
    )
}

export default Add_Defect_Form
