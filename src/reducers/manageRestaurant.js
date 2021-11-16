import cuid from 'cuid';
export const cuidFn = cuid;
 
export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {

    switch(action.type) {
        case "ADD_RESTAURANT":
            const restaurant = { text: action.payload, id: cuidFn() };
            return {
                ...state,
                restaurants: [...state.restaurants, restaurant]
            }
        case "DELETE_RESTAURANT":
            return {
                ...state,
                restaurants: state.restaurants.filter(rest => rest.id !== action.payload)
            }
        case "ADD_REVIEW":
            return {
                ...state,
                reviews: [...state.reviews, {text: action.payload, id: cuidFn(), restaurantId: 5 }]
            }
            
        default:
            return state
    }
}

