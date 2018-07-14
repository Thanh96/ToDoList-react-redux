import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemJob from './itemJob';

import * as action from '../action/index';

class ListJob extends Component {

  constructor() {
    super();
    this.state = {
      selectText: "",
      sort: 1
    };
  }

  changeForm = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      [name]: value
    });
    this.props.onFilterTable({[name]: value});
  };

  render() {
    let listTask = this.props.listTask;

    if (this.props.filterTable) {
      let filterTable = this.props.filterTable;
      if (filterTable.sort !== 1) {
        if(filterTable.sort === "2") {
          listTask = listTask.filter(item => item.status === true);
        }
        if(filterTable.sort === "3") {
          listTask = listTask.filter(item => item.status === false);
        }
      }
      if (filterTable.text) {
        listTask = listTask
         .filter(item => item.name.toLowerCase().indexOf(filterTable.text) !== -1);
      }
    }

    let itemTask = listTask.map((value,key) => {
      return <ItemJob
                itemTask={value}
                key={key}
                deleteJob = {this.props.deleteJob}
                stt={key}/>
    });

    return (
        <div className="listJob">
          <table className="table table-bordered">
            <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên</th>
              <th scope="col">Trạng Thái</th>
              <th scope="col">Hành động</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>#</td>
                <td><input type="text"
                           onChange={this.changeForm}
                           name="selectText"
                           value={this.state.selectText}
                           className="form-control"/>
                </td>
                <td>
                  <select className="form-control"
                          value={this.state.sort}
                          onChange={this.changeForm}
                          name="sort">
                    <option value={1}>Tất cả</option>
                    <option value={2}>Đã xong</option>
                    <option value={3}>Chưa xong</option>
                  </select>
                </td>
                <td>#</td>
              </tr>
              {itemTask}
            </tbody>
          </table>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listTask: state.task,
    filterTable: state.filterTable
  }
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    onFilterTable: (filter) => {
      dispatch(action.filterTable(filter))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps) (ListJob);
