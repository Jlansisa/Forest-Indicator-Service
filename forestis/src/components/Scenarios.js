import React, { Component } from 'react'

class Scenarios extends Component {

    constructor(props)
    {
        super(props);
        this.regionLevelSelectChange = this.regionLevelSelectChange.bind(this);
    }

    ChosenOption(e){
        this.setState({ ChosenOption: e.target.value })
    }

    regionLevelSelectChange(event)
    {        
        this.props.selectRegionLevel(event.target.value);
    }

    render () {
        
        const { regionLevels,
                regions } = this.props;

/*        let regions = this.state.regionlevels;
        var alue1 = this.state.regions1;
        var alue2 = this.state.regions2;*/
        /*
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
        */
        return (
            <div>
                <div className="scenarios">
                    <div className="">
                        <div>Aluetaso</div>
                        <div className="select1">
                            <select onChange={this.regionLevelSelectChange} >
                                {
                                    regionLevels.map( e => <option key={ e.id } value={e.id}>{ e.name }</option>)
                                }
                            </select>
                        </div>
                    </div>

                    <div className="">
                        <div>Alue</div>
                        <div>
                            <select>
                                {
                                    regions.map( e => <option key={ e.id }>{ e.name }</option>)
                                }
                            </select>
                        </div>
                    </div>

                    <div className="">
                        <div>Skenaariokokoelma</div>
                    </div>

                    <div className="">
                        <div>Skenaario</div>
                    </div>
                </div>


                

            

            </div> 
        )
    }
}

export default Scenarios