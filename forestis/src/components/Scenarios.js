import React, { Component } from 'react'
import Axios from 'axios';

class Scenarios extends Component {

    constructor(props){
        super(props);

        this.state = {
            regionlevels: [],
            regions1: [],
            regions2: []
        };
        this.ChosenOption = this.ChosenOption.bind(this);
    }

    componentDidMount() {

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

    }
    
    ChosenOption(e){
        this.setState({ ChosenOption: e.target.value })
    }


    render () {
        
        const { regionlevels } = this.props;

        let regions = this.state.regionlevels;
        var alue1 = this.state.regions1;
        var alue2 = this.state.regions2;

        return (
            <scenarios>
            <div className="scenarios">
                <div className="skenaariot">
                <div>Skenaariot</div>
                </div>

                <div className="aluetaso">
                <div> Alue</div>
                </div>

                <div className="alue">
                <div>Alue</div>
                </div>

                <div className="skenaariokokoelma">
                <div>Skenaariokokoelma</div>
                </div>
            </div>


            <div className="select1">
                <select>
                    {
                    regions.map( e => <option key={ e.id }>{ e.name }</option>)
                    }
                </select>
            </div>

            <div className="select2">
                <select onChange={this.ChosenOption.bind(this)}>
                    {
                    regions.map( e => {
                        if (<option key={ e.id === "1" }/>)
                        return alue1.map(e => <option key={ e.id } >{ e.name }</option>)
                        else
                        return alue2.map(e => <option key={ e.id } >{ e.name }</option>)
                    })
                    }
                </select>
            </div>

            </scenarios> 
        )
    }
}

export default Scenarios