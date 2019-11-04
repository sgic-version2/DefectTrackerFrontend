
import React, { Component } from 'react';
import {
    Avatar,
    Tag,
    Divider,
} from 'antd';
import { Link } from 'react-router-dom'
class Notification extends Component {
    render() {
        return (
            <div>
                <div>  <p
                    style={{
                        textAlign: "left",
                        margin: "0",
                        fontSize: '15px'
                    }}>

                    <Link to="/notification">Notifications</Link>
                    <div style={{ float: 'right' }}>
                        <Divider type="vertical" />
                        <Link to="/notification">More</Link>
                        <Divider type="vertical" />
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
                                    fontSize: "0.8em",
                                    margin: "0",
                                    top: "0"
                                }}>
                                #DT16 Functionality Defect  with <Tag color="orange">Medium priority</Tag> !
                </div>
                            <div
                                className="notification-item-time"
                                style={{
                                    display: "inline-block",
                                    paddingLeft: "10px",
                                    fontSize: "0.5em"
                                }}>
                                57m
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
                                    fontSize: "0.8em",
                                    margin: "0",
                                    top: "0"
                                }}>
                                #DT12 UI Defect  with <Tag color="red">High priority</Tag> !
                </div>
                            <div
                                className="notification-item-time"
                                style={{
                                    display: "inline-block",
                                    paddingLeft: "10px",
                                    fontSize: "0.5em"
                                }}>
                                1hr 33m
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
                                    fontSize: "0.8em",
                                    margin: "0",
                                    top: "0"
                                }}>
                                #DT13 unexcepted Defect  with <Tag color="yellow">Low priority</Tag> !
                </div>
                            <div
                                className="notification-item-time"
                                style={{
                                    display: "inline-block",
                                    paddingLeft: "10px",
                                    fontSize: "0.5em"
                                }}>
                                2hr
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
                                    fontSize: "0.8em",
                                    margin: "0",
                                    top: "0"
                                }}>
                                #DT14 UI Defect  with <Tag color="orange">Medium priority</Tag> !
                </div>
                            <div
                                className="notification-item-time"
                                style={{
                                    display: "inline-block",
                                    paddingLeft: "10px",
                                    fontSize: "0.5em"
                                }}>
                                2hr 53m
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

export default Notification;
