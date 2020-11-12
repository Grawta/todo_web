import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import * as types from "../component/interfaces/types";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  container: {
    textAlign: "center",
  }
});

type CardProps = { todo: types.ITodoItem };
export default function CardTodo(cardProps : CardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cardProps.todo.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {cardProps.todo.desc ? cardProps.todo.desc: ""}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
