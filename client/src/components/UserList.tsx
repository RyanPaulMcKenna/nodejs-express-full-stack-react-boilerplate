import React from "react";
import { IObservableUser } from "../interfaces/interfaces";
import { IUserService } from "../services/IUser.Service";
import { UserItem } from "./UserItem";

interface IProps {
    service: IUserService;
}

interface IState {
    users: IObservableUser[];
}

export default class UserList extends React.Component<IProps, IState> {

    public async componentDidMount() {
        let allUsers = await this.props.service.getUsers();
        this.setState({ users: allUsers });
    }
    
    public render() {
        
        if (this.state) 
        {
            return (
<div> {this.state.users.map((user: IObservableUser) => <UserItem user={user} /> ) }</div>)
        }

        return <div></div>
     }
}