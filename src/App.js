import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as action from './action/index';

import AddNew from './components/addNew';
import Control from './components/control';
import ListJob from './components/listJob';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editJob: null,
      filter: null,
      search: null,
      sort: null,
    };
  }

  addJob = () => {
    this.props.controlForm()
  };

  hiddenAdd = () => {
    this.props.closeForm();
  };

  onFilter = (name, value) => {
    value = name === 'sort'? parseInt(value, 10): value;
    this.setState({
      filter : {
        name: name,
        value: value
      }
    });
  };

  onSort = (name, value) => {
    this.setState({
      sort : {
        name: name,
        value: value
      }
    });
  };

  searchJob = (textSearch) => {
    this.setState({
      filter: {
        name: 'selectText',
        value: textSearch
      }
    })
  };

  render() {
    let {filter, listTask, sort} = this.state;
    let {showAdd} = this.props;

    if(this.state.filter) {
      if(filter.name === 'sort') {
        if(filter.value === 2) {
          listTask = _.filter(listTask,(task) => task.status === true);
        }
        if(filter.value === 3) {
          listTask = listTask.filter(item => item.status === false);
        }
      } else {
        listTask = listTask.filter(item => item.name.toLowerCase().indexOf(filter.value.toLowerCase()) !== -1);
      }
    }

    if(sort) {
      if(sort.name === 'sort') {
        listTask.sort((a, b) => {
          if(a.name > b.name) return sort.value;
          else if(a.name < b.name) return -sort.value;
          else return 0;
        });
      } else {
        listTask.sort((a, b) => {
          if(b.status > a.status) return sort.value;
          else if(b.status < a.status) return -sort.value;
          else return 0;
        });
      }
    }

    let showForm = showAdd? <AddNew
        editJob = {this.state.editJob}
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
              <Control search = {this.searchJob} sort = {this.onSort} />
            </div>
            <ListJob
                onFilter = {this.onFilter}
                selectText = {this.selectText}
                updateJob = {this.updateJob}
                updateState = {this.updateState}
                deleteJob = {this.deleteJob}/>
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
