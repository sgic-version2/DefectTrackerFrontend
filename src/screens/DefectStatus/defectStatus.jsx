
import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { Grid } from "@material-ui/core";
import { Button } from "semantic-ui-react";
<<<<<<< HEAD
import AddButton from "./addDefectStatusButton";
import EditDefectStatus from "./editDefectStatus";


import { connect } from "react-redux";
import { changeDataValuesStatus } from './../../fileAction/addDefectStatusAction';
=======
import { connect } from "react-redux";
import IconBreadcrumbs from "../../components/breadCrumbs/breadCrumbs";
import Table from "../../components/tables/table";
>>>>>>> jeyaamuthan

import EditDefect from "./SubmitModel";
import { Popconfirm, message } from "antd";
import AddDefectStatus from "./addDefectStatusButton";

import {
  getDefectStatus,
  changeDataValuesStatus,
  getDefectStatusByID,
  upateDefectStatus,
  deleteDefectStatus
} from "./../../fileAction/addDefectStatusAction";

const mapStateToProps = state => ({
  data: state.defectStatusData.defectStatusDetailsFromState
});
const mapDispatchToProps = {
<<<<<<< HEAD
  changeDataValuesStatus
=======
  getDefectStatus,
  changeDataValuesStatus,
  getDefectStatusByID,
  upateDefectStatus,
  deleteDefectStatus
>>>>>>> jeyaamuthan
};

class DefectStatus extends Component {
  state = {
    open: false,
    openAddStatus: false,
    selectedID: ""
  };
  handleOpen = id => {
    this.setState({
      open: true,
      selectedID: id
    });
  };
  handleOpenAddStatus = () => {
    this.setState({
      openAddStatus: true
    });
  };
  handleCloseAddStatus = () => {
    this.setState({
      openAddStatus: false
    });
  };
  handleClose = () => {
    this.setState({
      open: false
    });
  };
  componentDidMount() {
    this.props.getDefectStatus();
  }
  confirm = id => {
    this.props.deleteDefectStatus(id);
    message.error("Deleted SuccessFully");
  };
  render() {
<<<<<<< HEAD
    const columns = [
      {
        title: "Defect Status",
        dataIndex: "statusName"
      },
      {
        title: " Description",
        dataIndex: "description"
      },
      {
        title: " DefectValue",
        dataIndex: "defectValue"
      },
=======
    
      const columns = [
        {
          title: "Defect Status",
          dataIndex: "name"
        },
        {
          title: " Description",
          dataIndex: "description"
        },
        
  
>>>>>>> jeyaamuthan

      {
        title: "Action",
        render: (item, key) =>
          <Button.Group>
            <Button onClick={() => this.handleOpen(key)} secondary>
              Edit
            </Button>

            <Button.Or />
            <Popconfirm
              placement="bottomRight"
              title="Are you sure to delete this Status?"
              onConfirm={() => this.confirm(key.statusId)}
              okText="Yes"
              cancelText="No"
            >
              <Button negative>Delete</Button>
            </Popconfirm>
          </Button.Group>
      }
    ];
     const data = [
      {
        key: "1",
        name: "Arithmetic Defects",
        description: "High",
        action: (
          <Button.Group>
            <EditDefect
              open={this.state.open}
              handleOpen={this.handleOpen}
              handleClose={this.handleClose}
            />
            <Button onClick={this.handleOpen} secondary>
              Edit
            </Button>

            <Button.Or />
            <Button negative>Delete</Button>
          </Button.Group>
        )
      }
    ];


    return (
      <div>
        <Grid direction="row" container>
          <Grid item xs={11} style={{ marginTop: "2%" }}>
            <Segment>
<<<<<<< HEAD
              <BreadCrumbs />
              <AddButton changeDataValues={this.props.changeDataValuesStatus}/>
=======
              <IconBreadcrumbs />
              <AddDefectStatus
                open={this.state.openAddStatus}
                handleOpen={this.handleOpenAddStatus}
                handleClose={this.handleCloseAddStatus}
                changeDataValuesStatus={this.props.changeDataValuesStatus}
              />
              <Button primary onClick={this.handleOpenAddStatus}>
                Add Status
              </Button>
>>>>>>> jeyaamuthan
              <Table column={columns} data={this.props.data} />
              <EditDefect
                open={this.state.open}
                handleOpen={this.handleOpen}
                handleClose={this.handleClose}
                selectedID={this.state.selectedID}
                // selectedData={this.state.selectedData}
                upateDefectStatus={this.props.upateDefectStatus}
              />
            </Segment>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DefectStatus);
