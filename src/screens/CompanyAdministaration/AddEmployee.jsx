import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { Grid } from "@material-ui/core";
import AllocationButton from "./AddEmployeeButton";
import BreadCrumbs from "../../components/breadCrumbs/breadCrumbs";
import Table from "../../components/tables/table";
import { Button } from "semantic-ui-react";
import MoreOutlinedIcon from "@material-ui/icons/MoreOutlined";
import More from "./More";
const columns = [
  {
    title: "ID",
    dataIndex: "ID",
    filters: [
      {
        text: "Sgic1",
        value: "Sgic2"
      },
      {
        text: "Sgic1",
        value: "Sgic2"
      }
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.ID.indexOf(value) === 0,
    sorter: (a, b) => a.ID.length - b.ID.length,
    sortDirections: ["descend"]
  },
  {
    title: "Name",
    dataIndex: "Name",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.Name - b.Name
  },
  {
    title: "Role",
    dataIndex: "Role",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.Role - b.Role
  },
  {
    title: "Email",
    dataIndex: "Email",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.Email - b.Email
  },

  {
    title: "Action",
    dataIndex: "action",
    defaultSortOrder: "descend"
  },
  {
    title: "More",
    dataIndex: "More"
    // defaultSortOrder: 'descend',
    // sorter: (a, b) => a.Role - b.Role,
  }
];

export default class AddEmployee extends Component {
  state = {
    value: false
  };

  handleOpen = () => {
    this.setState({
      value: true
    });
  };
  handleClose = () => {
    this.setState({
      value: false
    });
  };

  render() {
    const data = [
      {
        ID: "1",
        Name: "John Brown",
        Role: 32,
        Email: "New York No. 1 Lake Park",

        action: (
          <Button.Group>
            <Button secondary onClick={this.handleOpen}>
              Edit
            </Button>
            <Button.Or />
            <Button negative>Delete</Button>
          </Button.Group>
        ),
        More: <MoreOutlinedIcon onClick={this.handleOpen} />
      },
      {
        ID: "1",
        Name: "John Brown",
        Role: 32,
        Email: "New York No. 1 Lake Park",

        action: (
          <Button.Group>
            <Button secondary>Edit</Button>
            <Button.Or />
            <Button negative>Delete</Button>
          </Button.Group>
        ),
        More: <MoreOutlinedIcon onClick={this.handleOpen} />
      },
      {
        ID: "1",
        Name: "John Brown",
        Role: 32,
        Email: "New York No. 1 Lake Park",

        action: (
          <Button.Group>
            <Button secondary>Edit</Button>
            <Button.Or />
            <Button negative>Delete</Button>
          </Button.Group>
        ),
        More: <MoreOutlinedIcon onClick={this.handleOpen} />
      },
      {
        ID: "1",
        Name: "John Brown",
        Role: 32,
        Email: "New York No. 1 Lake Park",

        action: (
          <Button.Group>
            <Button secondary>Edit</Button>
            <Button.Or />
            <Button negative>Delete</Button>
          </Button.Group>
        ),
        More: <MoreOutlinedIcon onClick={this.handleOpen} />
      }
    ];
    return (
      <div>
        <Grid direction="row" container>
          <Grid item xs={11} style={{ marginTop: "2%" }}>
            <Segment>
              <BreadCrumbs />
              <AllocationButton />
              <Table column={columns} data={data} />
              <More
                open={this.state.value}
                handleOpen={this.handleOpen}
                handleClose={this.handleClose}
              />
            </Segment>
          </Grid>
        </Grid>
      </div>
    );
  }
}
