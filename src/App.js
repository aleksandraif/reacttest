import React from 'react';
import CoinTable from './components/coin-table/index';

import data from './components/data/coins.json';

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
        <div
        className="page-container"
        >
            <CoinTable data={this.state.data} />
        </div>
    )
}
}