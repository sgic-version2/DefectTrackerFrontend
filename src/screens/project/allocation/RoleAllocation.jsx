import React, { Component } from 'react';
import { Transfer, Table, Tag, Progress, Icon } from 'antd';
import difference from 'lodash/difference';
import { Button } from 'semantic-ui-react';
import Model from '../../../components/model/model';
import EditRole from './EditRole';

const color = ['blue', 'green', 'orange', 'red', 'olive', 'gold']
var dataStore = [];
var originTargetKeys = [1];
export default class RoleAllocation extends Component {
  state = {
    targetKeys: originTargetKeys,
    disabled: false,
    showSearch: true,
    open: false,
    buttonClick: []
  };

  onChange = nextTargetKeys => {
    this.setState({ targetKeys: nextTargetKeys });
  };
  handleOpen = () => {
    this.setState({
      open: true
    });
  };
  handleClose = () => {
    this.setState({
      open: false
    })
  }
  handlebuttonClick = (data) => {
    this.props.roleAllocation(data)
    this.handleOpen()
  }
  componentDidMount() {
    var indexOfValues;
    this.props.employeeData.map((data, index) => {
      switch (data.employeeDesignation) {
        case 'ASE':
          indexOfValues = 0
          break;
        case 'SE':
          indexOfValues = 1
          break;
        case 'SSE':
          indexOfValues = 2
          break;
        case 'ATL':
          indexOfValues = 3
          break;
        case 'TL':
          indexOfValues = 4
          break;
        case 'STL':
          indexOfValues = 5
          break;
        default:
          indexOfValues = 0
      }
      return (
        dataStore.push({
          key: index.toString(),
          employeeID: data.employeeID,
          employeeName: data.employeeName,
          employeeDesignation: <Tag color={color[indexOfValues]} >{data.employeeDesignation}</Tag>,
          employeeEmail: data.employeeEmail,
          availability: data.availability,
          role: data.role
        }),
        this.setState({
          buttonClick: dataStore
        })
      )
    })
  }
  render() {
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
            getCheckboxProps: item => ({
              disabled: listDisabled || item.disabled
            }),
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
          );
        }}
      </Transfer>
    );

    const mockTags = ['ASE', 'SE', 'QAE', 'TL', 'ASE'];
    const mockData = this.props.employeeData;
    const role = ['ASE', 'QAL', 'TL', 'SE']
    const availabilityTag = [<Progress type="circle" percent={30} width={50} />, <Progress type="circle" percent={60} width={50} />, <Progress type="circle" percent={90} width={50} />, <Tag color="red">Bench</Tag>]

    originTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);

    originTargetKeys = mockData
      .filter(item => +item.key % 3 > 1)
      .map(item => item.key);

    const { targetKeys, disabled, showSearch, open, buttonClick } = this.state;
    const leftTableColumns = [
      {
        dataIndex: 'employeeID',
        title: 'Employee ID'
      },
      {
        dataIndex: 'employeeName',
        title: 'Full Name'
      },
      {
        dataIndex: 'availability',
        title: 'Availability'
      },
      {
        dataIndex: 'employeeDesignation',
        title: 'Designation'
      }
    ];
    const rightTableColumns = [
      {
        dataIndex: 'employeeID',
        title: 'Employee ID'
      },
      {
        dataIndex: 'employeeName',
        title: 'Full Name'
      },
      {
        dataIndex: 'employeeDesignation',
        title: 'Designation'
      },
      {
        dataIndex: 'role',
        title: 'Role'
      },
      {
        title: 'Action',
        render: (item, key) => <Icon type="edit" className="iconposition" onClick={() => this.handlebuttonClick(key)} />
      },
    ];
    console.log(dataStore)
    return (
      <div>
        <TableTransfer
          dataSource={this.state.buttonClick}
          targetKeys={targetKeys}
          disabled={disabled}
          showSearch={showSearch}
          onChange={this.onChange}
          filterOption={(inputValue, item) =>
            item.title.indexOf(inputValue) !== -1 ||
            item.tag.indexOf(inputValue) !== -1
          }
          leftColumns={leftTableColumns}
          rightColumns={rightTableColumns}
        />
        <Model
          open={open}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          width={30}
          form={<EditRole data={this.props.allocationData} />}
          title='Edit Role'
        />
      </div>
    );
  }
}
