import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as action from '../action/index';

class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: false
    }
  }

  // componentWillMount() {
  //   if(this.props.editJob) {
  //     this.setState({
  //       id: this.props.editJob.id,
  //       name: this.props.editJob.name,
  //       status: this.props.editJob.status,
  //     })
  //   }
  // }
  //
  // componentWillReceiveProps(newProps) {
  //   if(newProps && newProps.editJob) {
  //     this.setState({
  //       id: newProps.editJob.id,
  //       name: newProps.editJob.name,
  //       status: newProps.editJob.status
  //     })
  //   }
  // }


  hiddenAdd = () => {
    this.props.hiddenAdd();
  };

  changeForm = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  itemId = () => {
    return Math.floor((1 + Math.random())* 0x1000).toString().substring(3)
  };

  generateId = () => {
    return this.itemId() + '-' + this.itemId() + '-' + this.itemId() + '-' + this.itemId();
  };

  submitAdd = (e) => {
    e.preventDefault();
    let newJob = this.state;
    newJob.id = this.generateId();
    newJob.status = newJob.status === 'true'? true: false;
    this.props.onAddTask(newJob);
    this.setState({
      name: ""
    });
    this.hiddenAdd();
  };

  render() {
    return (
        <div className="addNew">

          <div className="card">
            <div className="card-body">
              <div className="card-title">
                {this.props.editJob? 'Cập Nhập Công Việc' : 'Thêm Công Việc'}
                <span onClick={this.hiddenAdd}>X</span>
              </div>
              <div className="card-text">
                <form onSubmit={this.submitAdd}>
                  <div className="form-group">
                    <label >Tên:</label>
                    <input type="type"
                           className="form-control"
                           name="name"
                           id="exampleInputEmail1"
                           value={this.state.name}
                           onChange={this.changeForm}
                           placeholder="Nhập tên công việc"/>
                  </div>
                  <div className="form-group">
                    <label>Trạng Thái:</label>
                    <select className="form-control"
                            name="status"
                            onChange={this.changeForm}
                            value={this.state.status}>
                      <option value={true}>Đã xong</option>
                      <option value={false}>Chưa xong</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    {this.props.editJob? "Update" : "Add"}
                  </button> &nbsp;
                  <button type="reset" className="btn btn-default">Làm mới</button>
                </form>
              </div>
              {/*card-text*/}
            </div>
            {/*card-body*/}
          </div>
          {/*card*/}
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      dispatch(action.addTask(task));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNew);
