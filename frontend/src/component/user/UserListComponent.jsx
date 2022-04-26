import React, {Component} from 'react';
import ApiService from "../../ApiService";
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CreateIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'

class UserListComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            message: null
        }
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList = () => {
        ApiService.fetchUsers()
            .then(res => {
                this.setState({
                    users: res.data
                })
            })
            .catch(err => {
                console.log('reloadUserList() Error!', err);
            })
    }

    deleteUser = (userID) => {
        ApiService.deleteUser(userID)
            .then(res => {
                this.setState({
                    message: 'User Deleted Successfully.'
                });
                this.setState({
                    users: this.state.users.filter(user =>
                        user.id !== userID)
                });
            })
            .catch(err => {
                console.log('deleteUser() Error!', err);
            })
    }

    editUser = (ID) => {
        window.localStorage.setItem("userID", ID);
        document.location.href = '/edit-user';
    }

    addUser = () => {
        window.localStorage.removeItem("userID");
        //this.props.history.push('/add-user}');
        document.location.href = '/add-user';
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>LIST</Typography>
                <Button variant="contained" color="primary" onClick={this.addUser}> Add Member </Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="left">FistName</TableCell>
                            <TableCell align="left">LastName</TableCell>
                            <TableCell align="left">UserName</TableCell>
                            <TableCell align="left">Age</TableCell>
                            <TableCell align="left">Salary</TableCell>
                            <TableCell align="left">Edit</TableCell>
                            <TableCell align="left">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users.map(user =>
                            <TableRow key={user.id}>
                                <TableCell component="th" scope="user">{user.id}</TableCell>
                                <TableCell align="left">{user.f_name}</TableCell>
                                <TableCell align="left">{user.l_name}</TableCell>
                                <TableCell align="left">{user.name}</TableCell>
                                <TableCell align="left">{user.age}</TableCell>
                                <TableCell align="left">{user.salary}</TableCell>
                                <TableCell align="left" onClick={() => this.editUser(user.id)}>
                                    <CreateIcon/>
                                </TableCell>
                                <TableCell align="left" onClick={() => this.deleteUser(user.id)}>
                                    <DeleteIcon/>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        );

    }

}


const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default UserListComponent;