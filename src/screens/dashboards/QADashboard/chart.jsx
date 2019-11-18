import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doughnut } from "react-chartjs-2";
import './chart.css';
import { Segment } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'

import { MDBContainer } from "mdbreact";

class chart extends Component {
    state = {
        dataDoughnut: {
            labels: ["New", "Open", "Closed"],
            datasets: [
                {
                    data: [50, 150, 100],
                    backgroundColor: [" #fc0e0e", "#4379ee", " #28c435"],
                    hoverBackgroundColor: [
                        " #fc0e0e",
                        "#4379ee",
                        " #28c435"
                    ]
                }
            ]
        }

    }




    render() {
        return (
            <div>
                <Grid direction="row" container>
                    <Grid item xs={11} style={{ marginTop: '2%' }}>
                        <Segment>
                            <div class="container">
                                <div class="page-title-wrapper">
                                    <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
                                        <div class="app-header header-shadow">
                                            <br />
                                            <h3 class="card-title">Dashboard Componenet / QA Dashboard</h3>
                                            <br />
                                            <div class="row">
                                                <div class="col-md-7">


                                                    <div class="card-body card">
                                                        <MDBContainer>
                                                            <h5 class="card-title">Defect Details</h5>
                                                            <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
                                                        </MDBContainer>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </div>
                                                <div class="col-md-5">
                                                    <div class="main-card mb-3 card">
                                                        <div class="card-body"><h5 class="card-title">Defects</h5>
                                                            <h6 class="card-title">New</h6>
                                                            <div class="text-center">50%</div>
                                                            <div class="mb-3 progress">
                                                                <div class="progress-bar s1" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <h6 class="card-title">Open</h6>
                                                            <div class="text-center">30%</div>
                                                            <div class="mb-3 progress">
                                                                <div class="progress-bar s2" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                                                            </div>
                                                            <h6 class="card-title">Closed</h6>
                                                            <div class="text-center">25%</div>
                                                            <div class="mb-3 progress">
                                                                <div class="progress-bar s3" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" ></div>
                                                            </div>
                                                            <h6 class="card-title">Reject</h6>
                                                            <div class="text-center">40%</div>
                                                            <div class="mb-3 progress">
                                                                <div class="progress-bar s4" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                                                            </div>

                                                            {/* <div class="text-center">Multiple bars</div>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%;"></div>
                                            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%;"></div>
                                            <div class="progress-bar bg-info" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;"></div>
                                            <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%;"></div>
                                            <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style="width: 5%;"></div>
                                        </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
                                            <div class="app-header header-shadow">
                                                <div class="main-card mb-3 card">
                                                    <div class="card-body"><h5 class="card-title">Defect Chart Status</h5>
                                                        <br />
                                                        <h6 class="card-title">Library System</h6>
                                                        <div class="mb-3 progress">
                                                            <div class="progress-bar progress-bar-animated progress-bar-striped p1" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <h6 class="card-title">Library System</h6>
                                                        <div class="mb-3 progress">
                                                            <div class="progress-bar progress-bar-animated bg-success progress-bar-striped p2" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                                                        </div>

                                                        <h6 class="card-title">Defect System</h6>
                                                        <div class="mb-3 progress">
                                                            <div class="progress-bar progress-bar-animated bg-info progress-bar-striped p3" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" ></div>
                                                        </div>

                                                        <h6 class="card-title">HRM System</h6>
                                                        <div class="mb-3 progress">
                                                            <div class="progress-bar progress-bar-animated bg-warning progress-bar-striped p4" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>

                                                        <h6 >Leave Management System</h6>
                                                        <div class="mb-3 progress">
                                                            <div class="progress-bar progress-bar-animated bg-danger progress-bar-striped p5" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        {/* <div class="progress">
                    <div class="progress-bar progress-bar-animated progress-bar-striped p6" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar progress-bar-animated bg-success progress-bar-striped p7" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" ></div>
                    <div class="progress-bar progress-bar-animated bg-warning progress-bar-striped p8" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar progress-bar-animated bg-danger progress-bar-striped p9" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" ></div>
                </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Segment>
                    </Grid>
                </Grid>
            </div>

        )
    }

}

export default chart;

