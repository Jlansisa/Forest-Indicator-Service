import React, { Component } from 'react'
import Axios from 'axios';
import Scenarios from './Scenarios';

class Indicators extends Component {

    constructor(props){
        super(props);

        this.state = {
            scenarioitems1: [],
            scenarioitems2: []
        } 
    }

    componentDidMount() {

        //tilan kautta
        Axios.get('http://melatupa.azurewebsites.net/scenarioCollection/3/region/1')
        .then(response => { 
            console.log(response)
        
            this.setState({ scenarioitems1: response.data });
        }), 
            Axios.get('http://melatupa.azurewebsites.net/scenarioCollection/4/region/1')
            .then(response => { 
                console.log(response)
            
                this.setState({ scenarioitems2: response.data });
            });
    }

    render () {

        const { regionlevels } = this.props;

        var scenarioitems1 = this.state.scenarioitems1;
        var scenarioitems2 = this.state.scenarioitems2;

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
                          scenarioitems1.map(e => <option key={ e.id } >{ e.name }</option>)
                        }
                        </select>
                    </div>
                </div>
            </indicators>
        )
    }
}

export default Indicators