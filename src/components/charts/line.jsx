<<<<<<< HEAD
import React from 'react';
import {Chart} from 'primereact/chart';

=======
import React, {Component} from 'react';
import {Chart} from 'primereact/chart';
import  Grid  from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
>>>>>>> master



const LineChart = () => {

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Priority',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: '#42A5F5',
                borderColor: '#42A5F5'
            },
            {
                label: 'Serverity',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                backgroundColor: '#66BB6A',
                borderColor: '#66BB6A'
            }
        ]   
    };


    return (

        
        <div>

            
             <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>LineChart</h1>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Chart type="line" data={data} />
                </div>
        </div>
      );
}
 
export default LineChart;

