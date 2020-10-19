import React, { ReactElement, useState, useEffect } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  IconButton,
  Typography,
  Button,
  Toolbar,
  createStyles,
  Theme,
  makeStyles,
} from "@material-ui/core";

import axios from "axios";

export interface AppBarProps {}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function AppBarNathan(props: AppBarProps): ReactElement | null {
  const classes = useStyles();

  const [greeting,setGreeting] = useState<string>("");

  useEffect(() => {
    axios.get("http://localhost:3000/ping").then( res => {
      setGreeting(res.data.greeting);
    } )
  },[]);
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          className={classes.menuButton}
          aria-label="menu"
        ><MenuIcon/></IconButton>

        <Typography variant="h6" className={classes.title}>
          {greeting}
        </Typography>
        <Button color="inherit" >Login</Button>
      </Toolbar>
    </AppBar>
  );
}
