import React from 'react';
import './Defect.css'
import Model from '../../components/model/submitModel'
import Adddefectform from './Add_Defect_Form';


export default function TransitionsModal({open, handleOpen, handleClose, width, title}) {
 return (
    <div>
     <Model open={open} handleOpen={handleOpen} handleClose={handleClose} form={<Adddefectform/>} width={width} title={title}/>
    </div>
  );
}