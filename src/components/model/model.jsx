import React from 'react'
<<<<<<< HEAD
import { Modal } from 'antd';
=======
import { Modal } from 'antd'

>>>>>>> 315d362f2b38a29e8faecf505821cd8a6d8c2520
const model = ({ form, open, handleClose, width, title }) => {
  return (
    <div>
      <Modal
        width={`${width ? width : '20'}%`}
        centered
        visible={open}
        title={title}
        onOk={handleClose}
        onCancel={handleClose}
      >
        {form}
      </Modal>
    </div>
  )
}

export default model
