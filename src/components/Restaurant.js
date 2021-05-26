import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(3),
        marginBottom: '5px',
    },
    img: {
        width: 80,
        height: 80,
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const Restaurant = ({id, name = 'restaurant', descr = 'descr',
    status = 'closed', rating = '0', imgSrc = '' }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link to ={'/restaurants/'+id} style={{ textDecoration: 'none' }} >
                <Paper elevation={6} className={classes.paper}>
                    <Grid container spacing={1}>
                        <Grid item xs={3}>
                            <img className={classes.img} src={imgSrc} />
                        </Grid>
                        <Grid item xs={9} container>
                            <Grid item xs container direction="column" spacing={1}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="h5">
                                        {name}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {descr}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6">{rating}</Typography>
                                <Typography variant="overline" gutterBottom>
                                    {status}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Link>
        </div>
    );
}
export default Restaurant