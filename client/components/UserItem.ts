import React from "react";
import { IUser } from "../interfaces/interfaces";
import { IUserService } from "../services/IUser.Service";

interface IProps {
    service: IUserService
}

interface IState {
    user: IUser
}

class UserItem extends React.Component<IProps,IState> {
    constructor(props: IProps){
        super(props)
    }

    
}