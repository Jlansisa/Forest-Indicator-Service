import React, { Component } from 'react'

class Scenarios extends Component {

    constructor(props){
        super(props);

        this.state = {
            inputMaakunnat: this.value
        } 

  /*     function clickedMaakunnat() {
            document.getElementById("dropdownMenuButton").classList.toggle("show");
        }

            // Close the dropdown menu if the user clicks outside of it
            window.onclick = function(event) {
                if (!event.target.matches('.dropdown')) {
            
                var dropdowns = document.getElementsByClassName("dropdown-menu");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                    }
                }
            }
            } */
    }

    clickedMaakunnat(event)
    {
        console.log(event.value);
        this.setState({ inputMaakunnat: event.value });
    }

    render () {

       const { displayMaakunnat } = this.props;

        let content = null;
        if(displayMaakunnat)
        {
            content = (
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item">Action</a>
                <a className="dropdown-item">Another action</a>
                <a className="dropdown-item">Something else here</a>
                <input type="value" value={ this.state.inputMaakunnat }/>
            </div>);
        }
        else
        {
            content =                          
           <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
            onClick={ (e) => { this.clickedMaakunnat(); } }>Maakunnat</button>
        }

        return (
        /*    <scenarios>

                <div className="scenarios">
                    <h4>Skenaariot</h4>

                    <div className="label-aluetaso">
                    <h6>Aluetaso <span class="label label-default"></span></h6>
                    </div>

                    <div className="dropdown">
                    <button onClick={inputMaakunnat} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Maakunnat
                    </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item">Action</a>
                            <a className="dropdown-item">Another action</a>
                            <a className="dropdown-item">Something else here</a>
                        </div>
                    </div>

                </div>
            </scenarios> */

            <scenarios>
            <div className="scenarios">
                <h4>Skenaariot</h4>

                <div className="dropdown">
                <h6>Aluetaso <span className="label label-default"></span></h6>
                </div>

                <div>
                {content}
                </div>
            </div>
            </scenarios>
        )
    }
}

export default Scenarios