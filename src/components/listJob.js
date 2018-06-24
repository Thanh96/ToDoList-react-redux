import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemJob from './itemJob';

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
    this.props.onFilter(name, value);
    this.setState({
      [name]: value
    });
  };

  render() {
    let listTask = this.props.listTask;

    let itemTask = listTask.map((value,key) => {
      return <ItemJob
                itemTask={value}
                key={key}
                updateJob = {this.props.updateJob}
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
    listTask: state.task
  }
};

export default connect(mapStateToProps, null) (ListJob);
