import React, { Component } from 'react';
import loading from '../assets/loader.svg';

export default class Spinner extends Component {
  render() {
    return (
      <div className='flex justify-center items-center'>
        <img src={loading} alt="loading..." className='mix-blend-multiply' />
      </div>
    );
  }
}
