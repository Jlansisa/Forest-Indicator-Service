import React, { Component } from 'react'
import Scenarios from './Scenarios';
const ReactHighcharts = require('react-highcharts');

class Chart extends Component {

    render () {

        const { regionlevels, ...rest } = this.props;

        const config = {
            data: {
                table: 'freq',
                startRow: 1,
                endRow: 17,
                endColumn: 7
            },
        
            chart: {
                polar: true,
                type: 'column'
            },
        
            title: {
                text: { regionlevels }
            },
        
            subtitle: {
                text: 'LÄHDE Luke Metsämittari'
            },
        
            pane: {
                size: '85%'
            },
        
            legend: {
                align: 'right',
                verticalAlign: 'top',
                y: 100,
                layout: 'vertical'
            },
        
            xAxis: {
                tickmarkPlacement: 'on'
            },
        
            yAxis: {
                min: 0,
                endOnTick: false,
                showLastLabel: true,
                title: {
                    text: 'Frequency (%)'
                },
                labels: {
                    formatter: function () {
                        return this.value + '%';
                    }
                },
                reversedStacks: false
            },
        
            tooltip: {
                valueSuffix: '%'
            },
        
            plotOptions: {
                series: [{
                    stacking: 'normal',
                    shadow: false,
                    groupPadding: 0,
                    pointPlacement: 'on',
                    name: 'Brands',
                    colorByPoint: true,
                }]
            }
        };

        return (
            <div>
                <chart>
                <ReactHighcharts config = {config}></ReactHighcharts>
                </chart>
            </div>
        )
    }
}

export default Chart