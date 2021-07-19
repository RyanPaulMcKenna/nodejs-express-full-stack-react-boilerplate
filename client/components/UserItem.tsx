import React from "react";
import { IUser } from "../interfaces/interfaces";

interface IProps {
    user: IUser;
}

export const UserItem = (props: IProps) => (
    <div>
        <h4>User: {props.user.id}</h4>
        <ul>
            {Object.keys(props.user).map((key: string) => <li> {key}: {props.user[key]} </li>)}
        </ul>
    </div>
);