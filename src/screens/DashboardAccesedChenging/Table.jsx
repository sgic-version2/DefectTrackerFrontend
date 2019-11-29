import React, { Component } from 'react';
import { Table } from 'antd';
import { Card, Col, Row } from 'antd';
import { Modal, Button } from 'antd';
import './table.css';
import { Icon } from 'antd';

const columns = [
    { title: 'Module Id', dataIndex: 'Id', key: 'Id' },
    { title: 'Module name', dataIndex: 'name', key: 'name' },
    { title: 'Action',
     dataIndex: '',
      key: 'x',
      render: () => <a><Icon type="edit" /></a>,
     },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a><Icon type="delete" /></a>,
    },
  ];
  
  const data = [
    {
      key: 1,
      name: 'John Brown',
      Id: 1,
      
      description: 'My name is John Brown',
    },
    {
      key: 2,
      name: 'Jim Green',
      Id: 2,
    
      description: 'My name is Jim Green',
    },
    {
      key: 3,
      name: 'Joe Black',
      Id: 3,
     
      description: 'My name is Joe Black',
    },
  ];




class Amodule extends Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
    render() { 

      const { visible, loading } = this.state;
        return ( <div>
<Row style={{ padding:30  }}></Row>
<div>
        <Button type="primary" onClick={this.showModal}>
         Add Module
        </Button>
        <Modal
          visible={visible}
          title="Add Module"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
             Cancel
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Add
            </Button>,
          ]}
        >
           
                
           <form class="form-horizontal" action='' method="POST">   


           <div class="control-group">
      
      <label class="control-label"  for="username">Module id</label>
      <div class="controls">
        <input type="text" id="username" name="username" placeholder="" class="input-xlarge"/>
       
      </div>
    </div>

    <div class="control-group">
      
      <label class="control-label"  for="username">Module name</label>
      <div class="controls">
        <input type="text" id="username" name="username" placeholder="" class="input-xlarge"/>
       
      </div>
    </div>
                    
                   
         </form>
        </Modal>
      </div>


 <Table
    columns={columns}
    expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
    dataSource={data}
  />

        </div> );
    }
}
 
export default Amodule;