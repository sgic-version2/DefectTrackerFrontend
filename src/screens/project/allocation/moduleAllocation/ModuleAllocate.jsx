import React, { Component } from 'react';
import { Transfer, Table, Modal, Tag, Row, Col, Select } from 'antd';
import difference from 'lodash/difference';
import { Segment, Button } from 'semantic-ui-react';
import { Grid } from '@material-ui/core';

const { Option } = Select;
// Customize Table Transfer
const TableTransfer = ({ leftColumns, rightColumns, ...restProps }) => (
  <Transfer {...restProps} showSelectAll={false}>
    {({
      direction,
      filteredItems,
      onItemSelectAll,
      onItemSelect,
      selectedKeys: listSelectedKeys,
      disabled: listDisabled
    }) => {
      const columns = direction === 'left' ? leftColumns : rightColumns;

      const rowSelection = {
        getCheckboxProps: item => ({ disabled: listDisabled || item.disabled }),
        onSelectAll(selected, selectedRows) {
          const treeSelectedKeys = selectedRows
            .filter(item => !item.disabled)
            .map(({ key }) => key);
          const diffKeys = selected
            ? difference(treeSelectedKeys, listSelectedKeys)
            : difference(listSelectedKeys, treeSelectedKeys);
          onItemSelectAll(diffKeys, selected);
        },
        onSelect({ key }, selected) {
          onItemSelect(key, selected);
        },
        selectedRowKeys: listSelectedKeys
      };

      return (
        <Grid item xs={12} style={{ marginTop: '2%' }}>
          <Segment>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={filteredItems}
              size='small'
              style={{ pointerEvents: listDisabled ? 'none' : null }}
              onRow={({ key, disabled: itemDisabled }) => ({
                onClick: () => {
                  if (itemDisabled || listDisabled) return;
                  onItemSelect(key, !listSelectedKeys.includes(key));
                }
              })}
            />
          </Segment>
        </Grid>
      );
    }}
  </Transfer>
);

const mockRole = ['TL', 'QAL', 'JSE', 'JQA', 'SE', 'SSE', 'QAE', 'SQAE'];
const mockModule = ['Login', 'Register', 'Logout', 'API Developement'];

const color = ['blue', 'green', 'orange', 'olive'];
// for (let i = 0; i < 20; i++) {
//   mockData.push({
//     key: i.toString(),
//     empname: `Emp${i + 1}`,
//     role: <Tag color={color[i % 4]}>{mockRole[i % 4]}</Tag>,
//     module: mockModule[i % 3]
//     // disabled: i % 4 === 0
//   });
// }

// const originTargetKeys = mockData
//   .filter(item => +item.key % 3 > 1)
//   .map(item => item.key);
var mockData;
export default class ModuleAllocate extends React.Component {
  state = {
    targetKeys: ['1'],
    disabled: false,
    showSearch: false,
    visible: false
  };
  mockData = this.props.moduleAllocationData;
  onChange = nextTargetKeys => {
    this.setState({ targetKeys: nextTargetKeys });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  onChangeModule = value => {
    this.setState({
      value
    });
  };

  handlebuttonClick = data => {
    this.props.moduleAllocation(data);
    this.showModal();
  };

  render() {
    const leftTableColumns = [
      {
        dataIndex: 'key',
        title: 'Emp ID'
      },
      {
        dataIndex: 'empname',
        title: 'Full name'
      },
      {
        dataIndex: 'role',
        title: 'Role'
        // render: role => <Tag>{role}</Tag>
      }
    ];
    const rightTableColumns = [
      {
        dataIndex: 'key',
        title: 'Emp ID',
        show: false
      },
      {
        dataIndex: 'empname',
        title: 'Full name'
      },
      {
        dataIndex: 'role',
        title: 'Role'
        // render: role => <Tag>{role}</Tag>
      },
      {
        dataIndex: 'module',
        title: 'Module Alloc.'
        // render: module => <Tag>{module}</Tag>
      },
      {
        dataIndex: 'actions',
        title: 'Actions',
        render: actions => (
          <Button
            icon='edit'
            label={{ as: 'a', basic: true, content: 'Edit' }}
            labelPosition='right'
            color='blue'
            onClick={this.showModal}
          />
        )
      }
    ];

    console.log(this.props);

    return (
      <div>
        <TableTransfer
          dataSource={mockData}
          targetKeys={this.state.targetKeys}
          showSearch={true}
          onChange={this.onChange}
          filterOption={(inputValue, item) =>
            item.title.indexOf(inputValue) !== -1 ||
            item.tag.indexOf(inputValue) !== -1
          }
          leftColumns={leftTableColumns}
          rightColumns={rightTableColumns}
        />
        <Modal
          title='Edit Module'
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width='700px'
        >
          <Row>
            <Col span={12}>
              <p>
                <b>Emp ID: </b>
              </p>
              <p>
                <b>Name: </b>
              </p>
              <p>
                <b>Designation: </b>
              </p>
              <p>
                <b>Role: </b>
              </p>
              <p>
                <b>Select Module: </b>
              </p>
            </Col>

            <Col span={12}>
              <p>EMP001</p>
              <p>John Doe</p>
              <p>Software Engineer</p>
              <p>Tech Lead</p>
              <p>
                <Select
                  defaultValue='Select Module'
                  style={{ width: 200 }}
                  onChange={this.onChangeModule}
                >
                  <Option value='Login'>Login</Option>
                  <Option value='Register'>Register</Option>
                  <Option value='Validation'>Validationr</Option>
                  <Option value='Verification'>Verification</Option>
                  <Option value='Submodule1'>Submodule1</Option>
                </Select>
              </p>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}
