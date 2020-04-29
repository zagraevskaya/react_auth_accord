import axios from 'axios';
import AuthService from './AuthService';

const USER_API_BASE_URL = 'http://localhost:8080/auth-accord-idoc/roles';

class RoleService {

    fetchRoles() {
        return axios.get(USER_API_BASE_URL, AuthService.getAuthHeader());
    }

    fetchUserById(roleId) {
        return axios.get(USER_API_BASE_URL + '/' + roleId, AuthService.getAuthHeader());
    }

    deleteRole(roleId) {
        return axios.delete(USER_API_BASE_URL + '/' + roleId, AuthService.getAuthHeader());
    }

    addRole(role) {
        return axios.post(""+USER_API_BASE_URL, role, AuthService.getAuthHeader());
    }

    editRole(role) {
        return axios.put(USER_API_BASE_URL + '/' + role.roleId, role, AuthService.getAuthHeader());
    }

}

export default new RoleService();