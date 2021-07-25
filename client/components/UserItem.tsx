import React from "react";
import { IObservableUser } from "../interfaces/interfaces";

interface IProps {
    user: IObservableUser;
}

export const UserItem = (props: IProps) => (
    <div>
        <h4>User: {props.user.id}</h4>
        <ul>
            {Object.keys(props.user).map((key: string, index: number) => 
                <li> {key}: {Object.values(props.user)[index]} </li>)}
        </ul>
    </div>
);