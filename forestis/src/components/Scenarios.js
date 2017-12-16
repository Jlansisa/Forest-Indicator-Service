import React, { Component } from 'react'
import Axios from 'axios';

class Scenarios extends Component {

    constructor(props){
        super(props);

        this.state = {

            regionlevels: []
        } 
    }

    componentDidMount() {

        //tilan kautta
        Axios.get('http://melatupa.azurewebsites.net/regionLevels')
            .then(response => { 
                console.log(response)
            
                this.setState({ regionlevels: response.data });
            });

    }

    render () {

        return (

            <scenarios>
            <div className="scenarios">
                <div className="skenaariot">
                <div>Skenaariot</div>
                </div>

                <div className="aluetaso">
                <div>Aluetaso</div>
                </div>
                <div className="alue">Alue</div>
            </div>

            <div className="select1">
                <select>
                    {
                    this.state.regionlevels.map( e => <option key={ e.id } >{ e.name }</option>)
                    }
                </select>
            </div>

            <div className="select2">
                <select>
                    {
                    this.state.regionlevels.map( e => <option key={ e.id } >{ e.name }</option>)
                    }
                </select>
            </div>

            </scenarios> 
        )
    }
}

export default Scenarios