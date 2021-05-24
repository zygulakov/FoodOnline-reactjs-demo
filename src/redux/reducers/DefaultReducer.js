import { ActionTypes } from '../constants/action-types';

const restaurants = [
    {
        name: 'McDonalds',
        descr: 'FastFoods and Fries',
        status: 'open',
        rating: '8.2',
        image: 'http://fullhdpictures.com/wp-content/uploads/2016/11/Restaurant-Wallpapers.jpg'
    },
    {
        name: 'McDonalds and ',
        descr: 'FastFoods and Fries',
        status: 'open',
        rating: '8.2',
        image: 'https://images5.alphacoders.com/686/686085.jpg'
    },
    {
        name: 'McDonalds',
        descr: 'FastFoods and Fries',
        status: 'open',
        rating: '8.3',
        image: 'https://wallpapercave.com/wp/wp2038160.jpg'
    },
    {
        name: 'McDonalds',
        descr: 'FastFoods and Fries',
        status: 'open',
        rating: '8.2',
        image: 'https://wallpapercave.com/wp/wp2038160.jpg'
    },
    {
        name: 'McDonalds',
        descr: 'FastFoods and Fries',
        status: 'open',
        rating: '8.2',
        image: 'https://wallpapercave.com/wp/wp2038160.jpg'
    },
    {
        name: 'McDonalds',
        descr: 'FastFoods and Fries',
        status: 'open',
        rating: '8.2',
        image: 'https://wallpapercave.com/wp/wp2038160.jpg'
    },
    {
        name: 'McDonalds',
        descr: 'FastFoods and Fries',
        status: 'open',
        rating: '8.2',
        image: 'https://wallpapercave.com/wp/wp2038160.jpg'
    },
    {
        name: 'McDonalds',
        descr: 'FastFoods and Fries',
        status: 'open',
        rating: '8.2',
        image: 'https://wallpapercave.com/wp/wp2038160.jpg'
    },
    {
        name: 'McDonalds',
        descr: 'FastFoods and Fries',
        status: 'open',
        rating: '8.2',
        image: 'https://wallpapercave.com/wp/wp2038160.jpg'
    }
]

const defaultReducer = (state = restaurants, type) => {
    switch (type) {
        case ActionTypes.GET_RESTAURANTS:
            return state
        default:
            return state
    }
}
export default defaultReducer;