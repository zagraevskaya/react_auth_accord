import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditUserComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            userId: '',
            name:'',
            lastName: '',
            active: '',
            email: ''
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        ApiService.fetchUserById(window.localStorage.getItem("userId"))
            .then((res) => {
                let user = res.data.result;
                this.setState({
                userId: user.userId,
                name: user.name,
                lastName: user.lastName,
                active: user.active,
                email: user.email
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let user = {userId: this.state.userId, name: this.state.name, lastName: this.state.lastName, active: this.state.active, email: this.state.email};
        console.log(user.userId+" = "+user.name);
        ApiService.editUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/list-user');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit User</h2>
                <form>

                    <div className="form-group">
                        <label>User Name:</label>
                        <input type="text" placeholder="name" name="name" className="form-control" defaultValue={this.state.name} onChange={this.onChange}/>
                    </div>

                   
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>ACTIVE:</label>
                        <input type="number" placeholder="active" name="active" className="form-control" value={this.state.active} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                    </div>

                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditUserComponent;
