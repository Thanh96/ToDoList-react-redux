import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as action from '../action/index';
class Search extends Component {
  constructor(props) {
      super(props);
      this.state = {
        textSearch: ''
      }
  }

  changeForm = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  onSearch = (e) => {
    e.preventDefault();
    this.props.onFilterTable(this.state);
  };

  render() {
    return (
        <div className="Search">
          <form onSubmit={this.onSearch} className="form-inline">
            <div className="form-group">
              <input type="type"
                     className="form-control"
                     name = "textSearch"
                     onChange={this.changeForm}
                     value={this.state.textSearch}/>
            </div>
            <button type="submit"  className="btn btn-primary">Search</button>
          </form>
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
    onFilterTable : (filter) => {
      dispatch(action.filterTable(filter))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps) (Search);
