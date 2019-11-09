import React from 'react';
import {Chart} from 'primereact/chart';
const Doughtnut = () => {

    const data = {
        labels: ['New','Open','Reject','Closed'],
        datasets: [
            {
                data: [300, 50, 100, 150],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#BBCE56",
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#BBCE56",
                ]
            }]    
        };
    return ( 
        <div>
            
        <div className="content-section introduction">
            <div className="feature-intro">
                <h1>DoughnutChart</h1>
            </div>
        </div>

        <div className="content-section implementation">
            <Chart type="doughnut" data={data} />
        </div>

        {/* <DoughnutChartDemoDoc></DoughnutChartDemoDoc> */}
    </div>
     );
}
 
export default Doughtnut;

