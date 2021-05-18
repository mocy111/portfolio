import React,{useState} from 'react'
import data_projects from './data_projects'
import Container from '@material-ui/core/Container';
import ProjectCard from './ProjectCard'
import Grid from '@material-ui/core/Grid';
import { SRLWrapper } from "simple-react-lightbox";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';




const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      background:'linear-gradient(90deg, #4458dc 0%, #854fee 100%)'
    },
    textColor:{
        color: "white"
    },
    
  });

const Projects = () => {

    const classes = useStyles();
    const [value, setValue] = useState(0);

    const [projects, setProjects] = useState(data_projects)

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array)
    }

    // get all unique values
    const getUnique = (items, value) => {
        return [...new Set(items.map(item => item[value]))];
    };
  
      // get unique types
      let category = getUnique(data_projects, "category");

         return (
        <Container>
        
            <Paper className={classes.root} >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    // textColor="secondary"
                    textColor="inherit"
                    centered
                >
                    <Tab label="All" className={classes.textColor}  onClick={() => setProjects(data_projects)}  />
                          {
                            category.map((category,index) =>
                                <Tab className={classes.textColor} key={index}  onClick={() => handleFilterCategory(category)} label={category} />
                                )
                          }
                   </Tabs>
            </Paper>
        
            <Box mb={5}></Box>
        
            <SRLWrapper>
                <Grid container spacing={2}>
                    {
                        projects.map(project =>
                            <ProjectCard key={project.name} project={project} />)
                    }
                </Grid>
            </SRLWrapper>
        
        </Container>
    )
}

export default Projects
