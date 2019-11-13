import React, { Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Icon, Button, Divider, Avatar, Badge, Popover } from 'antd';
import Notification from './Notification';


/* App bar using Material-ui 
* app bar have 3 properties
   ** position - absolute,fixed,relative,static,sticky
   ** color- default,inherit,primary,secondary
   ** backgroundColor - pass any color code without # code
   **iconFontColor - you can change Icon Color
*/

const appBar = ({ position, color, backgroundColor, iconFontColor, marginSize, appBarExpandIcon, collapsed }) => {
    return (
        <Fragment >
            <AppBar position={position ? position : 'static'} color={color ? color : 'primary'} style={{ background: `${backgroundColor}`, marginLeft: marginSize, width: `${marginSize === 80 ? '95%' : '82%'}`, transition: 'width,0.5s', zIndex: 100,boxShadow:'none' }}>
                <Toolbar >
                    <Button onClick={() => appBarExpandIcon()} type="primary" style={{ background: 'transparent', color: `#${collapsed ? iconFontColor : 'ed3232'}`, border: 'none', marginRight: 15 }}>
                        <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} style={{alignContent:"center"}}/>
                    </Button>
                    <Typography variant="h6" color='primary' style={{ width: '15%', position: 'absolute', left: '8%' }}>
                        Defect-Tracker
                    </Typography>
                    <IconButton style={{ marginLeft: '70%' }}>
                        <Avatar size={30} src="http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg" style={{ color: `#${iconFontColor ? iconFontColor : '048691'}` }} />
                    </IconButton>
                    <Popover placement="bottomRight" content={<Notification />} trigger="click">
                        <IconButton>
                            <Badge count={5}>
                                <Avatar size={30} icon="alert" style={{ color: `#${iconFontColor ? iconFontColor : '048691'}` }} />
                            </Badge>
                        </IconButton>
                    </Popover>
                    <Divider type="vertical" style={{ height: '50px' }} />
                    <IconButton>
                        <Badge count={5}>
                            <Avatar size={30} icon="message" style={{ color: `#${iconFontColor ? iconFontColor : '048691'}`}} />
                        </Badge>
                    </IconButton>
                    <Divider type="vertical" style={{ height: '50px' }} />
                    <IconButton>
                        <Avatar size={30} icon="logout" style={{ color: `#${iconFontColor ? iconFontColor : '048691'}` }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default appBar
