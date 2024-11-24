import React from 'react';
import Classifier from './Classifier';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import breeds from './classes';
import { getBreed } from './utils';

// Import your local background image
import backgroundImage from './bg.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundImage: `url(${backgroundImage})`, // Use the imported image
        backgroundSize: 'cover', // Ensure the image covers the entire area
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent repeating
        minHeight: '100vh', // Cover the full viewport height
        color: '#ffffff', // Optional: Adjust text color for better contrast
    },
    content: {
        marginTop: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: Semi-transparent background for content
        borderRadius: '8px', // Optional: Add rounded corners
        padding: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Dog Breed Classifier
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.content}>
                <Classifier />
            </Container>
            <Container className={classes.content}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>How do I use this?</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant="body2">
                            Tab on the image icon to take a photo of a dog and drag and drop an image file of a dog
                            on the image icon to classify the dog's breed. Note that only {breeds.length} different dog
                            breeds are supported. If your image shows a different dog breed, the prediction will be
                            pretty meaningless.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>
                            What dog breeds does the classifier know?
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant="body2">
                            This classifier is based on the Stanford Dogs Dataset, which contains {breeds.length} different
                            breeds. Here is a list of all of them: {breeds.map(breed => getBreed(breed)).join(', ')}.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography className={classes.heading}>What is this good for?</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant="body2">
                            This app is not made to actually classify dog breeds. Rather, it is an end-to-end example
                            that shows how to train machine learning models and run them in the browser and how to use
                            the DevOps CI/CD pipeline to monitor the website.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                    >
                        <Typography className={classes.heading}>What happens to my data?</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant="body2">
                            No image that you take with or add to this application will be uploaded or stored on my or
                            anyone's servers by this application/website. In fact, your images never leave your device,
                            because all the calculations are done in your browser! Only some general networking data is
                            processed to make this website work (like all websites).
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Container>
        </div>
    );
}

export default App;
