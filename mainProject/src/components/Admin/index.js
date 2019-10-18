import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt, faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './dashboard';
import Catalog from './catalog';
import customers from './customers';
import order from './order';
import OrderDetail from './orderDetail';
import { connect } from 'react-redux';
import { setProfile } from '../../redux/actions';

class AdminPage extends React.Component {

    SetProfile = () => {
        sessionStorage.setItem("user", JSON.stringify({}));
        this.props.SetProfile({});
    }
    
    render() {
        return (
            <Router>
                <div className="adPage">
                    <div className="adHeader">
                        <div>Admin</div>
                        <NavLink exact to="/" className="adLogOut" onClick={this.SetProfile}>
                            <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>
                            LogOut
                        </NavLink>
                    </div>
                    <div className="adMain">
                        <div className="adMain_menu">
                            <NavLink exact to="/" className="adMain_menu-item" activeStyle={{ fontWeight: "500", color: "rgba(0, 0, 0, 0.87)" }}>
                                <FontAwesomeIcon icon={faListAlt}></FontAwesomeIcon>
                                <span>Dashboard</span>
                            </NavLink>
                            <NavLink to="/orders" className="adMain_menu-item" activeStyle={{ fontWeight: "500", color: "rgba(0, 0, 0, 0.87)" }}>
                                <FontAwesomeIcon icon={faListAlt}></FontAwesomeIcon>
                                <span>Orders</span>
                            </NavLink>
                            <NavLink to="/catalog" className="adMain_menu-item" activeStyle={{ fontWeight: "500", color: "rgba(0, 0, 0, 0.87)" }}>
                                <FontAwesomeIcon icon={faListAlt}></FontAwesomeIcon>
                                <span>Catalog</span>
                            </NavLink>
                            <NavLink to="/customers" className="adMain_menu-item" activeStyle={{ fontWeight: "500", color: "rgba(0, 0, 0, 0.87)" }}>
                                <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                                <span>Customers</span>
                            </NavLink>
                        </div>
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route path="/catalog" component={Catalog} />
                            <Route path="/customers" component={customers} />
                            <Route path="/orders" component={order}/>
                            <Route path="/orderDetail:id" component={OrderDetail}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        SetProfile: (data) => dispatch(setProfile(data))
    }
}

export default connect(null, mapDispatchToProps) (AdminPage);
