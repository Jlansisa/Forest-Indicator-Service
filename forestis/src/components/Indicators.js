import React, { Component } from 'react'
import Axios from 'axios';

class Indicators extends Component {

    constructor(props){
        super(props);

        this.state = {

            indicatorCategories: []
        } 
    }

    componentDidMount() {

        //tilan kautta
        Axios.get('http://melatupa.azurewebsites.net/scenarioCollection')
            .then(response => { 
                console.log(response)
            
                this.setState({ indicatorCategories: response.data });
            });

    }

    render () {
        return (
            <indicators>
                <div className="indicators">
                    <div className="indikaattorit">
                    <div>Indikaattorit</div>
                    </div>

                    <div className="puuntuotanto">
                    <div>Puuntuotanto</div>
                    </div>

                    <div className="select">
                        <select>
                            {
                            this.state.indicatorCategories.map( e => <option key={ e.id } >{ e.name }</option>)
                            }
                        </select>
                    </div>
                </div>
            </indicators>
        )
    }
}

export default Indicators