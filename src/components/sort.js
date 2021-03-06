import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../action/index';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      value: -1,
    }
  }

  selectSort = (name, value) => {
    this.setState({
      name: name,
      value: value
    });
    this.props.sortTable({[name]: value});

  };

  render() {
    return (
        <div className="Sort">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sắp xếp
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li onClick={ () => this.selectSort('name', 1)}
                  className="dropdown-item">A - Z</li>
              <li onClick={ () => this.selectSort('name', -1)}
                  className="dropdown-item">Z - A</li>
              <li onClick={ () => this.selectSort('status', 1)}
                  className="dropdown-item">Đã xong</li>
              <li onClick={ () => this.selectSort('status', -1)}
                  className="dropdown-item">Chưa xong</li>
            </ul>
          </div>
        </div>
    );
  }
}

const mapStateToProps = () => {
  return {

  }
};

const mapDispatchToProps = (dispatch, state) => {
  return {
      sortTable : (sort) => {
        dispatch(actions.sortTable(sort))
      }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Sort);
