import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { Grid } from "@material-ui/core";
import PriorityAdd from "./PriorityAdd";
import BreadCrumbs from "../../../components/breadCrumbs/breadCrumbs";
import Table from "../../../components/tables/table";
import { Button } from "semantic-ui-react";
import { Popconfirm, message } from "antd";
import EditPriority from "./EditPriority";
import { connect } from "react-redux";
import {
  changeDataValues,
  getprioityData,
  updatePriority,
  deletePriority
} from "../../../fileAction/priorityConfigAction";

const mapStateToProps = state => ({
  data: state.priorityState.priorityState
});
const mapDispatchToProps = {
  changeDataValues,
  getprioityData,
  updatePriority,
  deletePriority
};
class PriorityConfig extends Component {
  state = { open: false, value: false };
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
  handleOpenedit = Data => {
    this.setState({
      value: true
    });
  };
  // handleChangeColor = color => {
  //   this.setState({
  //     color: color.hex,
  //     tempColor: (
  //       <span
  //         style={{
  //           backgroundColor: color.hex,
  //           borderRadius: 20,
  //           width: 10
  //         }}
  //       >
  //         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  //       </span>
  //     )
  //   });
  // };

  handleCloseedit = () => {
    this.setState({
      value: false
    });
  };

  componentDidMount() {
    this.props.getprioityData();
  }
  confirm = id => {
    this.props.deletePriority(id);
    message.error("Deleted CuccessFully");
  };
  render() {
    // const ProjectAllocation = () => {
    //     const [open, setOpen] = useState({
    //        open: false,
    //        value: false
    //     });

    //const text = "Are you sure delete this task?"; //Delete button

    // function confirm(id) {
    //   message.info("Click on Yes.");
    // }

    const columns = [
      {
        title: "Priority",
        dataIndex: "name",

        //    filters: [
        //       {
        //          text: 'Joe',
        //          value: 'Joe',
        //       },
        //       {
        //          text: 'Jim',
        //          value: 'Jim',
        //       },
        //    ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        //    onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.priority.length - b.priority.length,
        sortDirections: ["descend"]
      },
      {
        title: "Description",
        dataIndex: "description",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.age - b.age
      },

      {
        title: "Color",
        dataIndex: "color",
        render: tag => (
          <p
            style={{
              backgroundColor: `${tag}`,
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              marginLeft: "40%"
            }}
          ></p>
        ),
        defaultSortOrder: "descend",

        sorter: (a, b) => a.age - b.age
      },

      {
        title: "Action",
        render: (Item, key) => (
          <Button.Group>
            <Button secondary onClick={() => this.handleOpenedit(key)}>
              Edit
            </Button>
            <Button.Or />

            <Popconfirm
              placement="topRight"
              title="Are You sure To delete this prioirty"
              onConfirm={() => this.confirm(key.priorityId)}
              okText="Yes"
              cancelText="No"
            >
              <Button negative>Delete</Button>
            </Popconfirm>
          </Button.Group>
        )
      }
    ];

    return (
      <div style={{ marginRight: "2%" }}>
        <Grid direction="row" container>
          <Grid item xs={11} style={{ marginTop: "2%" }}>
            <Segment>
              <BreadCrumbs />
              <PriorityAdd
                open={this.state.open}
                handleOpen={this.handleOpen}
                handleClose={this.handleClose}
                changeDataValues={this.props.changeDataValues}
              />
              <EditPriority
                open={this.state.value}
                handleOpen={this.handleOpenedit}
                handleClose={this.handleCloseedit}
              />
              <Button className="primary" onClick={this.handleOpen}>
                Add Priority
              </Button>
              <Table column={columns} data={this.props.data} />
            </Segment>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PriorityConfig);
