import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { Grid } from "@material-ui/core";
import BreadCrumbs from "../../../components/breadCrumbs/breadCrumbs";
import Table from "../../../components/tables/table";
import { Button } from "semantic-ui-react";
import AddButton from "./AddButton";
import EditDefectType from "./EditDefectType";
import { connect } from "react-redux";
import { changeDataValues } from './../../../fileAction/defectTypeAction';


const mapStateToProps = (state) => ({
  data: state.defectTypeData.defectTypeDetailsFromState
 

})
const mapDispatchToProps = {
  changeDataValues
};

class DefectConfic extends Component {
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
        title: "Action",
        render:item=>  <Button.Group>
        <EditDefectType
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
    //         <EditDefectType
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
              <AddButton changeDataValues={this.props.changeDataValues}/>
              <Table column={columns} data={this.props.data} />
            </Segment>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DefectConfic);
