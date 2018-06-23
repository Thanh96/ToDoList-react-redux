import React, { Component } from 'react';

import Search from './search';
import Sort from './sort';

class Control extends Component {
  render() {
    return (
        <div className="Control">
          <div className="row">
            <div className="col-sm-06">
              <Search search = {this.props.search}/>
            </div>
            <div className="offset-sm-2 col-sm-02">
              <Sort sort = {this.props.sort}/>
            </div>
          </div>
        </div>
    );
  }
}

export default Control;
