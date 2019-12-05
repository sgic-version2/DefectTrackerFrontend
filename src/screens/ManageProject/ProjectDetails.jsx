import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { Grid } from "@material-ui/core";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import IconBreadcrumbs from "../../components/breadCrumbs/breadCrumbs";
import Table from '../../components/tables/table';
import { changeDataValues, getProjectDetails, upateProject, deleteProject } from '../../fileAction/projectDetailsAction';
import EditDefect from './SubmitModel'
import { Popconfirm, message } from "antd";
import AddProject from './AddButton'


const mapStateToProps = (state) => ({
  data: state.projectDetailsData.projectDetailsFromState
})
const mapDispatchToProps = {
  changeDataValues, getProjectDetails, upateProject, deleteProject
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
    console.log(this.state.open);
    
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };
  componentDidMount() {
    this.props.getProjectDetails()
  }
  confirm = (id) => {
    this.props.deleteProject(id)
    message.error('Deleted SuccessFully');
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
          <Button onClick={() => this.handleOpen(key)} secondary>
            Edit
        </Button>

          <Button.Or />
          <Popconfirm
            placement="bottomRight"
            title='Are you sure to delete this Project?'
            onConfirm={() => this.confirm(key.project_id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              negative>Delete</Button>
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
              <Button primary onClick={this.handleOpen}>Add Project</Button>
              <AddProject
                changeDataValues={this.props.changeDataValues} 
                open={this.state.open}
                handleOpen={this.handleOpen}
                handleClose={this.handleClose} />
              <Table column={columns} data={this.props.data} />
              <EditDefect
                open={this.state.open}
                handleOpen={this.handleOpen}
                handleClose={this.handleClose}
                selectedID={this.state.selectedID}
                // selectedData={this.state.selectedData}
                upateProject={this.props.upateProject} />
            </Segment>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
