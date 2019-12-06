import React from 'react'
import { Modal, Button, Row, Col } from 'antd';
//dropdown for Lisence period s Function

const MoreDetails = ({ open, handleOpen1, handleClose1, width, title }) => {
  //use state 
  return (
    <div>
      <Modal
        width={`${width ? width : '50'}%`}
        visible={open}
        title={title}
        onOk={handleOpen1}
        onCancel={handleClose1}
        footer={[
          <Button key="back" type="primary" onClick={handleClose1}>
            Return
            </Button>,
          //         <Button key="submit" type="primary" onClick={handleClose1}>
          //             Save
          // </Button>,
        ]}
      >
        <form>
          <Row>
            <Col span={9} style={{ padding: '5px' }}>
              <p>
                <b> project_id</b>
              </p>
              <p>
                <b> module_id</b>
              </p>
              <p>
                <b>defect_type_id</b>
              </p>
              <p>
                <b>severity_id </b>
              </p>
              <p>
                <b> priority_id</b>
              </p>
              <p>
                <b> fixed_by</b>
              </p>
              <p>
                <b> found_in</b>
              </p>

              <p>
                <b> fixed_in</b>
              </p>
              <p>
                <b>attachment_id</b>
              </p>
              <p>
                <b>status_id</b>
              </p>
              <p>
                <b>created_date</b>
              </p>
              <p>
                <b>udated_date</b>
              </p>
              <p>
                <b>description</b>
              </p>
              <p>
                <b>assignto</b>
              </p>
              <p>
                <b>assignby</b>
              </p>
            
              {/* <p label="Priority: "> </p>
              <br />
              <br />
              <br />
              <br />
              <p label="Status: "></p> */}
            </Col>
            <Col span={1} style={{ padding: '5px' }}>
              <p>
                <b>:</b>
              </p>
              <p>
                <b>:</b>
              </p>
              <p>
                <b>:</b>
              </p>
              <p>
                <b>:</b>
              </p>
              <p>
                <b>:</b>
              </p>
              <p>
                <b>:</b>
              </p>
              <p>
                <b>:</b>
              </p>
              <p>
                <b>:</b>
              </p>
              <p>
                <b>:</b>
              </p>
              <p>
                <b>:</b>
              </p>
              <p>
                <b>:</b>
              </p>
              <p>
                <b>:</b>
              </p>
              <p>
                <b>:</b>
              </p>
              <p>
                <b>:</b>
              </p>
              <p>
                <b>:</b>
              </p>

            </Col>
            <Col span={14} style={{ padding: '5px' }}>
              <p>SGIC-001</p>
              <p>John Keels</p>
              <p>JK</p>
              <p>Jhon</p>
              <p>33 Months</p>
              <p>Gold</p>
              <p>25.10.2019</p>
              <p>25.01.2020</p>
              <p>jhonk@gmail.com</p>
              <p>jhonk@gmail.com</p>
              <p>jhonk@gmail.com</p>
              <p>jhonk@gmail.com</p>
              <p>jhonk@gmail.com</p>
              <p>jhonk@gmail.com</p>
              <p>ohn Keells Holdings PLC is the largest conglomerate in Sri Lanka, focused on seven industry sectors, offering the best opportunities for investment and ...</p>
            </Col>
          </Row>
        </form>
      </Modal>
    </div>
  )
}
export default MoreDetails