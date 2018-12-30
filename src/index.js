import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export default function CoinTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>age</th>
                    <th>phone</th>
                    <th>mail</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    )
}

render(<App />, document.getElementById("root"));

