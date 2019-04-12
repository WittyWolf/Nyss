import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alert from './Alerts/AlertRuleList';
import AlertForm from './Alerts/AlertForm';
import AddAlertRule from './AddAlertRule';

class App extends Component {
    componentWillMount() {
        this.props.requestRules();
    }

    render() {
        return (
            <div className="alerts">
                <Alert />
                <AlertForm/>

            </div>
        );
    }
}

export default connect(
    state => ({
        baseUrl: state.root.baseUrl,
    }),
    dispatch => ({
        requestRules: () => {
            dispatch({ type: 'REQUEST_RULES' });
        },
    })
)(App);
