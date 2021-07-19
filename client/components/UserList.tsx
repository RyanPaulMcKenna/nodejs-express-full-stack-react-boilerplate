import React from "react";
import { IUser } from "../interfaces/interfaces";
import { IUserService } from "../services/IUser.Service";
import { UserItem } from "./UserItem";

interface IProps {
    service: IUserService;
}

interface IState {
    users: IUser[];
}

export default class UserList extends React.component<IProps, IState> {

    public async componentDidMount(){
        const users = await this.props.service.getUsers();
        this.setState({ users });
    }

    public render() {
        const userList: IUser[] = this.state.users;
        return (
            <div>
                {userList.map((user)=> <UserItem user={user} />)}
            </div>
        );
    }
}