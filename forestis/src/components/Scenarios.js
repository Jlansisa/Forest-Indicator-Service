import React, { Component } from 'react'

class Scenarios extends Component {

    constructor(props)
    {
        super(props);
        this.regionLevelSelectChange = this.regionLevelSelectChange.bind(this);
        this.regionSelectChange = this.regionSelectChange.bind(this);
    }
    
    regionLevelSelectChange(event)
    {        
        this.props.selectRegionLevel(event.target.value);
    }

    regionSelectChange(event)
    {        
        this.props.selectRegion(event.target.value);
    }

    render () {
        
        const { regionLevels, regions } = this.props;

        return (
            <scenarios>
                <div className="scenarios">
                    <div className="">
                        <p>Skenaariot</p>
                    </div>

                    <div className="skenaariokokoelma">
                        <div>Skenaariokokoelma</div>
                    </div>

                    <div className="aluetaso">
                        <p> Aluetaso </p>
                                <select onChange={this.regionLevelSelectChange} >
                                    {
                                    regionLevels.map( e => <option key={ e.id } value={e.id}>{ e.name }</option>)
                                    }
                                </select>
                    </div>

                    <div className="alue">
                        <p>Alue</p>
                            <div>
                                <select onChange={this.regionSelectChange}>
                                    {
                                    regions.map( e => <option key={ e.id } value={e.id} value={e.scenarioCollections}>{ e.name }</option>)
                                    }
                                </select>
                            </div>
                    </div>
                </div>
            </scenarios>
         )
    }    
}

export default Scenarios