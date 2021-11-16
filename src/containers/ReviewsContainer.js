import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from "react-redux"

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.props.reviews} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {

  return {
    addReview: (input) => dispatch({type: "ADD_REVIEW", payload: input})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
