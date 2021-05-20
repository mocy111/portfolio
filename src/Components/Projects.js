import React,{useState} from 'react'
import data_projects from './data_projects'
import Container from '@material-ui/core/Container';
import ProjectCard from './ProjectCard'
import Grid from '@material-ui/core/Grid';
import { SRLWrapper } from "simple-react-lightbox";
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';




const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      width: '100%',
      background:'linear-gradient(90deg, #4458dc 0%, #854fee 100%)'
    },
    textColor:{
        color: "white"
    },
    
  });


  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component={'span'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }

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
    //   console.log(category);

         return (
             




        <Container id="project">
               <div className=" about-title">
                    <h1 className="text-center">
                        <span className='text-uppercase'>Discover some of my projects</span>
                    </h1>
               </div>
                
                <Box mb={7}></Box>
                <Grid container spacing={2}>
                    <AppBar className={classes.root} position="static" color="secondary">
                        <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="on"
                        indicatorColor="secondary"
                        textColor="inherit"
                        aria-label="scrollable force tabs example"
                        
                        >
                        <Tab label="All"  onClick={() => setProjects(data_projects)} className={classes.textColor}   {...a11yProps(0)} />
                                    {
                                        category.map((category,index) => <Tab className={classes.textColor} key={index}  onClick={() => handleFilterCategory(category)} label={category} />
                                    ) }
                    
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <SRLWrapper>
                                <Grid container spacing={2}>
                                    {
                                        projects.map(project =>
                                            <ProjectCard key={project.name} project={project} />)
                                    }
                                </Grid>
                            </SRLWrapper>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                            <SRLWrapper>
                                <Grid container spacing={2}>
                                    {
                                        projects.map(project =>
                                            <ProjectCard key={project.name} project={project} />)
                                    }
                                </Grid>
                            </SRLWrapper>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                            <SRLWrapper>
                                <Grid container spacing={2}>
                                    {
                                        projects.map(project =>
                                            <ProjectCard key={project.name} project={project} />)
                                    }
                                </Grid>
                            </SRLWrapper>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                            <SRLWrapper>
                                <Grid container spacing={2}>
                                    {
                                        projects.map(project =>
                                            <ProjectCard key={project.name} project={project} />)
                                    }
                                </Grid>
                            </SRLWrapper>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                            <SRLWrapper>
                                <Grid container spacing={2}>
                                    {
                                        projects.map(project =>
                                            <ProjectCard key={project.name} project={project} />)
                                    }
                                </Grid>
                            </SRLWrapper>
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                            <SRLWrapper>
                                <Grid container spacing={2}>
                                    {
                                        projects.map(project =>
                                            <ProjectCard key={project.name} project={project} />)
                                    }
                                </Grid>
                            </SRLWrapper>
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                            <SRLWrapper>
                                <Grid container spacing={2}>
                                    {
                                        projects.map(project =>
                                            <ProjectCard key={project.name} project={project} />)
                                    }
                                </Grid>
                            </SRLWrapper>
                    </TabPanel>
                </Grid>


            <Box mb={5}></Box>

        </Container>
        
    )
}

export default Projects
