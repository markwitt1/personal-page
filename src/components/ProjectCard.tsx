import React from "react";
import {
  CardActionArea,
  Grid,
  CardMedia,
  Card,
  CardContent,
  Typography,
  CardActions,
  makeStyles,
  Chip,
} from "@material-ui/core";
import ProjectInfo from "../models/IProjectInfo";

const useStyles = makeStyles(() => ({
  media: {
    height: 140,
  },
  cardActions: {},
  cardButtons: { marginLeft: "auto" },
  chip: {
    margin: 2,
  },
}));

const ProjectCard = ({
  img,
  title,
  text,
  buttons,
  technologies,
  link,
}: ProjectInfo) => {
  const classes = useStyles();
  return (
    <Grid item>
      <Card>
        <CardActionArea
          onClick={() => {
            window.open(link);
          }}
        >
          <CardMedia className={classes.media} image={img} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
          {technologies.map((tech) => (
            <Chip key={tech} label={tech} className={classes.chip} />
          ))}
          <div className={classes.cardButtons}>{buttons}</div>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProjectCard;
