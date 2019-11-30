import React, { Component } from 'react';
 
import SubmitModel from './../../components/model/submitModel';
// import { connect } from "react-redux";
import { changeDataValues } from './../../fileAction/addCompanyEmployeeAction'


const mapStateToProps = (state) => ({
  data: state.defectTypeData.defectTypeDetailsFromState
 

})
const mapDispatchToProps = {
  changeDataValues
};
class More extends Component {
    render() {
        return (
            <div>
                <SubmitModel open={this.props.open} handleOpen={this.props.handleOpen} handleClose={this.props.handleClose} />
            </div>
        );
    }
}

export default More