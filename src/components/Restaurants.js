import Restaurant from './Restaurant.js'
import { useSelector } from 'react-redux'
import { Grid, Box } from '@material-ui/core'


const Restaurants = () => {
    const restaurantList = useSelector(state => state)
    return (
        <Box>
            <Grid container>
                {restaurantList?.map((rest, index) => {
                    return (<Restaurant key={index}
                        name={rest.name}
                        descr={rest.descr}
                        status={rest.status}
                        rating={rest.rating}
                        imgSrc={rest.image}
                    />)
                })
                }
            </Grid>
        </Box>
    )
}
export default Restaurants