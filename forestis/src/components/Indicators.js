import React, { Component } from 'react'

class Indicators extends Component {

    render () {
        return (
            <indicators>
                <div className="indicators">
                    <h4>Indikaattorit</h4>
                    <div className="dropdown">
                    <div className="row">
                    <div className="col-md-6"><span className="pull-right"><h6>Puuntuotanto</h6></span></div>
                    </div>
                    <div className="col-md-6"><span className="pull-right">Kantohinta-arvo</span></div>
                    <p className="text-left">Nettotulojen nykyarvo</p>
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Hakkuukertymä
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item">Action</a>
                            <a className="dropdown-item">Another action</a>
                            <a className="dropdown-item">Something else here</a>
                        </div>
                    </div>
                </div>
            </indicators>
        )
    }
}

export default Indicators