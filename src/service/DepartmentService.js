import axios from 'axios';
import AuthService from './AuthService';

const USER_API_BASE_URL = 'http://localhost:8080/auth-accord-idoc/departments';

class DepartmentService {

    fetchDepartments() {
        return axios.get(USER_API_BASE_URL, AuthService.getAuthHeader());
    }

    fetchDepartmentById(id) {
        return axios.get(USER_API_BASE_URL + '/' + id, AuthService.getAuthHeader());
    }

    deleteDepartment(id) {
        console.log("!!!!"+id);
        return axios.delete(USER_API_BASE_URL + '/' + id, AuthService.getAuthHeader());
    }

    addDepartment(department) {
        console.log(department.nameDepartment); 
        return axios.post(""+USER_API_BASE_URL, department, AuthService.getAuthHeader());
    }


    editDepartment(department) {
        return axios.put(USER_API_BASE_URL + '/' + department.departmentId, department, AuthService.getAuthHeader());
    }

}

export default new DepartmentService();