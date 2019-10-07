import React from 'react';
import './App.css';
import Users from './components/Users';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

class App extends React.Component {

    render() {
        let contentApp;
        if (this.props.Role === "USERS") {
            contentApp = <Users></Users>
        }
        else {
            contentApp = 'Admin'
        }

        return (
            <div className="App">
                {contentApp}
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
        Role: state.role
    }
}

export default connect(mapStateToProps, null)(App);
