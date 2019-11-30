import React from 'react';
//import './Defect.css'
import Model from '../../components/model/submitModel'
import Adddefectform from './Add_Defect_Form';
// import { changeDataValuesStatus } from './../../fileAction/addDefectStatusAction';


export default function TransitionsModal({open, handleOpen, handleClose, width, title,changeDataValuesStatus}) {
 return (
    <div>
     <Model open={open} handleOpen={handleOpen} handleClose={handleClose} form={<Adddefectform changeDataValuesStatus={changeDataValuesStatus}/>} width={width} title={title} />
    </div>
  );
}