import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { Grid } from "@material-ui/core";

import BreadCrumbs from "../../components/breadCrumbs/breadCrumbs";

import { Button } from "semantic-ui-react";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
// import EditCompany from '../../screens/company/EditCompany';
import { Popconfirm, message } from "antd";

import AddButton from "./AddButton";
import AddSubModule from "./AddSubModule";
import EditModule from "./EditModule";
import SubContentable from "../../components/tables/SubContentable";

const text = "Are you sure delete this task?"; //Delete button

function confirm() {
  message.info("Click on Yes.");
}
export default class ModuleList extends Component {
  state = {
    open: false,
    open1: false
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
  handleOpen1 = () => {
    console.log(this.state.open1);
    this.setState({
      open1: true
    });
  };

  handleClose1 = () => {
    this.setState({
      open1: false
    });
  };
  render() {
    const columns = [
      {
        title: "Module Id",
        dataIndex: "regid",
        key: "regid",
        filters: [
          {
            text: "Joe",
            value: "Joe"
          },
          {
            text: "Jim",
            value: "Jim"
          }
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.regid.indexOf(value) === 0,
        sorter: (a, b) => a.regid.length - b.regid.length,
        sortDirections: ["descend"]
      },
      {
        title: "Module Name",
        dataIndex: "companyname",
        key: "companyname",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.age - b.age
      },
      {
        dataIndex: "addsubmodule",
        title: "Add Sub Module",
        key: "addsubmodule",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.more - b.more
      },
      {
        title: "Action",
        key: "action",

        dataIndex: "action",
        defaultSortOrder: "descend"
      }
    ];
    const data = [
      {
        key: "1",
        regid: "SGIC-001",
        companyname: "Admin",
        addsubmodule: (
          <AddCircleOutlineRoundedIcon onClick={this.handleOpen1} />
        ),

        action: (
          <Button.Group>
            <EditModule
              open={this.state.open}
              handleOpen={this.handleOpen}
              handleClose={this.handleClose}
            />
            <Button onClick={this.handleOpen} secondary>
              Edit
            </Button>
            <Button.Or />
            <Popconfirm
              placement="topRight"
              title={text}
              onConfirm={confirm}
              okText="yes"
              cancelText="No"
            >
              <Button negative>Delete</Button>
            </Popconfirm>
          </Button.Group>
        )
      },
      {
        key: "2",
        regid: "SGIC-001",
        companyname: "Admin",
        addsubmodule: (
          <AddCircleOutlineRoundedIcon onClick={this.handleOpen1} />
        ),

        action: (
          <Button.Group>
            <EditModule
              open={this.state.open}
              handleOpen={this.handleOpen}
              handleClose={this.handleClose}
            />
            <Button onClick={this.handleOpen} secondary>
              Edit
            </Button>
            <Button.Or />
            <Popconfirm
              placement="topRight"
              title={text}
              onConfirm={confirm}
              okText="yes"
              cancelText="No"
            >
              <Button negative>Delete</Button>
            </Popconfirm>
          </Button.Group>
        )
      },
      {
        key: "3",
        regid: "SGIC-002",
        companyname: "Login",
        addsubmodule: (
          <AddCircleOutlineRoundedIcon onClick={this.handleOpen1} />
        ),

        action: (
          <Button.Group>
            <EditModule
              open={this.state.open}
              handleOpen={this.handleOpen}
              handleClose={this.handleClose}
            />
            <Button onClick={this.handleOpen} secondary>
              Edit
            </Button>
            <Button.Or />
            <Popconfirm
              placement="topRight"
              title={text}
              onConfirm={confirm}
              okText="yes"
              cancelText="No"
            >
              <Button negative>Delete</Button>
            </Popconfirm>
          </Button.Group>
        )
      }
    ];
    const subtabledata = [
     
      
    ];
    return (
      <div>
        <Grid item xs={11} style={{ marginTop: "2%" }}>
          <Segment>
            <BreadCrumbs />
            <AddButton />
            <SubContentable column={columns} data={data} TableData={subtabledata}/>
            {/* {this.state.open1 && <AddSubModule open={this.state.open1} handleOpen1={this.handleOpen1} handleClose1={this.handleClose1} />} */}
            <AddSubModule
              open1={this.state.open1}
              handleOpen1={this.handleOpen1}
              handleClose1={this.handleClose1}
            />
          </Segment>
        </Grid>
      </div>
    );
  }
}
