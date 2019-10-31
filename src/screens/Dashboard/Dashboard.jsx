import React, { Component } from 'react';
import './dash.css';
import { Progress } from 'antd';
import { Card, Col, Row } from 'antd';




class Dashboard extends Component {
    state = {  }
    render() { 
        return (  
            <div>
<Row style={{ padding:30  }}></Row>
<Row gutter={16}>
      <Col className="gutter-row" span={5}>
        <div className="gutter-box">
            <Card title="Opened Defect"  style={{ width:'100%',textAlign:'center' }}>
            <Progress type="dashboard" strokeColor="darkblue" percent={75} />
    </Card>
    </div>
      </Col>
      <Col className="gutter-row" span={5}>
        <div className="gutter-box">
            <Card title="Fixed Defect" style={{ width: '100%',textAlign:'center'}}>
            <Progress type="dashboard" strokeColor="gray" percent={20} />
    </Card>
    </div>
      </Col>
      <Col className="gutter-row" span={5}>
        <div className="gutter-box">
        <Card title="Reopened Defect" style={{ width: '100%',textAlign:'center' }}>
        <Progress type="dashboard" strokeColor="purple" percent={55} />
    </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={5}>
        <div className="gutter-box">
            <Card title="Rejected Defect"  style={{ width: '100%',textAlign:'center' }}>
            <Progress type="dashboard" percent={95} />
    </Card>
        </div>
      </Col>
    </Row>



  <Row style={{ padding:30  }}></Row>


  <Row gutter={16}>
      <Col className="gutter-row" span={10}>
        <div className="gutter-box">
        <Card title="Severity Meater " style={{ width: '100%',textAlign:'center' }}>
        <div style={{ width:'100%'}}>
    <Progress percent={30} strokeColor="purple" />
    <Progress percent={50} strokeColor="blue" />
    <Progress percent={70}  strokeColor="rose"/>
    <Progress percent={20} strokeColor="red" />
  </div>
    </Card>
       
        </div>
      </Col>
      <Col className="gutter-row" span={10}>
        <div className="gutter-box" >


        <Card title="Severity Meater " style={{ width: '100%',textAlign:'center' }}>
        <div style={{ width:'100%'}}>
        <img src="https://docs.devexpress.com/MobileControls/images/ios/chart-elements.png" style={{ width:'100%'}}></img>
  </div>
    </Card>
       
        </div>

       



      </Col>
     
      
    </Row>




    <Row gutter={16}>
      <Col className="gutter-row" span={10}>
      <Card title="Line Chart " style={{ width:'100%' }}>
        <div style={{ width: '100%'}}>

        <img src="https://www.excel-easy.com/examples/images/line-chart/line-chart.png" style={{width:'100%'}}></img>

        </div>
    </Card>
      </Col>
      <Col className="gutter-row" span={12}>
        <div className="gutter-box">
        <div>
                               
                         
                                
                            </div>

        </div>
      </Col>
     
      
    </Row>
            </div>
        );
    }
}
 
export default Dashboard;