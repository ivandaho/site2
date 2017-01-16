import React, { Component } from 'react';

import { Link } from 'react-router';

import { Jumbotron } from 'react-bootstrap';

export default class FooterComponent extends Component {
    render() {
        return (
            <div id='footer'>
                <div id='mid'>
                    <a href="https://github.com/ivandaho/site2">source</a> · <a href="https://github.com/ivandaho">about</a>
                </div>
            </div>
        )
    }
}
