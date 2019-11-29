import React,{useState} from "react";
import { Modal } from "antd";

const SubmitModel = ({ form, open, handleClose, width, title }) => {
  //use state
  const [openForm, setOpen] = useState({open});

  return (
    <div>
      {openForm && (
        <Modal
          width={`${width ? width : "50"}%`}
          centered
          visible={open}
          title={title}
          onOk={()=> setOpen(!open)}
          onCancel={handleClose}
        >
          {form}
                        {/* <button type="submit" onClick={handleClose}>
              submit
            </button> */}
        </Modal>
      )}
    </div>
  );
};
export default SubmitModel;
