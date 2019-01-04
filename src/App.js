import React from 'react';
import PhoneTable from './components/Phone-table';

import data from './components/data/phone.json';
import PropTypes from 'prop-types';


import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        data: data
    }
  }

  render() {
    return (
      <div>
          <PhoneTable data={this.state.data} />
      </div>
    )
  }
}

App.propTypes = {
   optionalArray: PropTypes.array}

export default App;