import axios from "axios";
import decode from "jwt-decode";
//makes a HTTP POST request to mock authentication server
class Authentication {


    authenticate(username, password, cb, errorcb) {
        axios
            .post("http://localhost:8085/auth", {
                identifier: username,
                password: password
            })
            .then(res => {

                localStorage.setItem('authToken', res.data.token);

                cb();
            })
            .catch(err => {
                this.error = err.response.status;
                errorcb();
            });
    }
    getUser() {
        //check if logged in member is present
        const token = localStorage.getItem('authToken');

        if (!token) {
            return;
        }

        return decode(token);
    }
    signout(cb) {

        localStorage.removeItem('authToken');
        cb();
    }
}

export default new Authentication();