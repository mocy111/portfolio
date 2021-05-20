import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
  

const ProjectCard = ({project}) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} lg={4} >
             <Card className={classes.root}>
        <CardActionArea>
           <div className="img">
              <a  href={project.image}>
                  <img src={project.image} alt={project.name} className="img-fluid"/>
              </a>
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {project.name}
            </Typography>
            
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Grid item xs={12} sm={6}>
           <a href={project.deployed_url} target="_blank" rel="noopener noreferrer" >
              <Button type="button" className="btn button primary-button mr-4 text-uppercase">Live preview</Button>
          </a>
        </Grid>
        <Grid item xs={12} sm={6}>
          <a href={project.github_url} target="_blank" rel="noopener noreferrer" >
              <Button  type="button" className="btn button secondary-button text-uppercase">source code</Button>
          </a>
        </Grid>
       
       
       
        </CardActions>
      </Card>

        </Grid>
     
    );
}

export default ProjectCard
