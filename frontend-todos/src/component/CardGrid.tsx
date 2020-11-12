import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "./Card"
import * as types from "../component/interfaces/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing(2),
    },
  })
);

export type CardGridProps = {
  todoList : types.ITodoItem[];
};

export default function CardGrid(CardGridProps : CardGridProps) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {CardGridProps.todoList.map((todo: types.ITodoItem) => (
            <Grid key={todo.id} item>
              <Card todo={todo}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
