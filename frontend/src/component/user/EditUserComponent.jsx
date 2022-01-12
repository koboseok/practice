import React, {Component} from 'react';
import ApiService from "../../ApiService";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class EditUserComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            username: '',
            firstName: '',
            lastName: '',
            age: '',
            salary: '',
            message: null
        }
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser = () => {
        ApiService.fetchUserByID(window.localStorage.getItem("userID"))
            .then(res => {
                let user = res.data;
                this.setState({
                    id: user.id,
                    name: user.name,
                    f_name: user.f_name,
                    l_name: user.l_name,
                    age: user.age,
                    salary: user.salary
                })
            })
            .catch(err => {
                console.log('loadUser() 에러', err);
            });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveUser = (e) => {
        e.preventDefault();

        let user = {
            id: this.state.id,
            name : this.state.name,
            f_name: this.state.f_name,
            l_name: this.state.l_name,
            age: this.state.age,
            salary: this.state.salary
        }

        ApiService.editUser(user)
            .then(res => {
                this.setState({
                    message: user.lastName + '님 정보가 수정되었습니다.'
                })
                // this.props.history.push('/users');
                document.location.href = '/users';
            })
            .catch(err => {
                console.log('saveUser() 에러', err);
            })
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Edit User</Typography>
                <form>
                    <TextField type="text" name="name" readOnly={true}
                               fullWidth margin="normal" value={this.state.name}/>

                    <TextField placeholder="Edit your first name" name="f_name"
                               fullWidth margin="normal" value={this.state.f_name} onChange={this.onChange}/>

                    <TextField placeholder="Edit your last name" name="l_name"
                               fullWidth margin="normal" value={this.state.l_name} onChange={this.onChange}/>

                    <TextField type="number" placeholder="Edit your age" name="age"
                               fullWidth margin="normal" value={this.state.age} onChange={this.onChange}/>

                    <TextField type="number" placeholder="Edit your salary" name="salary"
                               fullWidth margin="normal" value={this.state.salary} onChange={this.onChange}/>

                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>

                </form>
            </div>
        );
    }
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default EditUserComponent;
