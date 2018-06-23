import React, { Component } from 'react';


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
    })
  };

  onSearch = (e) => {
    e.preventDefault();
    this.props.search(this.state.textSearch);
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

export default Search;
