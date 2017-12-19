import React, { Component } from 'react'
const ReactHighcharts = require('react-highcharts');

class Chart extends Component {

    render () {
        const { regionlevels } = this.props;

        let processedItems = []; 

 /*       regionlevels.forEach(element => {
            let todoIndex = processedItems.findIndex(item => item.name === element.type);
            if(todoIndex === -1)
            {
                processedItems.push({ 
                    name: element.type,
                    y: 1
                });
            }
            else
            {
                    processedItems[todoIndex].y++;
            }
        }); */

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
                text: this.props.title
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
                    text: 'skenaario'
                },
                labels: {
                    formatter: function () {
                        return this.value + '%';
                    }
                },
                reversedStacks: false
            },
        
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
        
            plotOptions: {
                series: [{
                    stacking: 'normal',
                    shadow: false,
                    groupPadding: 0,
                    pointPlacement: 'on',
                    name: 'indikaattorit',
                    colorByPoint: true,
                }]
            },

            series: [{
                name: 'indikaattorit',
                colorByPoint: true,
                data: processedItems
                [{
                        name: "foo",
                        y: 1
                    },
                    {
                        name: "doo",
                        y: 2
                    },
                    {
                        name: "boo",
                        y: 3
                    
                }]
            }]
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