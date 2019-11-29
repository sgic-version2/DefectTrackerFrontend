import React,{useState} from 'react'
import { Button } from 'semantic-ui-react'
//import addf from './AddDefect';
import TransitionsModal from './Add_Defect'
// import { changeDataValuesStatus } from './../../fileAction/addDefectStatusAction';

const DefectListButton = (changeDataValuesStatus) => {
    const [open,setOpen]=useState(false);

    const handleOpen=()=>{
        setOpen(true);
    };

    const handleClose =() =>{
        setOpen(false);
    };

    return (
        <div>
            

            <TransitionsModal open={open} handleOpen={handleOpen} handleClose={handleClose} width={30} title="Add Defect" changeDataValues={changeDataValuesStatus}/>
            <Button  color="primary" onClick={handleOpen}>Add Defect</Button>
            {/* <form action="/addf" class="inline">
    <Button color="primary">Home</Button>
</form> 
            
            <Button color="red">Deallocation</Button>
            <Button primary>Module Allocation</Button> */}
        </div>
    )
}

export default DefectListButton
