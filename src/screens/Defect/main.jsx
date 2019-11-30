import React, { Component } from 'react'
import ViewDefect from './viewDefect';

import { connect } from "react-redux";
import { changeDataValues } from "../../fileAction/addEmployeeAction";

const mapStateToProps = (state) => ({
   data: state.addDefectData.defectDetailsFromState
})
const mapDispatchToProps = {
   changeDataValues
}
class Main extends Component{
    render(){
    return (
        <div>
            <ViewDefect changeDataValues={this.props.changeDataValues}/>
        </div>
    )
}
}
export default connect(mapDispatchToProps,mapStateToProps) (Main)
