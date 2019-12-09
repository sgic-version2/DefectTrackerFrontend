import React, { Component } from "react";
import { Segment, Breadcrumb } from "semantic-ui-react";
import { Grid, Breadcrumbs } from "@material-ui/core";
import DesignationAdd from "./DesignationAdd";

import Table from "../../components/tables/table";
import { Button } from "semantic-ui-react";
import { Popconfirm, message } from "antd";
import EditDesignation from "./EditDesignation";
import { connect } from "react-redux";
import { changeDataValues } from "./../../fileAction/designationConfigAction";

const mapStateToProps = state => ({
  data: state.designationConfigData.designationConfigDetailsFromState
});
const mapDispatchToProps = {
  changeDataValues
};
class DesignationnConfig extends Component {
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
  handleOpenedit = () => {
    this.setState({
      value: true
    });
  };

  handleCloseedit = () => {
    this.setState({
      value: false
    });
  };
  render() {
    // const ProjectAllocation = () => {
    //     const [open, setOpen] = useState({
    //        open: false,
    //        value: false
    //     });

    const text = "Are you sure delete this task?"; //Delete button

    function confirm() {
      message.info("Click on Yes.");
    }

    const columns = [
      {
        title: "Designation",
        dataIndex: "designationName",

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
        sorter: (a, b) => a.designation.length - b.designation.length,
        sortDirections: ["descend"]
      },
      {
        title: "Action",
        render: item => (
          <Button.Group>
            <Button secondary onClick={this.handleOpenedit}>
              Edit
            </Button>
            <Button.Or />

            <Popconfirm
              placement="topRight"
              title={text}
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <Button negative>Delete</Button>
            </Popconfirm>
          </Button.Group>
        )
      }
    ];
   //  const data = [
   //    {
   //      key: "1",
   //      priority: "High",
   //      description: "High Priority",
   //      icon: <Icon name="arrow up" />,

   //      color: "New York No. 1 Lake Park",
   //      action: (
   //        <Button.Group>
   //          <Button secondary onClick={this.handleOpenedit}>
   //            Edit
   //          </Button>
   //          <Button.Or />

   //          <Popconfirm
   //            placement="topRight"
   //            title={text}
   //            onConfirm={confirm}
   //            okText="Yes"
   //            cancelText="No"
   //          >
   //            <Button negative>Delete</Button>
   //          </Popconfirm>
   //        </Button.Group>
   //      )
   //    },
   //    {
   //      key: "2",
   //      priority: "Medium ",
   //      description: "Medium Priority",

   //      icon: <Icon name="exchange" />,
   //      color: tempcolor,
   //      action: (
   //        <Button.Group>
   //          <Button secondary onClick={this.handleOpenedit}>
   //            Edit
   //          </Button>
   //          <Button.Or />
   //          <Popconfirm
   //            placement="topRight"
   //            type="danger"
   //            title={text}
   //            onConfirm={confirm}
   //            okText="Yes"
   //            cancelText="No"
   //          >
   //            <Button negative>Delete</Button>
   //          </Popconfirm>
   //        </Button.Group>
   //      )
   //    }
   //    // {
   //    //    key: '3',
   //    //    priority: 'Low',
   //    //    description: 'Low Priority',
   //    //    icon: <Icon name='arrow down' />,
   //    //    color: <span>hfd</span>,
   //    //    action: <Button.Group>
   //    //       <Button secondary onClick={this.handleOpenedit}>Edit</Button>
   //    //       <Button.Or />
   //    //       {/* <Button negative>Delete</Button> */}
   //    //       <Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
   //    //          <Button negative>Delete</Button>
   //    //       </Popconfirm>
   //    //    </Button.Group>
   //    // },
   //    // {
   //    //    key: '4',
   //    //    name: 'Jim Red',
   //    //    age: 32,
   //    //    address: 'London No. 2 Lake Park',
   //    //    action: <Button.Group>
   //    //       <Button secondary>Edit</Button>
   //    //       <Button.Or />
   //    //       <Button negative>Delete</Button>
   //    //    </Button.Group>
   //    // },
   //  ];

    return (
      <div style={{ marginRight: "2%" }}>
        <Grid direction="row" container>
          <Grid item xs={11} style={{ marginTop: "2%" }}>
            <Segment>
              <Breadcrumb />
              <DesignationAdd
                open={this.state.open}
                handleOpen={this.handleOpen}
                handleClose={this.handleClose}
                changeDataValues={this.props.changeDataValues}
              />
              <EditDesignation
                open={this.state.value}
                handleOpen={this.handleOpenedit}
                handleClose={this.handleCloseedit}
              />
              <Button className="primary" onClick={this.handleOpen}>
                Add Designation
              </Button>
              <Table column={columns} data={this.props.data} />
            </Segment>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignationnConfig);
