import React, { useEffect, useState } from "react";

// import isEmpty from "lodash/isEmpty";

// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import Container from "@material-ui/core/Container";
// import Box from "@material-ui/core/Box";
// import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import Avatar from "@material-ui/core/Avatar";
// import { FixedSizeList } from "react-window";

import "./App.css";

import { UserService } from "./services/User.service";
import { IUserService } from "./services/IUser.Service";
import { UserRepository } from "./repositories/User.repository";
import UserList from './components/UserList';

const service: IUserService = new UserService(new UserRepository());


class App extends React.Component{

  public render() {
    return (<div>
      <h1>Example</h1>
      <UserList service={service} />
    </div>);
  }
} 


export default App;

