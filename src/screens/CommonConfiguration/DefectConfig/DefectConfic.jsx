import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { Grid } from "@material-ui/core";
import IconBreadcrumbs from "../../../components/breadCrumbs/breadCrumbs";
import Table from "../../../components/tables/table";
import { Button } from "semantic-ui-react";
import AddButton from "./AddButton";
import EditDefectType from "./EditDefectType";
import { connect } from "react-redux";
import { Popconfirm, message } from "antd";
import { changeDataValuesType,getDefectType,getDefectTypeByID,upateDefectType,deleteDefectType } from './../../../fileAction/defectTypeAction';


const mapStateToProps = (state) => ({
  data: state.defectTypeData.defectTypeDetailsFromState
 

})
const mapDispatchToProps = {
  changeDataValuesType,
  getDefectType,
  getDefectTypeByID,
  upateDefectType,
  deleteDefectType 

};

class DefectConfic extends Component {
  state = {
    open: false,
    openAddType:false,
    selectedID:""
  };
  handleOpen = id => {
    this.setState({
      open: true,
      selectedID: id
    });
  };
  handleOpenAddType = () => {
    this.setState({
      openAddType: true
    });
  };
  handleCloseAddType = () => {
    this.setState({
      openAddType: false
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  componentDidMount() {
    this.props.getDefectType();
  }
  confirm = id => {
    this.props.deleteDefectType(id);
    message.error("Deleted SuccessFully");
  };


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
        title: "Action",
        render: (item, key) =>
          <Button.Group>
            <Button onClick={() => this.handleOpen(key)} secondary>
              Edit
            </Button>

            <Button.Or />
            <Popconfirm
              placement="bottomRight"
              title="Are you sure to delete this Defect Type?"
              onConfirm={() => this.confirm(key.typeId)}
              okText="Yes"
              cancelText="No"
            >
              <Button negative>Delete</Button>
            </Popconfirm>
          </Button.Group>
      }
    ];
    
 


    return (
      <div>
        <Grid direction="row" container>
          <Grid item xs={11} style={{ marginTop: "2%" }}>
            <Segment>
              <IconBreadcrumbs />
              <AddButton
                open={this.state.openAddType}
                handleOpen={this.handleOpenAddType}
                handleClose={this.handleCloseAddType}
                changeDataValuesType={this.props.changeDataValuesType}
              />
              <Button primary onClick={this.handleOpenAddType}>
                Add Status
              </Button>
              <Table column={columns} data={this.props.data} />
              <EditDefectType
                open={this.state.open}
                handleOpen={this.handleOpen}
                handleClose={this.handleClose}
                selectedID={this.state.selectedID}
                // selectedData={this.state.selectedData}
                upateDefectType={this.props.upateDefectType}
              />
            </Segment>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DefectConfic);
