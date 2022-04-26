import React, {Component} from 'react';
import ApiService from "../../ApiService";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AddUserComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            f_name: '',
            l_name: '',
            age: '',
            salary: '',
            message: null
        }

    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    saveUser = (e) => {
        e.preventDefault();

        let user = {
            name: this.state.name,
            f_name: this.state.f_name,
            l_name: this.state.l_name,
            age: this.state.age,
            salary: this.state.salary,
        }

        ApiService.addUser(user)
            .then(res => {
                this.setState({
                    message: user.name + '님이 성공적으로 등록되었습니다.'
                })
                console.log(this.state.message);
                document.location.href = '/';
            })
            .catch(err => {
                console.log('saveUser() 에러', err);
            });

    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Add User</Typography>
                <form style={formContainer}>

                    <TextField type="text" placeholder="please input your username" name="name"
                               fullWidth margin="normal" value={this.state.name} onChange={this.onChange}/>

                    <TextField placeholder="please input your first name" name="f_name"
                               fullWidth margin="normal" value={this.state.f_name} onChange={this.onChange}/>

                    <TextField placeholder="please input your last name" name="l_name"
                               fullWidth margin="normal" value={this.state.l_name} onChange={this.onChange}/>

                    <TextField type="number" placeholder="please input your age" name="age"
                               fullWidth margin="normal" value={this.state.age} onChange={this.onChange}/>

                    <TextField type="number" placeholder="please input your salary" name="salary"
                               fullWidth margin="normal" value={this.state.salary} onChange={this.onChange}/>

                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>

                </form>
            </div>
        );
    }
}

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default AddUserComponent;
