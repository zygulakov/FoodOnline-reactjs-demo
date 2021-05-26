import { useSelector } from 'react-redux'
import { Grid, Box, Typography } from '@material-ui/core'


const RestaurantPage = ({match}) => {
    const  id = match.params.id;
    const res = useSelector((state) => state).filter(r=>r.id===id)[0];
    return (
        <Box>
            <Grid container>
               <Typography variant='h3'>{res.id}</Typography>
               <Typography variant='h3'>{res.name}</Typography>
               <Typography variant='h3'>{res.descr}</Typography>
            </Grid>
        </Box>
    )
}
export default RestaurantPage