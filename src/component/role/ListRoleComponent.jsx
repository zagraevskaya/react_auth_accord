import React, { Component } from 'react'
import RoleService from "../../service/RoleService";
import NavBar from "../Navbar";

class ListRoleComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            roles: [],
            message: null
        }
        this.deleteRole = this.deleteRole.bind(this);
        this.editRole = this.editRole.bind(this);
        this.addRole = this.addRole.bind(this);
        this.reloadRoleList = this.reloadRoleList.bind(this);
    }

    componentDidMount() {
        this.reloadRoleList();
    }

    reloadRoleList() {
        RoleService.fetchRoles()
            .then((res) => {
                this.setState({roles: res.data.result});
                
            });
    }

    deleteRole(roleId) {
        RoleService.deleteRole(roleId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({roles: this.state.roles.filter(role => role.roleId !== roleId)});
           })

    }

    editRole(id) {
        window.localStorage.setItem("roleId", id);
        this.props.history.push('/edit-role');
    }

    addRole() {
        window.localStorage.removeItem("roleId");
        this.props.history.push('/add-role');
    }

    render() {
        return (
            <div>
                <NavBar/>
                <br/>
                <button className="btn btn-danger" onClick={() => this.addRole()}> Add Role</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">RoleId</th>
                            <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                        {this.state.roles.map(role =>  <tr key={role.roleId}>
                                 <td>{role.role}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteRole(role.roleId)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editRole(role.roleId)}> Edit</button>
                                        
                                        </td>
                                        <td>  
                                           { /*<button className="btn btn-success" onClick={() => this.editRole(role.roleId)}> Edit</button>*/}
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

export default ListRoleComponent;
