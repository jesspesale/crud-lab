import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ""
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.props.restaurantId)
    this.props.addReview({text: this.state.text, id: this.props.restaurantId})
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleSubmit} >
          <input 
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        <input 
          type="submit"
          onSubmit={this.handleSubmit}
        />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
