import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import { Grid } from '@material-ui/core';

import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs';

import Table from '../../components/tables/table';
import { Button } from 'semantic-ui-react';
import AddEmployeeButton from './AddEmployeeButton';
import EditEmployee from './EditForm';
import { connect } from 'react-redux';
import {
  changeDataValues,
  getEmployeeDetails,
  updateEmployee,
  deleteEmployee
} from './../../fileAction/employeeAction';
import { message, Popconfirm } from 'antd';

const mapStateToProps = state => ({
  data: state.emplyeeState.employeeState
});
const mapDispatchToProps = {
  changeDataValues,
  getEmployeeDetails,
  updateEmployee,
  deleteEmployee
};

class CompanyEmployee extends Component {
  state = {
    open: false,
    selectedData: '',
    openEdit: false
  };
  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };
  handleOpenEdit = Data => {
    this.setState({
      openEdit: true,
      selectedData: Data
    });
  };

  handleCloseEdit = () => {
    this.setState({
      openEdit: false
    });
  };

  componentDidMount() {
    this.props.getEmployeeDetails();
  }
  confirm = id => {
    this.props.deleteEmployee(id);
    message.error('Deleted SuccessFully');
  };

  render() {
    const columns = [
      {
        title: 'First Name',
        dataIndex: 'firstname'
      },
      {
        title: ' Last Name',
        dataIndex: 'lastname'
      },
      {
        title: 'Email',
        dataIndex: 'email'
      },
      {
        title: 'Phone Number',
        dataIndex: 'phone'
      },

      {
        title: 'Action',
        render: (item, key) => (
          <Button.Group>
            <EditEmployee
              open={this.state.openEdit}
              handleOpen={this.handleOpenEdit}
              handleClose={this.handleCloseEdit}
              selectedData={this.state.selectedData}
              updateEmployee={this.props.updateEmployee}
            />
            <Button onClick={() => this.handleOpenEdit(key)} secondary>
              Edit
            </Button>

            <Button.Or />
            <Popconfirm
              placement='bottomRight'
              title='Are you sure to delete this Employee?'
              onConfirm={() => this.confirm(key.employeeId)}
              okText='Yes'
              cancelText='No'
            >
              <Button negative>Delete</Button>
            </Popconfirm>
          </Button.Group>
        )
      }
    ];

    return (
      <div>
        <Grid direction='row' container>
          <Grid item xs={11} style={{ marginTop: '2%' }}>
            <Segment>
              <BreadCrumbs />
              <AddEmployeeButton
                changeDataValues={this.props.changeDataValues}
                open={this.state.open}
                handleOpen={this.handleOpen}
                handleClose={this.handleClose}
              />
              <Table column={columns} data={this.props.data} />
            </Segment>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CompanyEmployee);
