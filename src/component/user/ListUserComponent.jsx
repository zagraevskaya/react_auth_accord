import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import NavBar from "../Navbar";


class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        console.log("USER!!!!");
        ApiService.fetchUsers()
            .then((res) => {
                this.setState({users: res.data.result})
            });
    }

    deleteUser(userId) {
        ApiService.deleteUser(userId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter(user => user.userId !== userId)});
           })

    }

    editUser(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }

    render() {
        return (
            <div>
                <NavBar/>
               <br/>
                <button className="btn btn-danger" onClick={() => this.addUser()}> Add User</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Active</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                        user =>
                                    <tr key={user.userId}>
                                        <td>{user.name}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.active}</td>
                              
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteUser(user.userId)}> Delete</button>
                                        </td>
                                        <td>  
                                            <button className="btn btn-success" onClick={() => this.editUser(user.userId)}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListUserComponent;
