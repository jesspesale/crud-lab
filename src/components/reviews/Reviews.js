import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  // have access to restaurant id

  render() {
    const {reviews, restaurantId, deleteReview} = this.props

    const filteredReviews = reviews.filter(review => review.restaurantId === restaurantId)

    const allReviews = filteredReviews.map(review => {
      return (
        <Review 
        review={review} 
        key={review.id} 
        restaurantId={review.restaurantId} 
        deleteReview={deleteReview}
        />
      )
    })
    
    return (
      <ul>
        Reviews
        {allReviews}
      </ul>
    );
  }
};

export default Reviews;