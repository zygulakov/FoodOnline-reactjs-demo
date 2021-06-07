import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Grid, Box, Tab, Tabs, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const Food = () => {
    const restaurantList = useSelector(state => state)
    return (
        <Box>
            
    </Box>
    )
}
export default Food