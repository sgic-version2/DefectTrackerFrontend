import React, { Component } from "react";
import { Segment} from "semantic-ui-react";
import { Grid } from "@material-ui/core";
import DesignationAdd from "./DesignationAdd";
import EditDefect from "./EditDesignation";
import Table from "../../components/tables/table";
import { Button } from "semantic-ui-react";
import { Popconfirm, message } from "antd";
import EditDesignation from "./EditDesignation";
import { connect } from "react-redux";
import { changeDataValues,
         updateDesignation,
         deleteDesignation,
         getDesignation 
}from "./../../fileAction/designationConfigAction";
import IconBreadcrumbs from "../../components/breadCrumbs/breadCrumbs";

const mapStateToProps = state => ({
  data: state.designationConfigData.designationConfigDetailsFromState
});
const mapDispatchToProps = {
  changeDataValues,
  updateDesignation,
  deleteDesignation,
  getDesignation
};
class DesignationnConfig extends Component {
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
    this.props.getDesignation();
  }
  confirm = id => {
    this.props.deleteDesignation(id);
    message.error("Deleted SuccessFully");
  };
  render() {
    const columns = [
      {
        title: "Defect Status",
        dataIndex: "designationName"
      },
      {
        title: " Description",
        dataIndex: "description"
      },
      {
        title: "Action",
        render:  (item, key)  =>
          <Button.Group>
            <Button onClick={() => this.handleOpen(key)} secondary>
              Edit
            </Button>

            <Button.Or />
            <Popconfirm
              placement="bottomRight"
              title="Are you sure to delete this Status?"
              onConfirm={() => this.confirm(key.designationId)}
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
              <IconBreadcrumbs />
              <DesignationAdd
                open={this.state.openAddStatus}
                handleOpen={this.handleOpenAddStatus}
                handleClose={this.handleCloseAddStatus}
                changeDataValues={this.props.changeDataValues}
              />
              <Button primary onClick={this.handleOpenAddStatus}>
                Add Status
              </Button>
              <Table column={columns} data={this.props.data} />
              <EditDesignation
                open={this.state.open}
                handleOpen={this.handleOpen}
                handleClose={this.handleClose}
                selectedID={this.state.selectedID}
                // selectedData={this.state.selectedData}
                updateDesignation={this.props.updateDesignation}
              />
            </Segment>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignationnConfig);
