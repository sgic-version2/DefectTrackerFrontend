import React from 'react';
import './Defect.css'
import Editform from './EditForm'
import Model from '../../components/model/submitModel'


export default function TransitionsModal({open, handleOpen, handleClose, width, title}) {
    return (
      <div>
          <Model open={open} handleOpen={handleOpen} handleClose={handleClose} form={<Editform/>} width={width} title={title}/>
      </div>
      );
  }