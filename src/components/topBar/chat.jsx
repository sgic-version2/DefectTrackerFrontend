
import React, { Component } from 'react';
import {
    Avatar,
    Divider,
} from 'antd';
import { Link } from 'react-router-dom'
class Chat extends Component {
    render() {
        return (
            <div>
                <div>  <p
                    style={{
                        textAlign: "left",
                        margin: "0",
                        fontSize: '15px'
                    }}>

                    Defect Messenger
                    <div style={{ float: 'right' }}>
                        <Divider type="vertical" />
                        <Link to="/notification">Offline</Link>
                       
                    </div>
                </p>
                </div>
                <Divider />
                <div>
                    <p key="0">
                        <Avatar
                            style={{
                                display: "inline-block",
                                position: 'sticky',
                                marginTop: '-40px',
                                backgroundColor: '#87d068'
                            }} icon="user" />
                        <div
                            className="notification-item"
                            style={{
                                display: "inline-block"
                            }}>
                            <div
                                style={{
                                    paddingLeft: "10px",
                                    fontSize: "1.3em",
                                    margin: "0",
                                    top: "0"
                                }}>
                                Jeyaamuthan 
                </div>
                            <div
                                className="notification-item-time"
                                style={{
                                    display: "inline-block",
                                    paddingLeft: "10px",
                                    fontSize: "0.8em"
                                }}>
                                online
                </div>
                        </div>
                    </p>
                    <p key="1">
                        <Avatar
                            style={{
                                display: "inline-block",
                                position: 'sticky',
                                marginTop: '-40px',
                                backgroundColor: '#0000FF'
                            }} icon="user" />
                        <div
                            className="notification-item"
                            style={{
                                display: "inline-block"
                            }}>
                            <div
                                style={{
                                    paddingLeft: "10px",
                                    fontSize: "1.3em",
                                    margin: "0",
                                    top: "0"
                                }}>
                                Jathurshan  
                </div>
                            <div
                                className="notification-item-time"
                                style={{
                                    display: "inline-block",
                                    paddingLeft: "10px",
                                    fontSize: "0.8em"
                                }}>
                                online
                </div>
                        </div></p>
                    <p key="2">
                        <Avatar
                            style={{
                                display: "inline-block",
                                position: 'sticky',
                                marginTop: '-40px',
                                backgroundColor: '#87d068'
                            }} icon="user" />
                        <div
                            className="notification-item"
                            style={{
                                display: "inline-block"
                            }}>
                            <div
                                style={{
                                    paddingLeft: "10px",
                                    fontSize: "1.3em",
                                    margin: "0",
                                    top: "0"
                                }}>
                                Sasikalaraj
                </div>
                            <div
                                className="notification-item-time"
                                style={{
                                    display: "inline-block",
                                    paddingLeft: "10px",
                                    fontSize: "0.8em"
                                }}>
                                2hr ago
                </div>
                        </div></p>
                    <p key="3">
                        <Avatar
                            style={{
                                display: "inline-block",
                                position: 'sticky',
                                marginTop: '-40px',
                                backgroundColor: '#AF9564'
                            }} icon="user" />
                        <div
                            className="notification-item"
                            style={{
                                display: "inline-block"
                            }}>
                            <div
                                style={{
                                    paddingLeft: "10px",
                                    fontSize: "1.3em",
                                    margin: "0",
                                    top: "0"
                                }}>
                                Tharshikan
                </div>
                            <div
                                className="notification-item-time"
                                style={{
                                    display: "inline-block",
                                    paddingLeft: "10px",
                                    fontSize: "0.8em"
                                }}>
                                2hr 53m ago
                </div>
                        </div></p>
                    <p
                        style={{
                            textAlign: "center",
                            margin: "0",
                            fontSize: '13px'
                        }}>




                        <Divider type="vertical" />
                        <Link to="/notification">View More</Link>
                        <Divider type="vertical" />
                    </p>
                </div>

            </div>
        );
    }
}

export default Chat;
