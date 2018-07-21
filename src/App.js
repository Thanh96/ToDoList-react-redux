import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './action/index';

import AddNew from './components/addNew';
import Control from './components/control';
import ListJob from './components/listJob';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: null,
    };
  }

  addJob = () => {
    this.props.controlForm()
  };

  hiddenAdd = () => {
    this.props.closeForm();
  };

  render() {
    let {showAdd} = this.props;

    let showForm = showAdd? <AddNew
        hiddenAdd={this.hiddenAdd}/>: "";
    return (
      <div className="App container">
        <h1>Quản lý công việc</h1>
        <hr/>
        <div className="row">
          <div className={showAdd? 'col-sm-4': ''}>
            {showForm}
          </div>
          <div className={showAdd? 'col-sm-8' : 'col-sm-12'}>
            <button type="button"
                    className="buttonAdd btn btn-primary"
                    onClick={this.addJob}>
              Thêm công việc
            </button>
            <div className="control">
              <Control />
            </div>
            <ListJob />
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    showAdd: state.formControl
  }
};

let mapDispatchToProps = (dispatch, props) => {
    return {
      controlForm: () => {
        dispatch(action.controlForm());
      },
      closeForm: () => {
        dispatch(action.closeForm());
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
