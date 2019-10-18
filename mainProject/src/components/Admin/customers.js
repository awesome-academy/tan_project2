import React, { Component } from "react";
import { connect } from 'react-redux';
import { getUsersAsync, deleteUserAsync } from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class Customers extends Component {
    onDeleteUser(id, name, arr, index){
        if (confirm('Bạn chắc chắn muốn xoá:' + ' ' + name)) { // eslint-disable-line
            this.props.DeleteUserAsync(id, arr, index);
        }
    }

    componentDidMount() {
        this.props.GetUsers();
        console.log(this.props.AllUsers);
    }

    render() {
        let listUsers;
        console.log(this.props.AllUsers);
        if(this.props.AllUsers.length){
            listUsers = this.props.AllUsers.map((item, index) => {
                return  <tr key={index + 10}>
                            <td>{parseInt(index) + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                            <td>
                                <button type="button" className="catalogBtn btn_delete" onClick={() => this.onDeleteUser(item.id, item.name, this.props.AllUsers, index)}>
                                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                </button>
                            </td>
                        </tr>
            });
        }
        return (
            <div className="adMain_content customers_content">
                <table id="customers">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>User Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers}
                    </tbody>
                </table>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        AllUsers: state.users
    }
}
const mapDispatchToProps = dispatch => {
    return {
        GetUsers: () => dispatch(getUsersAsync()),
        DeleteUserAsync: (id,arr,index) => dispatch(deleteUserAsync(id,arr,index))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Customers);
