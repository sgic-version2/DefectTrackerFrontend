import React from "react";
import SubmitModel from "../../components/model/submitModel";
import Form from './form';

//import './style.css'


const AddDefect = ({open,handleOpen,handleClose,changeDataValues}) => {

 
return (
    <div style={{marginBottom:40}}>
        <SubmitModel open={open}  handleOpen={handleOpen} handleClose={handleClose} form={<Form changeDataValues={changeDataValues} handleClose={handleClose}/>}/>
     
    </div>
);

}
export default AddDefect
