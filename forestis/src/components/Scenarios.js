import React, { Component } from 'react'
import Axios from 'axios';

class Scenarios extends Component {

    constructor(props){
        super(props);

        this.regionLevelSelectChange = this.regionLevelSelectChange.bind(this);

   /*     this.state = {
            regionlevels: [],
            regions1: [],
            regions2: []
        };
        this.ChosenOption = this.ChosenOption.bind(this); */
    }

 /*   componentDidMount() {

        //tilan kautta
        Axios.get('http://melatupa.azurewebsites.net/regionLevels')
            .then(response => { 
                console.log(response)
            
                this.setState({ regionlevels: response.data });
            }),
            Axios.get('http://melatupa.azurewebsites.net/regionLevels/1/regions')
            .then(response => { 
                console.log(response)
            
                this.setState({ regions1: response.data });
            }),
             Axios.get('http://melatupa.azurewebsites.net/regionLevels/2/regions')
            .then(response => { 
                console.log(response)
            
                this.setState({ regions2: response.data })
            });

    } */
    
    ChosenOption(e){
        this.setState({ ChosenOption: e.target.value })
    }

    regionLevelSelectChange(event)
    {        
        this.props.selectRegionLevel(event.target.value);
    }


    render () {
        
        const { regionLevels, regions } = this.props;

   /*     let regions = this.state.regionlevels;
        var alue1 = this.state.regions1;
        var alue2 = this.state.regions2; */

        return (
            <scenarios>
            <div className="scenarios">
                <div className="">
                <p>Skenaariot</p>
                </div>

                <div className="skenaariokokoelma">
                <div>Skenaariokokoelma</div>
                </div>

                <div className="aluetaso">
                <p> Aluetaso </p>
                        <select onChange={this.regionLevelSelectChange} >
                            {
                            regionLevels.map( e => <option key={ e.id } value={e.id}>{ e.name }</option>)
                            }
                        </select>
                </div>

                <div className="alue">
                <p>Alue</p>
                    <div>
                        <select>
                            {
                            regions.map( e => <option key={ e.id }>{ e.name }</option>)
                            }
                        </select>
                    </div>
                </div>

            </div>

            </scenarios> 
        )
    }
}

export default Scenarios