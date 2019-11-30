import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { Grid } from "@material-ui/core";

import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs'

import Table from '../../components/tables/table'
import { Button } from "semantic-ui-react";
import AddEmployeeButton from "./AddEmployeeButton";
import EditEmployee from "./EditEmployee";
import { connect } from "react-redux";
import { changeDataValues } from './../../fileAction/defectTypeAction';


const mapStateToProps = (state) => ({
  data: state. defectTypeData.defectTypeDetailsFromState
 

})
const mapDispatchToProps = {
  changeDataValues
};

class CompanyEmployee extends Component {
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
        title: "UserName",
        dataIndex: "username"
      },
      {
        title: "First Name",
        dataIndex: "firstname"
      },
      {
        title: " Middle Name",
        dataIndex: "middlename"
      },
      {
        title: " Last name",
        dataIndex: "lastname"
      },

      {
        title: "Action",
        render:item=>  <Button.Group>
        <EditEmployee
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
    //     defecttype: "Arithmetic Defects",
    //     description: "High",
    //     action: (
    //       <Button.Group>
    //         <EditEmployee
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
              <BreadCrumbs />
              <AddEmployeeButton changeDataValues={this.props.changeDataValues}/>
              <Table column={columns} data={this.props.data} />
            </Segment>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CompanyEmployee);
