import React, { Component } from 'react'
import DepartmentService from "../../service/DepartmentService";

class AddDepartmentComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            nameDepartment: '',
            codeIspro: '',
            orderCode: '',
            branchId: '',
            message: null
        }
        this.saveDepartment = this.saveDepartment.bind(this);
    }

    saveDepartment = (e) => {
        e.preventDefault();
        let department = {nameDepartment: this.state.nameDepartment, codeIspro: this.state.codeIspro, orderCode: this.state.orderCode, branchId: this.state.branchId};
        
        DepartmentService.addDepartment(department)
            .then(res => {
                console.log("res = "+res.data.result);
                this.setState({message : 'Department added successfully.'});
                this.props.history.push('/list-department');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add department</h2>
                <form>
                <div className="form-group">
                    <label>Відділення</label>
                    <input type="text" placeholder="name" name="nameDepartment" className="form-control" value={this.state.nameDepartment} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Код isPro</label>
                    <input type="text" placeholder="codeIsPro" name="codeIspro" className="form-control" value={this.state.codeIspro} onChange={this.onChange}/>
                </div>

               
               <div className="form-group">
                    <label>Cортировка</label>
                    <input placeholder="orderCode" name="orderCode" className="form-control" value={this.state.orderCode} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>branchId</label>
                    <input type="number" placeholder="branchId" name="branchId" className="form-control" value={this.state.active} onChange={this.onChange}/>
                </div>

               
                <button className="btn btn-success" onClick={this.saveDepartment}>Save</button>
            </form>
    </div>
        );
    }
}

export default AddDepartmentComponent;

