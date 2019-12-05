import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { Grid } from "@material-ui/core";
// import BreadCrumbs from "../../../components/breadCrumbs/breadCrumbs";

import { Button } from "semantic-ui-react";
import AddButton from "./AddButton";
import EditProject from "./EditProject";
import { connect } from "react-redux";

import IconBreadcrumbs from "../../components/breadCrumbs/breadCrumbs";
import Table from '../../components/tables/table';
import { changeDataValues, getProjectDetails } from '../../fileAction/projectDetailsAction';


const mapStateToProps = (state) => ({
  data: state.projectDetailsData.projectDetailsFromState


})
const mapDispatchToProps = {
  changeDataValues, getProjectDetails
};

class ProjectDetails extends Component {
  state = {
    open: false,
    selectedID: ''
  };
  handleOpen = (id) => {
    this.setState({
      open: true,
      selectedID: id
    });
    
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };
  componentDidMount() {
    this.props.getProjectDetails()


  }
  render() {
    const columns = [
      {
        title: "Project Name",
        dataIndex: "project_name"
      },
      {
        title: " Type",
        dataIndex: "project_type"
      },
      // {
      //   title: " Duration",
      //   dataIndex: "duration"
      // },
      {
        title: " Duration",
        dataIndex: "start_date"
      },
      {
        title: " Duration",
        dataIndex: "end_date"
      },
      {
        title: " status",
        dataIndex: "status"
      },


      {
        title: "Action",
        render: (item, key) => <Button.Group>
          <EditProject
            open={this.state.open}
            handleOpen={this.handleOpen}
            handleClose={this.handleClose}
            selectedId={this.state.selectedID}
          />
          <Button onClick={()=>this.handleOpen(key)} secondary>
            Edit
        </Button>

          <Button.Or />
          <Button negative>Delete</Button>
        </Button.Group>
      }
    ];
  
   
    return (
      <div>
        <Grid direction="row" container>
          <Grid item xs={11} style={{ marginTop: "2%" }}>
            <Segment>
              <IconBreadcrumbs />
              <AddButton changeDataValues={this.props.changeDataValues} />
              <Table column={columns} data={this.props.data} />
            </Segment>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
