import React, { Component } from 'react'
import { Menu, Icon, Avatar } from 'antd';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'
import * as theme from '../themes/theme'
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import AssignmentLateOutlinedIcon from '@material-ui/icons/AssignmentLateOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import AssistantOutlinedIcon from '@material-ui/icons/AssistantOutlined';
import BallotOutlinedIcon from '@material-ui/icons/BallotOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import ApartmentOutlinedIcon from '@material-ui/icons/ApartmentOutlined';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import ViewModuleOutlinedIcon from '@material-ui/icons/ViewModuleOutlined';
import DevicesOutlinedIcon from '@material-ui/icons/DevicesOutlined';
import DevicesOtherOutlinedIcon from '@material-ui/icons/DevicesOtherOutlined';
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import SpeakerNotesOutlinedIcon from '@material-ui/icons/SpeakerNotesOutlined';
import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import DnsOutlinedIcon from '@material-ui/icons/DnsOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import ArtTrackOutlinedIcon from '@material-ui/icons/ArtTrackOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import BlurLinearOutlinedIcon from '@material-ui/icons/BlurLinearOutlined';
import HowToRegOutlinedIcon from '@material-ui/icons/HowToRegOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import MultilineChartOutlinedIcon from '@material-ui/icons/MultilineChartOutlined';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
// sideBar Menu Object 
const sideBarContent = [{
    name: 'Dashborad',
    subMenu: [
        {
            name: 'Company',
            url: '/defect/company',
            status: 0,
            icon: <AssessmentOutlinedIcon />
        },
        {
            name: 'Defect',
            url: '/defect/defectDashboard',
            status: 0,
            icon: <AssignmentLateOutlinedIcon />
        },
        {
            name: 'Developer',
            url: '/defect/developer',
            status: 0,
            icon: <AssignmentIndOutlinedIcon />
        },
        {
            name: 'Project Manager',
            url: '/defect/projectManager',
            status: 0,
            icon: <AssistantOutlinedIcon />
        },
        {
            name: 'QA',
            url: '/defect/qa',
            status: 0,
            icon: <BallotOutlinedIcon />
        },
    ],
    icon: <DashboardOutlinedIcon />,
    status: 1
},
{
    name: 'Project Administration',
    icon: <BusinessCenterOutlinedIcon />,
    status: 0,
    url: '/defect/projectAdministration'
},
{
    name: 'Company Administration',
    icon: <SupervisorAccountOutlinedIcon />,
    status: 0,
    url: '/defect/companyAdministration'
},
{
    name: 'Company',
    subMenu: [
        {
            name: 'Company',
            url: '/defect/companyCompany',
            status: 0,
            icon: <ApartmentOutlinedIcon />
        },
        {
            name: 'HR Allocation',
            url: '/defect/hrAllocation',
            status: 0,
            icon: <PeopleOutlinedIcon />
        },
        {
            name: 'Employee',
            url: '/defect/companyEmployee',
            status: 0,
            icon: <GroupAddOutlinedIcon />
        }
    ],
    status: 1,
    icon: <AccountBalanceOutlinedIcon />
},
{
    name: 'Module',
    icon: <ViewModuleOutlinedIcon />,
    status: 0,
    url: '/defect/module'
},
{
    name: 'Project Allocation',
    icon: <DevicesOutlinedIcon />,
    status: 0,
    url: '/defect/projectAllocation'
},
{
    name: 'Manage Project',
    icon: <DevicesOtherOutlinedIcon />,
    status: 0,
    url: '/defect/manageProject',
},
{
    name: 'Defect',
    icon: <BugReportOutlinedIcon />,
    status: 1,
    subMenu: [
        {
            name: 'Defect',
            url: '/defect/defect',
            status: 0,
            icon: <BugReportOutlinedIcon />,
        }
    ]
},
{
    name: 'Setting',
    icon: <SettingsOutlinedIcon />,
    status: 1,
    subMenu: [
        {
            name: 'General Configuration',
            url: '/defect/generalConfiguration',
            status: 0,
            icon: <SpeakerNotesOutlinedIcon />
        },
        {
            name: 'Look and Feel',
            url: '/defect/lookandfeel',
            status: 0,
            icon: <BubbleChartOutlinedIcon />
        },
        {
            name: 'Profile Setting',
            url: '/defect/profileSetting',
            status: 0,
            icon: <ContactPhoneOutlinedIcon />
        },
        {
            name: 'Common Configuration',
            subcontent: [
                {
                    name: 'Priority',
                    url: '/defect/priority',
                    icon: <LowPriorityIcon />
                },
                {
                    name: 'Severity',
                    url: '/defect/severity',
                    icon: <PriorityHighIcon />
                },
                {
                    name: 'Defect Type',
                    url: '/defect/defectType',
                    icon: <MergeTypeIcon />
                },
                {
                    name: 'Defect Status',
                    url: '/defect/defectStatus',
                    icon: <HourglassEmptyIcon />
                },

            ],
            status: 1,
            icon: <DnsOutlinedIcon />
        },
        {
            name: 'Troubleshoot and Support',
            status: 1,
            icon: <ContactSupportOutlinedIcon />,
            subcontent: [
                {
                    name: 'Audit Log',
                    url: '/defect/auditLog',
                    icon: <AssignmentOutlinedIcon />
                }
            ]
        },
        {
            name: 'Privilege',
            status: 1,
            icon: <AccountTreeOutlinedIcon />,
            subcontent: [
                {
                    name: 'Company Privilege',
                    url: '/defect/companyPrivilege',
                    icon: <ArtTrackOutlinedIcon />
                },
                {
                    name: 'Project Privilege',
                    url: '/defect/projectPrivilege',
                    icon: <DateRangeOutlinedIcon />
                },
                {
                    name: 'QA Lead Privilege',
                    url: '/defect/qaLeadPrivilege',
                    icon: <BlurLinearOutlinedIcon />
                },
                {
                    name: 'Tech Lead Privilege',
                    url: '/defect/techLeadPrivilege',
                    icon: <HowToRegOutlinedIcon />
                }
            ]
        },
        {
            name: 'Work Flow',
            icon: <TrendingUpOutlinedIcon />,
            status: 1,
            subcontent: [
                {
                    name: 'Defect Roles Flow',
                    url: '/defect/defectRolesFlow',
                    icon: <TrendingUpOutlinedIcon />
                },
                {
                    name: 'Defect Status Flow',
                    url: '/defect/defectStatusFlow',
                    icon: <MultilineChartOutlinedIcon />

                }
            ]
        }
    ]
}
]
const { SubMenu } = Menu;
class SideBar extends Component {
    render() {
        const { collapsed, onMouseEnterSideBar, sideBarColor, display, themesStatus } = this.props
        const useStyle = {
            menuStyle: {
                color: themesStatus ? theme.FontColors.colorIntoBackgroundImageOne : '#fff',
                '&:hover': {
                    background: '#000'
                }
            },
            fontColor: {
                color: themesStatus ? theme.FontColors.colorIntoBackgroundImageOne : '#fff',
                '&:hover': {
                    background: '#000'
                }
            }
        }
        return (
            <div className="sideBar" style={{ width: `${!collapsed ? '250px' : '80px'}`, marginTop: -64, overflowY: 'hidden', zIndex: 100 }} onMouseEnter={() => onMouseEnterSideBar()} onMouseLeave={() => onMouseEnterSideBar()}>
                <Menu
                    style={{ position: 'absolute', height: '100%', width: `${!collapsed ? '250px' : '80px'}`, background: `${themesStatus ? 'transparent' : sideBarColor}`, transition: 'width,0.5s', overflow: 'auto', zIndex: 100, border: 'none', boxShadow: '1px 2px 8px -1px rgba(0,0,0,0.75)' }}
                    mode="inline"
                    inlineCollapsed={collapsed}
                >
                    <div style={{ height: '20vh', background: 'transparent', textAlign: 'center', justifyContent: 'center', marginBottom: '25%' }}>
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
                                        style={useStyle.menuStyle}
                                        title={
                                            <span>
                                                {content.icon}
                                                <Icon />
                                                <span style={useStyle.fontColor}>{content.name}</span>
                                            </span>
                                        }
                                    >
                                        {content.subMenu.map((submenuContent, subIndex) => {
                                            if (submenuContent.status === 1) {
                                                return (
                                                    <SubMenu
                                                        key={`subAdded${subIndex}`}
                                                        title={
                                                            <span>
                                                                <span>{submenuContent.icon}</span>
                                                                <Icon />
                                                                <span>{submenuContent.name}</span>
                                                            </span>
                                                        }
                                                    >
                                                        {
                                                            submenuContent.subcontent.map((subContents, indexSub) => {
                                                                return (
                                                                    <Menu.Item style={useStyle.menuStyle} key={`sub${subIndex}join${indexSub}`}>
                                                                        <Link to={subContents.url}
                                                                        >
                                                                            <span>{subContents.icon}</span>
                                                                            <Icon />
                                                                            <span>{subContents.name}</span>
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
                                                            <span>{submenuContent.icon}</span>
                                                            <Icon />
                                                            <span> {submenuContent.name}</span>
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
                                        <Link to={content.url} style={useStyle.menuStyle}>
                                            <span>{content.icon}</span>
                                            <Icon />
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
