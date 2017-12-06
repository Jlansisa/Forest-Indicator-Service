import React, { Component } from 'react'
import SplitButton from 'react';

class Scenarios extends Component {
    render () {
        return (
            <scenarios>
                <div className="scenarios">
                    <h4>Skenaariot</h4>
                    <div className="dropdown">
                    <h6>Aluetaso <span class="label label-default"></span></h6>
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Maakunnat
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
            </scenarios>
        )
    }
}

export default Scenarios