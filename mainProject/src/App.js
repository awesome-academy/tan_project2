import React from 'react';
import './App.css';
import Users from './components/Users';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import AdminPage from './components/Admin';
library.add(fab)

class App extends React.Component {

    render() {
        let contentApp;
        if (this.props.Profile.role === 1) {
            contentApp = <AdminPage></AdminPage>
        }
        else {
            contentApp = <Users></Users>
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
        Profile: state.profile
    }
}

export default connect(mapStateToProps, null)(App);
