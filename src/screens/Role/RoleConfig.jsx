import React, { Component } from "react";
import { Segment} from "semantic-ui-react";
import { Grid } from "@material-ui/core";
import RoleAdd from "./RoleAdd";
import EditDefect from "./EditRole";
import Table from "../../components/tables/table";
import { Button } from "semantic-ui-react";
import { Popconfirm, message } from "antd";
import EditRole from "./EditRole";
import { connect } from "react-redux";
import { changeDataValues,
         updateRole,
         deleteRole,
         getRole 
}from "./../../fileAction/roleConfigAction";
import IconBreadcrumbs from "../../components/breadCrumbs/breadCrumbs";


const mapStateToProps = state => ({
  data: state.roleConfigData.roleDetailsFromState
});
const mapDispatchToProps = {
      changeDataValues,
      updateRole,
      deleteRole,
      getRole
};
class RoleDetails extends Component {
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
    this.props.getRole();
  }
  confirm = id => {
    this.props.deleteRole(id);
    message.error("Deleted SuccessFully");
  };
  render() {
    
      const columns = [
        {
          title: "Defect Status",
          dataIndex: "role_name"
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
              title="Are you sure to delete this Status?"
              onConfirm={() => this.confirm(key.rid)}
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
              <RoleAdd
                open={this.state.openAddStatus}
                handleOpen={this.handleOpenAddStatus}
                handleClose={this.handleCloseAddStatus}
                changeDataValues={this.props.changeDataValues}
              />
              <Button primary onClick={this.handleOpenAddStatus}>
                Add Status
              </Button>
              <Table column={columns} data={this.props.data} />
              <EditRole
                open={this.state.open}
                handleOpen={this.handleOpen}
                handleClose={this.handleClose}
                selectedID={this.state.selectedID}
                // selectedData={this.state.selectedData}
                updateRole={this.props.updateRole}
              />
            </Segment>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RoleDetails);

