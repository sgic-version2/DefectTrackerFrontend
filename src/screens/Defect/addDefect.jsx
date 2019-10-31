import React, {Component, useState} from "react";
//import FormLabel from '@material-ui/core/FormLabel'
//import Grid from '@material-ui/core/Grid';
//import { Segment, ModalDescription } from "semantic-ui-react";
import { Button } from "@material-ui/core";
import SubmitModel from "../../components/model/submitModel";
import Form from './form';

//import './style.css'


const AddDefect = ({open,handleOpen,handleClose}) => {

 
return (
    <div style={{marginBottom:40}}>
        <SubmitModel open={open}  handleOpen={handleOpen} handleClose={handleClose} form={<Form/>}/>
     
    </div>
);

}
export default AddDefect
