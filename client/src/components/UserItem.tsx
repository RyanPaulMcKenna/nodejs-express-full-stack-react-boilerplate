import React from "react";
import { IObservableUser } from "../interfaces/interfaces";

export interface IUserItemProps {
    user: IObservableUser;
}

export class UserItem extends React.Component<IUserItemProps>
{
    public render() {
        return (<div>
            <h4>User: {this.props.user.id}</h4>
            <ul>
                {Object.keys(this.props.user).map((key: string, index: number) =>
                    <li> {key}: {String(Object.values(this.props.user)[index])} </li>)}
            </ul>
        </div>)
    }

}