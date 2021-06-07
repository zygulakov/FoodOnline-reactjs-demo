import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Tab, Tabs } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Foods from "./Foods"
import Food from "./Food"



const RestaurantPage = ({ match }) => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const id = match.params.id;
    const res = useSelector((state) => state).filter(r => r.id === id)[0];

    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            backgroundColor: "primary"
        },
    });
    const classes = useStyles();
    return (
        <>
            <Tabs
                className={classes.root}
                value={value}
                onChange={handleChange}
                centered
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab label="Foods" />
                <Tab label="Menu" />
                <Tab label="Info" />
            </Tabs>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    src="‪https://material-ui.com/static/images/cards/paella.jpg"
                    title="Contemplative Reptile"
                    style={{ height: 80 }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {res.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {res.descr}
                    </Typography>
                </CardContent>
            </Card>
            <Foods/>
        </>


    )
}
export default RestaurantPage