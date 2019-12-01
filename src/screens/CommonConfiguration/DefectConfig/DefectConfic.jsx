import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { Grid } from "@material-ui/core";
import BreadCrumbs from "../../../components/breadCrumbs/breadCrumbs";
import Table from "../../../components/tables/table";
import { Popconfirm, message } from 'antd'
import { Button } from "semantic-ui-react";
import AddButton from "./AddButton";
import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';
import EditDefectType from "./EditDefectType";
import { connect } from "react-redux";
import { changeDataValues, upadateDefectType } from './../../../fileAction/defectTypeAction';

const text = 'Are you sure delete this task?'; //Delete button

function confirm() {
  message.info('Click on Yes.');
}

const mapStateToProps = (state) => ({
  data: state.defectTypeData.defectTypeDetailsFromState,
  updatedData: state.defectTypeData.defectTypeUpdateDetails

});

const mapDispatchToProps = {
  changeDataValues,
  upadateDefectType
};

class DefectConfic extends Component {

  state = {
    open: false,
    openSub: false
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

  handleOpenSub = () => {
    this.setState({
      openSub: true
    });
  };

  handleCloseSub = () => {
    this.setState({
      openSub: false
    });
  };

  handleUpdateSubmit = (data) => {
    this.props.upadateDefectType(data);
    this.handleOpen();
  }
  render() {
    const columns = [
      {
        title: "Defect Type",
        dataIndex: "name"
      },
      {
        title: " Description",
        dataIndex: "description"
      },
      {
        title: " DefectValue",
        dataIndex: "defectValue"
      },
      {
        render: (item, key) => <Button.Group>
          <EditDefectType
            open={this.state.open}
            handleOpen={this.handleOpen}
            handleClose={this.handleClose}
            upadateDefectType={this.props.upadateDefectType}
          // updatedData = {this.state.updatedData}
          />
          <Button onClick={this.handleUpdateSubmit(key)} secondary>
            Edit
    </Button>

          <Button.Or />
          <Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="yes" cancelText="No">
            <Button negative>Delete</Button>
          </Popconfirm>
        </Button.Group>

      },
      {
        title: 'More',
        render: item => <MoreOutlinedIcon onClick={this.handleOpenSub} />,
      },
    ];

    console.log("hg" + this.props.data);
    return (
      <div>
        <Grid direction="row" container>
          <Grid item xs={11} style={{ marginTop: "2%" }}>
            <Segment>
              <BreadCrumbs />
              <AddButton changeDataValues={this.props.changeDataValues} />
              <Table column={columns} data={this.props.data} />
            </Segment>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DefectConfic);
