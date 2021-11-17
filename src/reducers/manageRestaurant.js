import cuid from 'cuid';
export const cuidFn = cuid;
 
export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {

    switch(action.type) {
        case "ADD_RESTAURANT":
            const restaurant = { text: action.text, id: cuidFn() };
            return {
                ...state,
                restaurants: [...state.restaurants, restaurant]
            }
        case "DELETE_RESTAURANT":
            return {
                ...state,
                restaurants: state.restaurants.filter(rest => rest.id !== action.id)
            }
        case "ADD_REVIEW":
            // console.log(action.payload)
            return {
                ...state,
                reviews: [...state.reviews, {text: action.review.text, id: cuidFn(), restaurantId: action.review.id }]
            }
        
        case "DELETE_REVIEW":
            // debugger
            return {
                ...state,
                reviews: state.reviews.filter(review => review.id !== action.id)

            }
        default:
            return state
    }
}

