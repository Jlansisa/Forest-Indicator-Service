import React, { Component } from 'react';
//includes
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Header from './components/Header';
import Scenarios from './components/Scenarios';
import Indicators from './components/Indicators';
import Chart from './components/Chart';
//Assets
import './Assets/css/default.min.css';

class App extends Component {

  constructor(props)
  {
    super(props);

  }


  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10">
              <Header/>
            </div>
          </div>

          <div className="row">
                <Scenarios/>
                <Indicators/>
          </div>
        </div>
    </div>

    );
  }
}

export default App;
