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


    public render() {
        const userList: IObservableUser[] = [];
        return (
            <div>
                {userList.map((user)=> <UserItem user={user} />)}
            </div>
        );
    }
}