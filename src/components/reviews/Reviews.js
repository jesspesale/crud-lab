import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const allReviews = this.props.reviews.map(review => {
      // console.log(review),
      return <Review review={review} key={review.id} restaurantId={review.restaurantId} />

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