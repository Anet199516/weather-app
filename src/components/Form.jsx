/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.weatherMethod}>
       <input type="text" name="city" placeholder="City" />
       <input type="text" name="country" placeholder="Country" />
       <button>Get the Weather</button>
     </form>
    );
  }
}

export default Form;
