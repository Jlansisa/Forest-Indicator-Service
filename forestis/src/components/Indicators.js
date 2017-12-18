import React, { Component } from 'react'
import Axios from 'axios';
import Scenarios from './Scenarios';

class Indicators extends Component {


    render () {

        const { scenarioCollections } = this.props;

        return (
            <indicators>
                <div className="indicators">
                    <div className="indikaattorit">
                    <p>Indikaattorit</p>
                    </div>

                    <div className="puuntuotanto">
                    <p>Puuntuotanto</p>
                        <select>
                            {
                            scenarioCollections.map( e => <option key={ e.id } value={e.id}>{ e.name }</option>)
                            }
                        </select>
                    </div>

                </div>
            </indicators>
        )
    }
}

export default Indicators