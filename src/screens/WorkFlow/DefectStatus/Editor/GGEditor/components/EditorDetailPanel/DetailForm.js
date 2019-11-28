import React, { Fragment } from 'react';
import { Card, Form, Input, Select } from 'antd';
import { withPropsAPI } from 'gg-editor';
import upperFirst from 'lodash/upperFirst';

const { Item } = Form;
const { Option } = Select;

const inlineFormItemLayout = {
  labelCol: {
    sm: { span: 8 },
  },
  wrapperCol: {
    sm: { span: 16 },
  },
};

 

class DetailForm extends React.Component {
  get item() {
    const { propsAPI } = this.props;

    return propsAPI.getSelected()[0];
  }

  

  

   handleChange = value => {
     console.log(value);
   }

  handleSubmit = e => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    const { form, propsAPI } = this.props;
    const { getSelected, executeCommand, update, read } = propsAPI;
   
  
    const data = propsAPI.save();
    console.log(data);
  
 
    setTimeout(() => {
      form.validateFieldsAndScroll((err, values) => {
        if (err) {
          return;
        }
        console.log(values);
        const item = getSelected()[0];

        if (!item) {
          return;
        }

        executeCommand(() => {
          update(item, {
            ...values,
          });
        });
       
      });
    }, 0);
  };


  renderNodeDetail = () => {
    const { form } = this.props;
    const { label } = this.item.getModel();
    console.log(this.item.model.shape);
    let node;
    if (this.item.model.shape=="start-node" || this.item.model.shape=="end-node") {
      node = '';
    } else {
      node =  <Item {...inlineFormItemLayout}>
        {form.getFieldDecorator('label', {
          initialValue: label,
        })(<Select defaultValue="Select Status" style={{ width: 120 }} onChange={this.handleSubmit}>
        <Option value="New">New</Option>
        <Option value="Open">Open</Option>
        <Option value="Close">Close</Option>
      </Select>)}
      </Item>;
    }
    return (
      <React.Fragment>
      {node}
   
      </React.Fragment>
    );
  };

  



  render() {
    const { type } = this.props;

    if (!this.item) {
      return null;
    }

    return (
      <Card type="inner" size="small" title={upperFirst(type)} bordered={false}>
        <Form onSubmit={this.handleSubmit}>
          {type === 'node' && this.renderNodeDetail()}
        </Form>
      </Card>
    );
  }
}

export default Form.create()(withPropsAPI(DetailForm));
