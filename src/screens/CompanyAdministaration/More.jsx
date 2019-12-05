import React, { Component } from 'react';
 
import SubmitModel from './../../components/model/submitModel';

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