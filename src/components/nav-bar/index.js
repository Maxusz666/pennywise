import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class NavBar extends Component {
  state = {
    url: this.props.url,
    isDirty: false
  };

  render() {
    return (
      <div className='top-nav'>
        <button className="btn btn-dark"><i className="fa fa-arrow-left"/></button>
        <button className="btn btn-dark"><i className="fa fa-arrow-right"/></button>
        <button className="btn btn-dark"><i className="fa fa-refresh"/></button>
        <div className="search-field">
          <input type="text" placeholder='Enter the URL to load' value={ this.state.url }/>
        </div>
        <button className="btn btn-danger btn-go">
          { !this.state.isDirty ? <i className='fa fa-times'/> : 'Load Page' }
        </button>
      </div>
    );
  }
}

NavBar.propTypes = {
  url: PropTypes.string.isRequired
};

export default NavBar;