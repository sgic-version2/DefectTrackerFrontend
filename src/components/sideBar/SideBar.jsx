import React, { Component } from 'react'
import { Menu, Icon, Avatar } from 'antd';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'

// sideBar Menu Object 
const sideBarContent = [{
    name: 'Dashborad',
    subMenu: [
        {
            name: 'Company',
            url: '/company',
            status: 0,
        },
        {
            name: 'Defect',
            url: '/defect',
            status: 0,
        },
        {
            name: 'Developer',
            url: '/developer',
            status: 0,
        },
        {
            name: 'Project Manager',
            url: '/projectManager',
            status: 0,
        },
        {
            name: 'QA',
            url: '/qa',
            status: 0,
        },
    ],
    icon: 'mail',
    status: 1
},
{
    name: 'Project Administration',
    icon: 'appstore',
    status: 0,
    url: '/projectAdministration'
},
{
    name: 'Company Administration',
    icon: 'appstore',
    status: 0,
    url: '/companyAdministration'
},
{
    name: 'Company',
    subMenu: [
        {
            name: 'Company',
            url: '/companyCompany',
            status: 0
        },
        {
            name: 'HR Allocation',
            url: '/hrAllocation',
            status: 0
        },
        {
            name: 'Employee',
            url: '/companyEmployee',
            status: 0
        }
    ],
    status: 1,
    icon: 'mail'
},
{
    name: 'Module',
    icon: 'appstore',
    status: 0,
    url: '/module'
},
{
    name: 'Project Allocation',
    icon: 'appstore',
    status: 0,
    url: '/projectAllocation'
},
{
    name: 'Manage Project',
    icon: 'appstore',
    status: 0,
    url: '/manageProject',
},
{
    name: 'Defect',
    icon: 'mail',
    status: 1,
    subMenu: [
        {
            name: 'Defect',
            url: '/defect',
            status: 0
        }
    ]
},
{
    name: 'Setting',
    icon: 'mail',
    status: 1,
    subMenu: [
        {
            name: 'General Configuration',
            url: '/generalConfiguration',
            status: 0
        },
        {
            name: 'Look and Feel',
            url: '/lookandfeel',
            status: 0
        },
        {
            name: 'Profile Setting',
            url: '/profileSetting',
            status: 0
        },
        {
            name: 'Common Configuration',
            subcontent: [
                {
                    name: 'Priority',
                    url: '/priority'
                },
                {
                    name: 'Severity',
                    url: '/severity'
                },
                {
                    name: 'Defect Type',
                    url: '/defectType'
                },
                {
                    name: 'Defect Status',
                    url: '/defectStatus'
                },

            ],
            status: 1,
            icon: 'appstore'
        },
        {
            name: 'Troubleshoot and Support',
            status: 1,
            icon: 'appstore',
            subcontent: [
                {
                    name: 'Audit Log',
                    url: '/auditLog'
                }
            ]
        },
        {
            name: 'Privilege',
            status: 1,
            icon: 'appstore',
            subcontent: [
                {
                    name: 'Company Privilege',
                    url: '/companyPrivilege'
                },
                {
                    name: 'Project Privilege',
                    url: '/projectPrivilege'
                },
                {
                    name: 'QA Lead Privilege',
                    url: '/qaLeadPrivilege'
                },
                {
                    name: 'Tech Lead Privilege',
                    url: '/techLeadPrivilege'
                }
            ]
        },
        {
            name: 'Work Flow',
            icon: 'appstore',
            status: 1,
            subcontent: [
                {
                    name: 'Defect Roles Flow',
                    url: '/defctRolesFlow'
                },
                {
                    name: 'Defect Status Flow',
                    url: '/defectStatusFlow'
                }
            ]
        }
    ]
}
]
const { SubMenu } = Menu;
class SideBar extends Component {
    render() {
        const { collapsed, onMouseEnterSideBar, sideBarColor, display } = this.props
        return (
            <div style={{ width: 'auto', marginTop: -64, overflowY: 'hidden', zIndex: 100 }} onMouseEnter={() => onMouseEnterSideBar()} onMouseLeave={() => onMouseEnterSideBar()}>
                <Menu
                    style={{ position: 'absolute', height: '100%', width: `${!collapsed ? '250px' : '100px'}`, background: `#${sideBarColor ? sideBarColor : 'fafafa'}`, transition: 'width,0.5s', overflow: 'auto', zIndex: 100 }}
                    mode="inline"
                    inlineCollapsed={collapsed}
                >
                    <div style={{ height: '20vh', background: '#353c48', textAlign: 'center', justifyContent: 'center', marginBottom: '25%' }}>
                        <div style={{ textAlign: 'center' }}>
                            <Avatar style={{ marginTop: '25%', transition: 'width,0.5s', border: `${!collapsed ? '5px solid #2d323e' : 'none'}` }} size={!collapsed ? 90 : 70} src="http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg" >
                            </Avatar>
                            <Typography variant="h6" style={{ color: '#048063', display: display }}>
                                User Name
                            </Typography>
                        </div>
                    </div>
                    {
                        sideBarContent.map((content, index) => {
                            if (content.status === 1) {
                                return (
                                    <SubMenu
                                        key={`sub${index}`}
                                        title={
                                            <span>
                                                <Icon type={content.icon} />
                                                <span>{content.name}</span>
                                            </span>
                                        }
                                    >
                                        {content.subMenu.map((submenuContent, subIndex) => {
                                            if (submenuContent.status === 1) {
                                                return (
                                                    <SubMenu key={`subAdded${subIndex}`} title={
                                                        <span>
                                                            <Icon type={submenuContent.icon} />
                                                            <span>{submenuContent.name}</span>
                                                        </span>
                                                    }
                                                    >
                                                        {
                                                            submenuContent.subcontent.map((subContents, indexSub) => {
                                                                return (
                                                                    <Menu.Item key={`sub${subIndex}join${indexSub}`}>
                                                                        <Link to={subContents.url}>
                                                                            {subContents.name}
                                                                        </Link>
                                                                    </Menu.Item>
                                                                )
                                                            })
                                                        }
                                                    </SubMenu>
                                                )
                                            } else {
                                                return (
                                                    <Menu.Item key={`oneSubModule${index}join${subIndex}`}>
                                                        <Link to={submenuContent.url}>
                                                            {submenuContent.name}
                                                        </Link>
                                                    </Menu.Item>
                                                )
                                            }
                                        })}
                                    </SubMenu>
                                )
                            } else {
                                return (
                                    <Menu.Item key={`without${index}`} >
                                        <Link to={content.url} >
                                            <Icon type={content.icon} />
                                            <span>{content.name}</span>
                                        </Link>
                                    </Menu.Item>
                                )
                            }
                        }
                        )
                    }
                </Menu>
            </div >
        )
    }
}
export default SideBar
