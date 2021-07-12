import React, { useEffect, useState } from "react";

import isEmpty from "lodash/isEmpty";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { FixedSizeList } from "react-window";

import "./App.css";

const useStyles = makeStyles({
  containerRoot: {
    height: "100vh",
  },
});

function App() {
  const classes = useStyles();
  const [posts, setPosts] = useState<[]>([]);
  // "https://progression-backend-node.herokuapp.com/posts"
  async function fetchPosts() {
    await fetch("http://localhost:4000/api/users")
      .then((data) => data.json())
      .then((response) => setPosts(response?.data ?? []));
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container maxWidth="md" className={classes.containerRoot}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        flexDirection="column"
        paddingTop={5}
        paddingBottom={5}
      >
        <Typography variant="h2">JSON Placeholder list</Typography>
        <Box display="flex" alignItems="center" marginTop={2}>
          {isEmpty(posts) ? (
            <CircularProgress />
          ) : (
            <FixedSizeList
              height={500}
              width={700}
              itemData={posts}
              itemCount={100}
              itemSize={100}
            >
              {PostRow}
            </FixedSizeList>
          )}
        </Box>
      </Box>
    </Container>
  );
}

export default App;

function PostRow({
  data,
  index,
  style,
}: {
  data: [];
  index: number;
  style: {};
}) {
  const item = data[index] as { name: string; surname: string };

  return (
    <ListItem style={style} key={index}>
      <ListItemAvatar>
        <Avatar>
          <PersonRoundedIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={item?.name} secondary={item?.surname} />
    </ListItem>
  );
}
