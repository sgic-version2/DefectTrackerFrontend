import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { Grid } from "@material-ui/core";
// import axios from "axios";

// import BreadCrumbs from "../../../components/breadCrumbs/breadCrumbs";

import { Button } from "semantic-ui-react";
import AddButton from "./AddButton";
import EditProject from "./EditProject";
import { connect } from "react-redux";

import IconBreadcrumbs from "../../components/breadCrumbs/breadCrumbs";
import Table from '../../components/tables/table';
import { changeDataValues } from '../../fileAction/projectDetailsAction';


const mapStateToProps = (state) => ({
  data: state.projectDetailsData.projectDetailsFromState
 

})
const mapDispatchToProps = {
  changeDataValues
};

class ProjectDetails extends Component {
  state = {
    open: false
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

  render() {
    const columns = [
      {
        title: "Project Name",
        dataIndex: "project_name"
      },
      {
        title: " Type",
        dataIndex: "type"
      },
      {
        title: " Duration",
        dataIndex: "duration"
      },
      {
        title: " status",
        dataIndex: "status"
      },
      

      {
        title: "Action",
        render:item=>  <Button.Group>
        <EditProject
          open={this.state.open}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
        />
        <Button onClick={this.handleOpen} secondary>
          Edit
        </Button>

        <Button.Or />
        <Button negative>Delete</Button>
      </Button.Group>    }
    ];
    // const data = [
    //   {
    //     key: "1",
    //     project_name: "Arithmetic Defects",
    //     description: "High",
    //     action: (
    //       <Button.Group>
    //         <EditProject
    //           open={this.state.open}
    //           handleOpen={this.handleOpen}
    //           handleClose={this.handleClose}
    //         />
    //         <Button onClick={this.handleOpen} secondary>
    //           Edit
    //         </Button>

    //         <Button.Or />
    //         <Button negative>Delete</Button>
    //       </Button.Group>
    //     )
    //   }
    // ];
    console.log("hg"+this.props.data);
    return (
      <div>
        <Grid direction="row" container>
          <Grid item xs={11} style={{ marginTop: "2%" }}>
            <Segment>
              <IconBreadcrumbs/>
              <AddButton changeDataValues={this.props.changeDataValues}/>
              <Table column={columns} data={this.props.data} />
            </Segment>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
