import React, { Component } from 'react'

class Indicators extends Component {

    render () {
        return (
            <indicators>
                <div className="indicators">
                    <h4>Indikaattorit</h4>
                    <div className="dropdown">
                    <div class="row">
                    <div class="col-md-6"><span class="pull-right"><h6>Puuntuotanto</h6></span></div>
                    </div>
                    <div class="col-md-6"><span class="pull-right">Kantohinta-arvo</span></div>
                    <p class="text-left">Nettotulojen nykyarvo</p>
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Hakkuukertymä
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
            </indicators>
        )
    }
}

export default Indicators