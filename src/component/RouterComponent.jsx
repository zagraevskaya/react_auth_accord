import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserComponent from "./user/ListUserComponent";
import ListRoleComponent from "./role/ListRoleComponent";
import ListDepartmentComponent from "./department/ListDepartmentComponent";
import AddUserComponent from "./user/AddUserComponent";
import AddDepartmentComponent from "./department/AddDepartmentComponent";
import EditUserComponent from "./user/EditUserComponent";
import EditDepartmentComponent from "./department/EditDepartmentComponent";
import React from "react";
import LoginComponent from "./user/LoginComponent";

const AppRouter = () => {
    return (
        <Router basename={'/admin'}>
            
            <Switch>
                <Route path="/" exact component={LoginComponent} />
                <Route path="/list-user" component={ListUserComponent} />
                <Route path="/list-role" component={ListRoleComponent} />
                <Route path="/list-department" component={ListDepartmentComponent} />
                <Route path="/add-user" component={AddUserComponent} />
                <Route path="/add-department" component={AddDepartmentComponent} />
                <Route path="/edit-user" component={EditUserComponent} />
                <Route path="/edit-department" component={EditDepartmentComponent} />
            </Switch>
        </Router>
    )
}

export default AppRouter;   