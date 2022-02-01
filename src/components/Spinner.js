import React, { Component } from 'react';
import loading from './loading.gif';

export class Spinner extends Component {
  render() {
    return <div className="text-center">
        <img src={loading} alt="loading" className="my-3" />
    </div>;
  }
}

export default Spinner;
