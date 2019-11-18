import React, { Component } from 'react';
import './dash.css';
import { Progress } from 'antd';
import { Card, Col, Row } from 'antd';
import { Image, Segment } from 'semantic-ui-react';
import { Grid } from '@material-ui/core';
class Dashboard extends Component {
  state = {}
  render() {
    return (
      <Grid direction="row" container>
        <Grid item xs={11} style={{ marginTop: '2%' }}>
          <Segment>
            <Row gutter={16}>
              <Col className="gutter-row" span={5}>
                <div className="gutter-box">
                  <Card title="Opened Defect" style={{ width: '100%', textAlign: 'center' }}>
                    <Progress type="dashboard" strokeColor="darkblue" percent={75} />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={5}>
                <div className="gutter-box">
                  <Card title="Fixed Defect" style={{ width: '100%', textAlign: 'center' }}>
                    <Progress type="dashboard" strokeColor="gray" percent={20} />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={5}>
                <div className="gutter-box">
                  <Card title="Reopened Defect" style={{ width: '100%', textAlign: 'center' }}>
                    <Progress type="dashboard" strokeColor="purple" percent={55} />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={5}>
                <div className="gutter-box">
                  <Card title="Rejected Defect" style={{ width: '100%', textAlign: 'center' }}>
                    <Progress type="dashboard" percent={95} />
                  </Card>
                </div>
              </Col>
            </Row>
            <Row style={{ padding: 30 }}></Row>
            <Row gutter={16}>
              <Col className="gutter-row" span={10}>
                <div className="gutter-box">
                  <Card title="Severity Meater " style={{ width: '100%', textAlign: 'center' }}>
                    <div style={{ width: '100%' }}>
                      <Progress percent={30} strokeColor="purple" />
                      <Progress percent={50} strokeColor="blue" />
                      <Progress percent={70} strokeColor="rose" />
                      <Progress percent={20} strokeColor="red" />
                    </div>
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={10}>
                <div className="gutter-box" >
                  <Card title="Severity Meater " style={{ width: '100%', textAlign: 'center',position:'absolute',height:'50px' }}>
                    <div style={{ width: '100%' }}>
                      <Image alt="description of image" src="https://docs.devexpress.com/MobileControls/images/ios/chart-elements.png" style={{height:'100%',position:'absolute'}} />
                    </div>
                  </Card>
                </div>
              </Col>
            </Row>
            <Row >
              <Col className="gutter-row" span={10}>
                <Card title="Line Chart " style={{ width: '100%' }}>
                  <div style={{ width: '100%' }}>
                    <Image alt="description of image" src="https://www.excel-easy.com/examples/images/line-chart/line-chart.png" style={{ width: '100%' }} />
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
          </Segment>
        </Grid>
      </Grid>
    );
  }
}

export default Dashboard;