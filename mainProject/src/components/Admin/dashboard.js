import React, { Component } from "react";
import './dashboard.css';

class Dashboard extends Component {

    render() {
        return (
            <div className="adMain_content dashboard_content">
                <div>
                    <div className="dashboard_title">
                        <div className="monthlyRevenue">
                            <div className="dashboard_title-icon">
                                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <g>
                                        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <div className="dashboard_title-text">
                                <p>Monthly Revenue</p>
                                <p>15.000.000 VND</p>
                            </div>
                        </div>
                        <div className="visit">
                            <div className="dashboard_title-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24"><path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 7l-3.36-2.171c-.405.625-.64 1.371-.64 2.171 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-.742 0-1.438.202-2.033.554l2.033 3.446z" /></svg>
                            </div>
                            <div className="dashboard_title-text">
                                <p>Visit/Month</p>
                                <p>140</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="dd">dsdfffffffffffffff</div> */}
                    <div></div>
                    <div className="row">
                        
                    </div>
                </div>
                <div>
                    <div className="dashboard_title">
                        <div className="newOrder">
                            <div className="dashboard_title-icon">
                                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <g>
                                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <div className="dashboard_title-text">
                                <p>New Orders</p>
                                <p> listOrdersRequest </p>
                            </div>
                            <div className="mutiList">
                                listOrders
                            </div>
                        </div>
                        <div className="newCustomers">
                            <div className="dashboard_title-icon">
                                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <g>
                                        <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <div className="dashboard_title-text">
                                <p>New Customers</p>
                                <p> this.props.stateReducers.dataUsers </p>
                            </div>
                            <div className="mutiList">
                                listUsers
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
