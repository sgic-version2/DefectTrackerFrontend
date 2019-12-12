import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { Grid } from "@material-ui/core";
import SeverityAdd from "./SeverityAdd";
import BreadCrumbs from "../../../components/breadCrumbs/breadCrumbs";
import Table from "../../../components/tables/table";
import { Button } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
import { Popconfirm, message } from "antd";
import EditSeverity from "./EditSeverity";
import { connect } from "react-redux";
import {
  changeDataValues,
  getserverityData,
  updateServerity,
  deleteServerity

} from "../../../fileAction/severityConfigAction";


const mapStateToProps = state => ({
  data: state.serverityState.serverityState
  
});
const mapDispatchToProps = {
  changeDataValues,
  getserverityData,
  updateServerity,
  deleteServerity
};

class SeverityConfig extends Component {
  state = {
    open: false,
    value: false,
    selectedData: ""
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
  handleOpenedit = Data => {
    this.setState({
      value: true,
      selectedData: Data
    });
  };

  handleCloseedit = () => {
    this.setState({
      value: false
    });
  };
  componentDidMount() {
    this.props.getserverityData();
  }
  confirm = id => {
    this.props.deleteServerity(id);
    message.error("Deleted CuccessFully");
  };

  render() {
    // function confirm() {
    //    message.info('Click on Yes.');
    // }

    const columns = [
      {
        title: "Severity",
        dataIndex: "name",
        sortDirections: ["descend"],
        sorter: (a, b) => a.priority.length - b.priority.length
      },
      {
        title: "Description",
        dataIndex: "description",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.age - b.age
      },
      //    {
      //       title: 'Icon',
      //       dataIndex: 'icon',
      //       defaultSortOrder: 'descend',
      //       sorter: (a, b) => a.age - b.age,
      //    },
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
        render: (item, key) => (
          <Button.Group>
            <Button secondary onClick={() => this.handleOpenedit(key)}>
              Edit
            </Button>
            <Button.Or />

            <Popconfirm
              placement="topRight"
              title="Are You Sure To Delete This Serverity"
              onConfirm={() =>this.confirm(key.serverityId)}
              okText="Yes"
              cancelText="No"
            >
              <Button negative>Delete</Button>
            </Popconfirm>
          </Button.Group>
        )
      }
    ];
    // const data = [
    //    {
    //       key: '1',
    //       severity: 'High',
    //       description: 'High Severity',
    //       icon: <Icon name='arrow up' />,

    //       color: 'red',
    //       action: <Button.Group>
    //          <Button secondary onClick={this.handleOpenedit}>Edit</Button>
    //          <Button.Or />

    //          <Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
    //             <Button negative>Delete</Button>

    //          </Popconfirm>

    //       </Button.Group>
    //    },
    //    {
    //       key: '2',
    //       severity: 'Medium ',
    //       description: 'Medium Severity',

    //       icon: <Icon name='exchange' />,
    //       color: <div> green</div>,
    //       action: <Button.Group>
    //          <Button secondary onClick={this.handleOpenedit}>Edit</Button>
    //          <Button.Or />
    //          <Popconfirm placement="topRight" type="danger" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
    //             <Button negative >Delete</Button>
    //          </Popconfirm>
    //       </Button.Group>
    //    },
    //    {
    //       key: '3',
    //       severity: 'Low',
    //       description: 'Low Severity',
    //       icon: <Icon name='arrow down' />,
    //       color: <span>yellow</span>,
    //       action: <Button.Group>
    //          <Button secondary onClick={this.handleOpenedit}>Edit</Button>
    //          <Button.Or />
    //          {/* <Button negative>Delete</Button> */}
    //          <Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
    //             <Button negative>Delete</Button>
    //          </Popconfirm>
    //       </Button.Group>
    //    },

    // ];
    return (
      <div style={{ marginRight: "2%" }}>
        <Grid direction="row" container>
          <Grid item xs={11} style={{ marginTop: "2%" }}>
            <Segment>
              <BreadCrumbs />
              <SeverityAdd
                open={this.state.open}
                handleOpen={this.handleOpen}
                handleClose={this.handleClose}
                changeDataValues={this.props.changeDataValues}
              />
              <EditSeverity
                open={this.state.value}
                handleOpen={this.handleOpenedit}
                handleClose={this.handleCloseedit}
                selectedData={this.state.selectedData}
                updateServerity={this.props.updateServerity}
              />
              <Button color="primary" onClick={this.handleOpen}>
                Add Severity
              </Button>
              <Table column={columns} data={this.props.data} />
            </Segment>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeverityConfig);
