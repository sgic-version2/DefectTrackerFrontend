import React from 'react'
import { Modal } from 'antd'

const model = ({ form, open, handleOpen, handleClose, width, title }) => {
  return (
    <div>
      <Modal
        width={`${width ? width : '20'}%`}
        centered
        visible={open}
        title={title}
        onOk={handleOpen}
        onCancel={handleClose}
      >
        {form}
      </Modal>
    </div>
  )
}

export default model
