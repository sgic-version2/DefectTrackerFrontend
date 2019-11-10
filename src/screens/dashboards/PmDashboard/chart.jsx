import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './chart.css';
import { Polar  } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import Table from './Table';
import { Segment } from "semantic-ui-react";




class chart extends Component {
  state = {
    dataPolar: {
      datasets: [
        {
          data: [300, 120, 200, 150, 320],
          backgroundColor: [
            "rgb(9, 51, 241)",
            "rgb(17, 241, 9)",
            "yellow",
            "rgb(241, 9, 9)",
            "black"
          ],
          label: "My dataset" // for legend
        }
      ],
      labels: ["new", "Open", "Closed", "Rejected", "Fixed"]
    }
  }
  
    render() {
        
  

        
        return (

            <body>
            
            <div class="container"> 
           
            <div class="page-title-wrapper">
                 
            <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
            <div class="app-header header-shadow">
              <br/>
            <h3 class="card-title">Dashboard Componenet / PM Dashboard</h3>
            <br/>
            <div class="row">
            <div class="col-md-3">
            
           
            <div class="card-body card">
                                  
         
               
                                 
                  
                    <div class="card-title a1">Success Ratio</div>
                       
                        
                      <br/>
                      <br/> 
                    </div>

           
        </div>

        <div class="col-md-3">
            
           
            <div class="card-body card">
                                  
                    
               
            <div class="card-title a1">Defects Ratio</div>

            <br/>
            <br/> 
            </div>

           
        </div>

        <div class="col-md-3">
            
           
            <div class="card-body card">
                                  
                    
               
            <div class="card-title a1">Software Engineers</div>
            <br/>
            <br/> 
            </div>

           
        </div>

        <div class="col-md-3">
            
           
            <div class="card-body card">
                                  
                    
            <div class="card-title a1">QA Engineers</div>
            <br/>
            <br/> 
            </div>

           
        </div>




       

        </div>
        <br/>
        <div class="row">

        <div class="col-md-7">
       
            
           
            <div class="card-body card">
            <br/>
            <MDBContainer>
        <h5>Defect Types</h5>
        <br/>
        <Polar data={this.state.dataPolar} options={{ responsive: true }} />
      </MDBContainer>
                    
         


            </div>

           
        </div>

        <div class="col-md-5">
                                <div class="main-card mb-3 card">
                                  
                                    <div class="card-body"><h5 class="card-title">Defects</h5>

                                    <h6 class="card-title">New</h6>
                                    
                                        <div class="mb-3 progress">
                                            <div class="progress-bar s1" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <h6 class="card-title">Open</h6>
                                       
                                        <div class="mb-3 progress">
                                            <div class="progress-bar s2" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                                        </div>
                                        <h6 class="card-title">Closed</h6>
                                       
                                        <div class="mb-3 progress">
                                            <div class="progress-bar s3" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" ></div>
                                        </div>
                                        <h6 class="card-title">Reject</h6>
                                       
                                        <div class="mb-3 progress">
                                            <div class="progress-bar s4" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                                        </div>

                                        <h6 class="card-title">Deferred</h6>
                                       
                                       <div class="mb-3 progress">
                                           <div class="progress-bar s5" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                                       </div>
                                       
                                       
                                    </div>
                                </div>
                               


        </div>
        </div>
        <br/>

        <div class="row">

<div class="col-md-12">
  <div>
  <Segment>
<Table /> 
</Segment>
</div>
</div>
        </div>

        </div>
        </div>
                
        </div>
        </div>

       

        </body>
        
        );
    }

}

export default chart;

