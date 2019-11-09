import React, { Component } from 'react';

import { Select } from 'antd';

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}


class DropDown extends Component {
    state = {  }
    render() { 
        return ( 
<div>
  <Select
    showSearch
    style={{ width:200,float:'right',margin:25,fontWeight:'bolder', font:'black', color:'black'}}
    placeholder= "Select the Project"
    
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="">HRM</Option>
    <Option value="">Hostel</Option>
    <Option value="">Hp</Option>
  </Select>


</div>

         );
    }
}
 
export default DropDown;