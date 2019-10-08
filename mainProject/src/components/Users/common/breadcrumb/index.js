import React from 'react';
import { Link } from 'react-router-dom';

class Breadcrumb extends React.Component {

    render() {
        return (
            <div>
                <ul className="breadcrumb">
                    <li>
                        <Link to="/"> Trang chủ /</Link>
                    </li>
                    <li>
                        <Link to={this.props.InfoBreadcrumb.path}>&nbsp; {this.props.InfoBreadcrumb.name} </Link>
                    </li>
                </ul>
            </div>
        )
    };
}


export default Breadcrumb;
