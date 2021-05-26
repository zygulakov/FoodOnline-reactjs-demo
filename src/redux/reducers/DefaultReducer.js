import { ActionTypes } from '../constants/action-types';

const restaurants = [
    {
        id:"1",
        name: 'McDonalds',
        descr: 'FastFoods and Fries',
        status: 'open',
        rating: '8.2',
        image: 'https://image.flaticon.com/icons/png/512/732/732217.png'
    },
    {
        id:"2",
        name: 'KFC',
        descr: 'FastFoods and Chickens',
        status: 'open',
        rating: '8.2',
        image: 'https://as1.ftcdn.net/jpg/02/24/08/18/500_F_224081805_oJVtH5z1yG15Vypn7phCbElRqrpVEZAt.jpg'
    },
    {
        id:"3",
        name: 'Xuruzak',
        descr: 'FastFoods and Fries',
        status: 'open',
        rating: '8.3',
        image: 'https://as1.ftcdn.net/jpg/01/93/87/60/500_F_193876041_ifLVrKAIOnfg7UsD81vDTl2zRKYqmVXL.jpg'
    },
    {
        id:"4",
        name: 'McDonalds',
        descr: 'FastFoods and Fries',
        status: 'open',
        rating: '8.2',
        image: 'https://as1.ftcdn.net/jpg/01/93/87/60/500_F_193876041_ifLVrKAIOnfg7UsD81vDTl2zRKYqmVXL.jpg'
    },
    {
        id:"5",
        name: 'McDonalds',
        descr: 'FastFoods and Fries',
        status: 'open',
        rating: '8.2',
        image: 'https://as1.ftcdn.net/jpg/01/93/87/60/500_F_193876041_ifLVrKAIOnfg7UsD81vDTl2zRKYqmVXL.jpg'
    },
    {
        id:"6",
        name: 'McDonalds',
        descr: 'FastFoods and Fries',
        status: 'open',
        rating: '8.2',
        image: 'https://as1.ftcdn.net/jpg/01/93/87/60/500_F_193876041_ifLVrKAIOnfg7UsD81vDTl2zRKYqmVXL.jpg'
    },
    {
        id:"7",
        name: 'McDonalds',
        descr: 'FastFoods and Fries',
        status: 'open',
        rating: '8.2',
        image: 'https://as1.ftcdn.net/jpg/01/93/87/60/500_F_193876041_ifLVrKAIOnfg7UsD81vDTl2zRKYqmVXL.jpg'
    },
    {
        id:"8",
        name: 'McDonalds',
        descr: 'FastFoods and Fries',
        status: 'open',
        rating: '8.2',
        image: 'https://as1.ftcdn.net/jpg/01/93/87/60/500_F_193876041_ifLVrKAIOnfg7UsD81vDTl2zRKYqmVXL.jpg'
    },
    {
        id:"9",
        name: 'McDonalds',
        descr: 'FastFoods and Fries',
        status: 'open',
        rating: '8.2',
        image: 'https://as1.ftcdn.net/jpg/01/93/87/60/500_F_193876041_ifLVrKAIOnfg7UsD81vDTl2zRKYqmVXL.jpg'
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